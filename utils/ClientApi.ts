import "isomorphic-fetch";
import {ApiError, ValidationError, TokenError} from "./Errors";
/**
 * Manages client API requests
 */
export class ClientApi {

    static JSON_MIME_TYPE = "application/json";

    static GET = "get";
    static POST = "post";
    static PUT = "put";
    static DELETE = "delete";

    /**
     * Backend root url
     */
    private backendUrl: string;

    /**
     * @constructor
     */
    public constructor(backendUrl: string) {
        this.backendUrl = backendUrl;
    }

    /**
     * Normalizes request url
     * @param endpoint
     * @param method
     * @param data
     */
    private normalizeUrl(endpoint: string, method?: string, data?: { [key: string]: any }): string {
        let fullUrl = endpoint;

        // Prepend backend url if endpoint is not full url (i.e /myapi)
        if (!/\/\//.test(endpoint)) {
            if (!/\/\//.test(this.backendUrl)) {
                // Prepend // if backend url doesn't contain scheme (i.e. api.example.com)
                fullUrl = '//' + this.backendUrl + endpoint;
            } else {
                // Full url with scheme http://api.example.com
                fullUrl = this.backendUrl + endpoint;
            }

        }
        // let uri = URI(fullUrl);
        // return uri.toString();
        if (method === ClientApi.GET && data && Object.keys(data).length > 0) {
            let params = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
            if (/\?/.test(fullUrl)) {
                fullUrl += params;
            } else {
                fullUrl += `?${params}`;
            }
        }
        return fullUrl;
    }

    /**
     * Return if response is JSON encoded
     * @param response
     * @return {boolean}
     */
    private isJSON(response: Response) {
        return response.headers.has("Content-Type") && (response.headers.get("Content-Type") === ClientApi.JSON_MIME_TYPE);
    }

    /**
     * Return default headers
     */
    private getDefaultHeaders(): { [key: string]: string } {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    /**
     * Call using fetch. Return parsed object from JSON (if response contain). Throws ApiError on any unsuccessful codes
     * @param endpoint
     * @param method
     * @param data
     * @param authToken
     */
    public call(endpoint: string, method: string = ClientApi.GET, data?: { [key: string]: any }, authToken?: string) {
        let fullUrl = this.normalizeUrl(endpoint, method, data);

        let requestData: RequestInit = {
            headers: this.getDefaultHeaders(),
            method: method
        };

        if (authToken) {
            requestData.headers = Object.assign({}, this.getDefaultHeaders(), { 'Authorization': `Bearer ${authToken}` });
        }

        if (method !== ClientApi.GET && data) {
            requestData.body = JSON.stringify(data);
        }

        return fetch(fullUrl, requestData).then(response => {
            if (response.status >= 200 && response.status < 300) {
                if (this.isJSON(response)) {
                    return response.json();
                } else {
                    return {};
                }
            } else {
                if (this.isJSON(response)) {
                    return response.json().then(errorJson => {
                        switch (response.status) {
                            case 422:
                                // Pick only the first value for key if it's array
                                for (let key of Object.keys(errorJson)) {
                                    if (Array.isArray(errorJson[key])) {
                                        errorJson[key] = errorJson[key][0];
                                    }
                                }
                                throw new ValidationError(response.url, errorJson);
                            case 401:
                            case 400:
                                if (errorJson.token_invalid || errorJson.token_expired) {
                                    throw new TokenError(errorJson.error, response.url, response.status, errorJson);
                                } else {
                                    throw new ApiError(
                                        (errorJson.error && typeof errorJson.error === "string") ? errorJson.error : "Something went wrong",
                                        response.url,
                                        response.status,
                                        errorJson
                                    );
                                }
                            default:
                                throw new ApiError(
                                    (errorJson.error && typeof errorJson.error === "string") ? errorJson.error : "Something went wrong",
                                    response.url,
                                    response.status,
                                    errorJson
                                );
                        }
                    });
                } else {
                    throw new ApiError(response.statusText, response.url, response.status);
                }
            }
        });
    }
}

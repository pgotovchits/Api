 
/*import {stub, SinonStub} from "sinon";
import {expect} from "chai";
import {ApiError, ValidationError, ClientApi, TokenError} from "../ClientApi";
import Config from "../Config";
import * as fetchMock from "fetch-mock";

describe("Utils/Api",  () => {
    describe("Errors", () => {
        let responseMock: Response;
        beforeEach(() => {
            responseMock = {} as any;
            responseMock.url = "http://test.com";
            responseMock.status = 400;
            responseMock.statusText = "Test status"
        });

        describe("ApiError", () => {
            it("Should take parameters from constructor", () => {
                let error = new ApiError("http://test.com", 500, "Tett error", {error: "test"}, responseMock);
                expect(error.url).to.equal("http://test.com");
                expect(error.code).to.equal(500);
                expect(error.message).to.equal("Tett error");
                expect(error.error).to.deep.equal({error: "test"});
                expect(error.response).to.equal(responseMock);
            });

        });

        describe("ValidationError", () => {
            it("Should take parameters from constructor", () => {
                let validationErrors: any = {
                    email: "Wrong email"
                };
                let error = new ValidationError("http://test.com", validationErrors);
                expect(error.url).to.equal("http://test.com");
                expect(error.code).to.equal(422);
                expect(error.message).to.equal("Validation error");
                expect(error.error).to.deep.equal(validationErrors);
            });
        });
    });

    describe("ClientApi", () => {
        let configStub: SinonStub;
        beforeEach(() => {
            configStub = stub(Config, "backendUrl", { get: () => "http://api.com" });
        });
        afterEach(() => {
            configStub.restore();
        });

        describe("It should send request using fetch", () => {
            beforeEach(() => {
                fetchMock.mock("http://test.com", 200);
                fetchMock.mock("http://api.com/myapi", 200);
                fetchMock.mock("http://get.test.com", "GET", 200);
                fetchMock.mock("http://post.test.com", "POST", 200);
            });
            afterEach(() => {
                fetchMock.restore();
            });
            context("When full url was given", () => {
                it("Should call with given url", () => {
                    let api = new ClientApi();
                    return api.call("http://test.com").then(() => {
                        expect(fetchMock.called("http://test.com")).to.be.true;
                    });
                });
            });

            context("When partial url was given", () => {
                it("Should prepend url from config", () => {
                    let api = new ClientApi();
                    return api.call("/myapi").then(() => {
                        expect(fetchMock.called("http://api.com/myapi")).to.be.true;
                    });
                });
            });

            it("Should send using GET method by default", () => {
                let api = new ClientApi();
                return api.call("http://get.test.com").then(() => {
                    expect(fetchMock.called("http://get.test.com")).to.be.true;
                });
            });

            it("Should send using specified method", () => {
                let api = new ClientApi();
                return api.call("http://post.test.com", ClientApi.POST).then(() => {
                    expect(fetchMock.called("http://post.test.com")).to.be.true;
                });
            });

            describe("It should send specified data", () => {
                let data = {
                    value1: "test",
                    value2: true,
                    value3: 5
                };
                it("Should convert and append data to url when method is GET", () => {
                    let api = new ClientApi();
                    fetchMock.mock("http://get.test.com?value1=test&value2=true&value3=5", 200);
                    return api.call("http://get.test.com", ClientApi.GET, data).then(() => {
                        expect(fetchMock.called("http://get.test.com?value1=test&value2=true&value3=5")).to.be.true;
                    });
                });

                it("Should send data in body when method is not GET", () => {
                    let api = new ClientApi();
                    return api.call("http://post.test.com", ClientApi.POST, data).then(() => {
                        let mockCall = fetchMock.calls("http://post.test.com").pop();
                        let [,opts] = mockCall;
                        expect(mockCall).to.exist;
                        expect(opts.body).to.equal(JSON.stringify(data));
                    });
                });

                it("Should send default headers", () => {
                    let api = new ClientApi();
                    return api.call("http://get.test.com").then(() => {
                        let [,opts] = fetchMock.calls("http://get.test.com").pop();
                        expect(opts.headers).to.deep.equal({
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        });
                    });
                });

                it("Should send authorization header with token if specified along with default headers", () => {
                    let api = new ClientApi();
                    return api.call("http://get.test.com", ClientApi.GET, {}, "testtoken").then(() => {
                        let [,opts] = fetchMock.calls("http://get.test.com").pop();
                        expect(opts.headers).to.deep.equal({
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer testtoken'
                        });
                    });
                });
            });

        });

        describe("It should handle response", () => {
            let api: ClientApi;
            beforeEach(() => {
                api = new ClientApi();
            });
            afterEach(() => {
                fetchMock.restore();
            });
            context("Successful response", () => {
                it("Should return empty object when response is not JSON", () => {
                    fetchMock.mock("http://api.com/test", {
                        body: "Not a json body",
                        sendAsJson: false
                    });

                    api.call("http://api.com/test").then((response) => {
                        expect(response).to.be.deep.equal({});
                    });
                    fetchMock.restore();
                });

                it("Should return parsed JSON response", () => {
                    fetchMock.mock("http://api.com/test", {
                        body: {
                            test: "test", test2: "lol"
                        },
                        headers: {"Content-Type": ClientApi.JSON_MIME_TYPE}
                    });
                    return api.call("http://api.com/test").then(response => {
                        expect(response).to.deep.equal({test: "test", test2: "lol"});
                    });
                });
            });

            context("Unsuccessful response", () => {
                it("Should throw ApiError when response is not JSON", () => {
                    fetchMock.mock("http://api.com/unsuccess", {
                        body: "Not as json",
                        status: 500,
                        sendAsJson: false
                    });

                    return api.call("http://api.com/unsuccess").catch(err => {
                        expect(err).to.be.instanceOf(ApiError);
                        expect(err.error).to.be.undefined;
                    });
                });

                it("Should throw ApiError with error from JSON", () => {
                    fetchMock.mock("http://api.com/unsuccess", {
                        body: {
                            error: "This is server error"
                        },
                        headers: {"Content-Type": ClientApi.JSON_MIME_TYPE},
                        status: 500
                    });

                    return api.call("http://api.com/unsuccess").catch(err => {
                        expect(err).to.be.instanceOf(ApiError);
                        expect(err.error).to.deep.equal({error: "This is server error"});
                        expect(err.message).to.equal("This is server error");
                    })
                });

                it("Should throw TokenError if status code 400 and json response contain 'token_invalid'", () => {
                    fetchMock.mock("http://api.com/unsuccess", {
                        body: {
                            error: "Token invalid",
                            token_invalid: true
                        },
                        headers: {"Content-Type": ClientApi.JSON_MIME_TYPE},
                        status: 400
                    });

                    return api.call("http://api.com/unsuccess").catch(err => {
                        expect(err).to.be.instanceOf(TokenError);
                    });
                });

                it("Should throw TokenError if status code 401 and json response contain 'token_expired'", () => {
                    fetchMock.mock("http://api.com/unsuccess", {
                        body: {
                            error: "Token expired",
                            token_expired: true
                        },
                        headers: {"Content-Type": ClientApi.JSON_MIME_TYPE},
                        status: 401
                    });

                    return api.call("http://api.com/unsuccess").catch(err => {
                        expect(err).to.be.instanceOf(TokenError);
                    });
                });

                it("Should throw ValidationError with error object when status code is 422", () => {
                    fetchMock.mock("http://api.com/unsuccess", {
                        body: {
                            email: "This is server error",
                            password: "Wrong"
                        },
                        headers: {"Content-Type": ClientApi.JSON_MIME_TYPE},
                        status: 422
                    });

                    return api.call("http://api.com/unsuccess").catch(err => {
                        expect(err).to.be.instanceOf(ValidationError);
                        expect(err.error).to.deep.equal({email: "This is server error", password: "Wrong"});
                        expect(err.message).to.equal("Validation error");
                    });
                });

                it("For ValidationError if error object has few validation errors for single key, it should pick up the first one", () => {
                    fetchMock.mock("http://api.com/unsuccess", {
                        body: {
                            email: ["This is server error", "Email was taken"],
                            password: ["Should be 8 chars", "Wrong"]
                        },
                        headers: {"Content-Type": ClientApi.JSON_MIME_TYPE},
                        status: 422
                    });

                    return api.call("http://api.com/unsuccess").catch(err => {
                        expect(err).to.be.instanceOf(ValidationError);
                        expect(err.error).to.deep.equal({email: "This is server error", password: "Should be 8 chars"});
                        expect(err.message).to.equal("Validation error");
                    });

                });
            });

        });
    });

});*/
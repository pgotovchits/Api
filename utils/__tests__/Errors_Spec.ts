jest.dontMock("../Errors");
import {ApiError, ValidationError, TokenError, createFromObject} from "../Errors";

describe("Errors", () => {
    describe("ApiError", () => {
        it("Should be instance of ApiError", () => {
            let error = new ApiError("test", "test.com", 500);
            expect(error instanceof ApiError).toBeTruthy();
        });
        
        it("Should be instance of Error", () => {
            let error = new ApiError("test", "test.com", 500);
            expect(error instanceof Error).toBeTruthy();
        });
        
        it("Should contain properties", () => {
            let error = new ApiError("test", "test.com", 500, { error: "test" });
            expect(error.message).toEqual("test");
            expect(error.code).toEqual(500);
            expect(error.url).toEqual("test.com");
            expect(error.error).toEqual({ error: "test" });
        });
        
        it("Could be converted to object", () => {
            let errorObj = new ApiError("test", "test.com", 500, { error: "test" }).toObject();
            expect(errorObj.code).toEqual(500);
            expect(errorObj.type).toEqual("ApiError");
            expect(errorObj.message).toEqual("test");
            expect(errorObj.url).toEqual("test.com");
            expect(errorObj.error).toEqual({ error: "test" });
        });
    });
    
    describe("TokenError", () => {
        it("Should be proper type", () => {
            let error = new TokenError("invalid", "test.com", 400);
            expect(error instanceof TokenError).toBeTruthy();
            expect(error instanceof ApiError).toBeTruthy();
            expect(error instanceof Error).toBeTruthy();
        });
    });
    
    describe("ValidationError", () => {
        it("Should be proper type", () => {
            let error = new ValidationError("test.com", { email: "required" });
            expect(error instanceof ValidationError).toBeTruthy();
            expect(error instanceof ApiError).toBeTruthy();
            expect(error instanceof Error).toBeTruthy();
        });
        
        it("Should containt properties", () => {
            let error = new ValidationError("test.com", { email: "required" });
            expect(error.message).toEqual("Validation error");
            expect(error.code).toEqual(422);
            expect(error.url).toEqual("test.com");
            expect(error.error).toEqual({ email: "required" });
        });
    });
    
    describe("createFromObject", () => {
        it("Should return new empty error if given null or undefined", () => {
            let error = createFromObject(null);
            expect(error instanceof Error).toBeTruthy();
            expect(error instanceof ApiError).toBeFalsy();
        });
        
        it("Should return new error if given object doesn't have type property", () => {
            let error = createFromObject({ message: "simple" } as any);
            expect(error instanceof Error).toBeTruthy();
            expect(error instanceof ApiError).toBeFalsy();
            expect(error.message).toEqual("simple");
        });
        
        it("Should create api error", () => {
            let error = createFromObject({ type: "ApiError", url: "test.com", message: "testmsg", code: 500 });
            expect(error instanceof Error).toBeTruthy();
            expect(error instanceof ApiError).toBeTruthy();
        });
        
        it("Should create token error", () => {
            let error = createFromObject({ type: "TokenError", url: "test.com", message: "testmsg", code: 400 });
            expect(error instanceof Error).toBeTruthy();
            expect(error instanceof ApiError).toBeTruthy();
            expect(error instanceof TokenError).toBeTruthy();
        });
        
        it("Should create validation error", () => {
            let error = createFromObject({ type: "ValidationError", url: "test.com", message: "testmsg", code: 422 });
            expect(error instanceof Error).toBeTruthy();
            expect(error instanceof ApiError).toBeTruthy();
            expect(error instanceof ValidationError).toBeTruthy();
        });
    });
});
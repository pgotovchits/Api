import {expect} from "chai";
import {ApiError, ValidationError, TokenError, createFromObject} from "../Errors";

describe("Errors", () => {
    describe("ApiError", () => {
        it("Should be instance of ApiError", () => {
            const error = new ApiError("test", "test.com", 500);
            expect(error).to.be.instanceOf(ApiError);
        });
        
        
        it("Should contain properties", () => {
            const error = new ApiError("test", "test.com", 500, { error: "test" });
            expect(error.message).to.equal("test");
            expect(error.code).to.equal(500);
            expect(error.url).to.equal("test.com");
            expect(error.error).to.deep.equal({ error: "test" });
        });
        
        it("Could be converted to object", () => {
            const errorObj = new ApiError("test", "test.com", 500, { error: "test" }).toObject();
            expect(errorObj.code).to.equal(500);
            expect(errorObj.type).to.equal("ApiError");
            expect(errorObj.message).to.equal("test");
            expect(errorObj.url).to.equal("test.com");
            expect(errorObj.error).to.deep.equal({ error: "test" });
        });
    });
    
    describe("TokenError", () => {
        it("Should be proper type", () => {
            const error = new TokenError("invalid", "test.com", 400);
            expect(error).to.be.instanceOf(TokenError);
            expect(error).to.be.instanceOf(ApiError);
            expect(error).to.be.instanceOf(Error);
        });
    });
    
    describe("ValidationError", () => {
        it("Should be proper type", () => {
            const error = new ValidationError("test.com", { email: "required" });
            expect(error).to.be.instanceOf(ValidationError);
            expect(error).to.be.instanceOf(ApiError);
            expect(error).to.be.instanceOf(Error);
        });
        
        it("Should containt properties", () => {
            const error = new ValidationError("test.com", { email: "required" });
            expect(error.message).to.equal("Validation error");
            expect(error.code).to.equal(422);
            expect(error.url).to.equal("test.com");
            expect(error.error).to.deep.equal({ email: "required" });
        });
    });
    
    describe("createFromObject", () => {
        it("Should return new empty error if given null or undefined", () => {
            const error = createFromObject(null);
            expect(error).to.be.instanceOf(Error);
            expect(error).to.not.be.instanceOf(ApiError);
        });
        
        it("Should return new error if given object doesn't have type property", () => {
            const error = createFromObject({ message: "simple" } as any);
            expect(error).to.be.instanceOf(Error);
            expect(error).to.not.be.instanceOf(ApiError);
            expect(error.message).to.equal("simple");
        });
        
        it("Should create api error", () => {
            const error = createFromObject({ type: "ApiError", url: "test.com", message: "testmsg", code: 500 });
            expect(error).to.be.instanceOf(Error);
            expect(error).to.be.instanceOf(ApiError);
        });
        
        it("Should create token error", () => {
            const error = createFromObject({ type: "TokenError", url: "test.com", message: "testmsg", code: 400 });
            expect(error).to.be.instanceOf(Error);
            expect(error).to.be.instanceOf(ApiError);
            expect(error).to.be.instanceOf(TokenError);
        });
        
        it("Should create validation error", () => {
            const error = createFromObject({ type: "ValidationError", url: "test.com", message: "testmsg", code: 422 });
            expect(error).to.be.instanceOf(Error);
            expect(error).to.be.instanceOf(ApiError);
            expect(error).to.be.instanceOf(ValidationError);
        });
    });
});
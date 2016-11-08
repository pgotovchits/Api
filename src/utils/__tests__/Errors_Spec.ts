import { expect } from "chai";
import { ApiError, ValidationError, TokenError, createFromObject, RealtimeError, REALTIME_ERROR, API_ERROR, TOKEN_ERROR, VALIDATION_ERROR } from "../Errors";

describe("Errors", () => {
    describe("RealtimeError", () => {
        it("Should be instance of RealtimeError", () => {
            const error = new RealtimeError("test error", "test action");
            expect(error).to.be.instanceOf(RealtimeError);
        });

        it("Should contain properties", () => {
            const error = new RealtimeError("test error", "test action");
            expect(error.message).to.equal("test error");
            expect(error.action).to.equal("test action");
        });

        it("Could be converted to object", () => {
            const error = new RealtimeError("test error", "test action");
            const errorObj = error.toObject();
            expect(errorObj).to.deep.equal({
                message: "test error",
                action: "test action",
                type: REALTIME_ERROR
            });
        });
    });

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
            expect(errorObj.type).to.equal(API_ERROR);
        });
    });

    describe("TokenError", () => {
        it("Should be proper type", () => {
            const error = new TokenError("invalid", "test.com", 400);
            expect(error).to.be.instanceOf(TokenError);
            expect(error).to.be.instanceOf(ApiError);
            expect(error).to.be.instanceOf(Error);
        });
        
        it("Should contain correct type", () => {
            const error = new TokenError("invalid", "test.com", 400);
            expect(error.toObject().type).to.equal(TOKEN_ERROR);
        });
    });

    describe("ValidationError", () => {
        it("Should be proper type", () => {
            const error = new ValidationError("test.com", { email: "required" });
            expect(error).to.be.instanceOf(ValidationError);
            expect(error).to.be.instanceOf(ApiError);
            expect(error).to.be.instanceOf(Error);
        });

        it("Should contain properties", () => {
            const error = new ValidationError("test.com", { email: "required" });
            expect(error.message).to.equal("Validation error");
            expect(error.code).to.equal(422);
            expect(error.url).to.equal("test.com");
            expect(error.error).to.deep.equal({ email: "required" });
        });
        
        it("Should contain correct type", () => {
            const error = new ValidationError("test.com", { email: "required" });
            expect(error.toObject().type).to.equal(VALIDATION_ERROR);
        });
    });

    describe("createFromObject", () => {
        it("Should return new empty error if given null or undefined", () => {
            const error = createFromObject();
            expect(error).to.be.instanceOf(Error);
            expect(error).to.not.be.instanceOf(ApiError);
        });

        it("Should return new error if given object doesn't have type property", () => {
            const error = createFromObject({ message: "simple" } as any);
            expect(error).to.be.instanceOf(Error);
            expect(error).to.not.be.instanceOf(ApiError);
            expect(error.message).to.equal("simple");
        });

        it("Should create realtime error", () => {
            const error = createFromObject({
                message: "test error",
                action: "test action",
                type: REALTIME_ERROR
            });
            expect(error).to.be.instanceOf(RealtimeError);
            expect(error.message).to.equal("test error");
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
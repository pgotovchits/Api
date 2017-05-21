import {
    API_ERROR,
    ApiError,
    createFromObject,
    REALTIME_ERROR,
    RealtimeError,
    TOKEN_ERROR,
    TokenError,
    VALIDATION_ERROR,
    ValidationError
} from "../Errors";

describe("RealtimeError", () => {
    it("Should be instance of RealtimeError", () => {
        const error = new RealtimeError("test error", "test action");
        expect(error).toBeInstanceOf(RealtimeError);
    });

    it("Should contain properties", () => {
        const error = new RealtimeError("test error", "test action");
        expect(error.message).toBe("test error");
        expect(error.action).toBe("test action");
    });

    it("Could be converted to object", () => {
        const error = new RealtimeError("test error", "test action");
        const errorObj = error.toObject();
        expect(errorObj).toEqual({
            message: "test error",
            action: "test action",
            type: REALTIME_ERROR
        });
    });
});

describe("ApiError", () => {
    it("Should be instance of ApiError", () => {
        const error = new ApiError("test", "test.com", 500);
        expect(error).toBeInstanceOf(ApiError);
    });


    it("Should contain properties", () => {
        const error = new ApiError("test", "test.com", 500, { error: "test" });
        expect(error.message).toBe("test");
        expect(error.code).toBe(500);
        expect(error.url).toBe("test.com");
        expect(error.error).toEqual({ error: "test" });
    });

    it("Could be converted to object", () => {
        const errorObj = new ApiError("test", "test.com", 500, { error: "test" }).toObject();
        expect(errorObj.code).toBe(500);
        expect(errorObj.type).toBe("ApiError");
        expect(errorObj.message).toBe("test");
        expect(errorObj.url).toBe("test.com");
        expect(errorObj.error).toEqual({ error: "test" });
        expect(errorObj.type).toBe(API_ERROR);
    });
});

describe("TokenError", () => {
    it("Should be proper type", () => {
        const error = new TokenError("invalid", "test.com", 400);
        expect(error).toBeInstanceOf(TokenError);
        expect(error).toBeInstanceOf(ApiError);
        expect(error).toBeInstanceOf(Error);
    });

    it("Should contain correct type", () => {
        const error = new TokenError("invalid", "test.com", 400);
        expect(error.toObject().type).toBe(TOKEN_ERROR);
    });
});

describe("ValidationError", () => {
    it("Should be proper type", () => {
        const error = new ValidationError("test.com", { email: "required" });
        expect(error).toBeInstanceOf(ValidationError);
        expect(error).toBeInstanceOf(ApiError);
        expect(error).toBeInstanceOf(Error);
    });

    it("Should contain properties", () => {
        const error = new ValidationError("test.com", { email: "required" });
        expect(error.message).toBe("Validation error");
        expect(error.code).toBe(422);
        expect(error.url).toBe("test.com");
        expect(error.error).toEqual({ email: "required" });
    });

    it("Should contain correct type", () => {
        const error = new ValidationError("test.com", { email: "required" });
        expect(error.toObject().type).toBe(VALIDATION_ERROR);
    });
});

describe("createFromObject", () => {
    it("Should return new empty error if given null or undefined", () => {
        const error = createFromObject();
        expect(error).toBeInstanceOf(Error);
        expect(error).not.toBeInstanceOf(ApiError);
    });

    it("Should return new error if given object doesn't have type property", () => {
        const error = createFromObject({ message: "simple" } as any);
        expect(error).toBeInstanceOf(Error);
        expect(error).not.toBeInstanceOf(ApiError);
        expect(error.message).toBe("simple");
    });

    it("Should create realtime error", () => {
        const error = createFromObject({
            message: "test error",
            action: "test action",
            type: REALTIME_ERROR
        });
        expect(error).toBeInstanceOf(RealtimeError);
        expect(error.message).toBe("test error");
    });

    it("Should create api error", () => {
        const error = createFromObject({ type: "ApiError", url: "test.com", message: "testmsg", code: 500 });
        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(ApiError);
    });

    it("Should create token error", () => {
        const error = createFromObject({ type: "TokenError", url: "test.com", message: "testmsg", code: 400 });
        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(ApiError);
        expect(error).toBeInstanceOf(TokenError);
    });

    it("Should create validation error", () => {
        const error = createFromObject({ type: "ValidationError", url: "test.com", message: "testmsg", code: 422 });
        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(ApiError);
        expect(error).toBeInstanceOf(ValidationError);
    });
});
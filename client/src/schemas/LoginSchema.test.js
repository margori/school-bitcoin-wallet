import { LoginSchema } from "./LoginSchema";

describe("LoginSchema", () => {

    describe("invalid values", () => {
        it.each(
            [
                [{}],
                [{ password: "" }],
                [{ email: "", password: "" }],
                [{ email: "1", password: "" }],
                [{ email: "a", password: "" }],
                [{ email: "A", password: "" }],
                [{ email: "ABC", password: "" }],
                [{ email: "ABCDEFGH", password: "" }],
                [{ email: "abcdefgh", password: "1" }],
                [{ email: "ABCDEFGH", password: "1" }],
                [{ email: "", password: "1" }],
                [{ email: "", password: "123" }],
                [{ email: "", password: "123abc" }],
                [{ email: "", password: "123abcABC" }],
                [{ email: "A", password: "123abcABC" }],
                [{ email: "@startbutton.com.ar", password: "123abcABC" }],
                [{ email: "@startbutton.com.ar", password: "1" }],
                [{ email: "@startbutton.com.ar", password: "123" }],
                [{ email: "@startbutton.com.ar", password: "123abc" }],
                [{ email: "@startbutton.com.ar", password: "123abcABC" }],
            ]
        )("%j should be invalid", (data) => {
            return LoginSchema.isValid(data)
                .then(isValid => {
                    expect(isValid).toBeFalsy();
                });
        });
    });

    describe("valid values", () => {
        it.each(
            [
                [{ email: "jhon@startbutton.com.ar", password: "123abcABC" }],
                [{ email: "jhon@startbutton.com.ar", password: "123abcABC" }],
                [{ email: "jhon@startbutton.com.ar", password: "123abcABC" }],
                [{ email: "jhon@startbutton.com.ar", password: "123abcABC" }],
                [{ email: "jhon@startbutton.com.ar", password: "123aA------" }],
                [{ email: "jhon@startbutton.com.ar", password: "123abcABC" }],
                [{ email: "jhon@startbutton.com.ar", password: "123abcABC123abcABC" }],
            ]
        )("%j should be valid", (data) => {
            return LoginSchema.isValid(data)
                .then(isValid => {
                    expect(isValid).toBeTruthy();
                });
        });
    });
});
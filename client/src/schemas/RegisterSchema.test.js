import { RegisterSchema } from "./RegisterSchema";

describe("RegisterSchema", () => {

    describe("invalid values", () => {
        it.each(
            [
                [{}],
                [{ password: "" }],
                [{ fullname: "" }],
                [{ fullname: "Jhon Smith", email: "jhon@smith.com", password: "123abc" }],
                [{ fullname: "Jhon Smith", email: "jhon@smith.com", password: "123abc!" }],
                [{ fullname: "Jhon Smith", email: "jhon.smith.com", password: "123abcABC" }],
                [{ fullname: "Jh", email: "jhon@smith.com", password: "123abcABC" }],
                [{ fullname: "Jhon Smith", email: "jhon@smith.com", password: "!#$%&" }],
                [{ fullname: "Jhon Smith", email: "", password: "123abcABC" }],
                [{ fullname: "Jhon Smith", email: "jhon@smith.com", password: "123aA" }],
            ]
        )("%j should be invalid", (data) => {
            return RegisterSchema.isValid(data)
                .then(isValid => {
                    expect(isValid).toBeFalsy();
                });
        });
    });

    describe("valid values", () => {
        it.each(
            [
                [{ fullname: "Jhon Smith", email: "jhon@smith.com", password: "123abcABC" }],
                [{ fullname: "Jhon Smith", email: "jhon@smith.com.ar", password: "123abcABC" }],
                [{ fullname: "Jhon Smith", email: "jhon@smith.us", password: "123abcABC" }],
                [{ fullname: "Jhon Ŝmith", email: "jhon@smith.com", password: "123abcABC" }],
                [{ fullname: "Jhon Smith", email: "jhon@smith.com", password: "123aA------" }],
                [{ fullname: "Jhon Smíth", email: "jhon@smíth.com.ar", password: "123abcABC" }],
            ]
        )("%j should be valid", (data) => {
            return RegisterSchema.isValid(data)
                .then(isValid => {
                    expect(isValid).toBeTruthy();
                });
        });
    });
});
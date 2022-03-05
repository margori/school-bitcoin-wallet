import * as Yup from "yup";
import { passwordField, usernameField } from "./UserFields";

export const LoginSchema = Yup.object().shape({
    username: usernameField,
    password: passwordField
});

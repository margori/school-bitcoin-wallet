import * as Yup from 'yup';
import { usernameField, passwordField } from './UserFields';

export const RegisterSchema = Yup.object().shape({
    username: usernameField,
    password: passwordField,
});

import * as Yup from 'yup';
import { passwordField } from './PasswordFields';
import { usernameField } from './UserFields';

export const RegisterSchema = Yup.object().shape({
    username: usernameField,
    password: passwordField,
});

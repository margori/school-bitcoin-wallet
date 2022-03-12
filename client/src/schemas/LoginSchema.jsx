import { object } from 'yup';
import { passwordField } from './PasswordFields';
import { usernameField } from './UserFields';

export const LoginSchema = object({
    username: usernameField,
    password: passwordField,
});

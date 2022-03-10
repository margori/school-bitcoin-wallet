import * as Yup from 'yup';
import { passwordField } from './PasswordFields';

export const WalletUnlockSchema = Yup.object().shape({
    password: passwordField,
});

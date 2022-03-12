import * as Yup from 'yup';
import { addressField, amountField } from './WalletFields';

export const WalletSendSchema = Yup.object().shape({
    toAddress: addressField,
    amount: amountField,
    fee: amountField,
});

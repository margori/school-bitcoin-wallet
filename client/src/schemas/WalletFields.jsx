import { string, number } from 'yup';
import { maxAmount, minAmount } from './fieldConstants';
const bitcore = require('bitcore-lib');

export const addressField = string()
    .required('Address is required!')
    .test('addrress-is-valid', 'Invalid address', (value) =>
        bitcore.Address.isValid(value, bitcore.Networks.regtest)
    );
export const amountField = number()
    .required('Amount is required!')
    .positive()
    .min(minAmount)
    .max(maxAmount);

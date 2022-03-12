import { postRequest } from './requestsFn';

export const fetchUtxos = postRequest(`/node/get-utxos`);

export const postFund = postRequest(`/node/fund`);

import { postRequest } from './requestsFn';

export const fetchUtxos = postRequest(`/node/get-utxos`);

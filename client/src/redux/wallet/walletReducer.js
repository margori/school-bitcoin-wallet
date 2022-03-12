import { WalletActionTypes } from './walletActions';

const INITIAL_STATE = {
    password: '',
    wifs: [],
    addresses: [],
};

export const walletReducer = (state, action) => {
    state = state || INITIAL_STATE;
    switch (action.type) {
        case WalletActionTypes.LOCK:
            return {
                ...state,
                password: '',
                wifs: [],
                addresses: [],
            };
        case WalletActionTypes.UNLOCK:
            return {
                ...state,
                password: action.password,
            };
        case WalletActionTypes.ADD_WIF:
            if (!state.wifs) {
                state.wifs = [];
            }
            return {
                ...state,
                wifs: [...state.wifs, action.wif],
            };
        case WalletActionTypes.SET_WIFS:
            return {
                ...state,
                wifs: [...action.wifs],
            };

        case WalletActionTypes.ADD_ADDRESS:
            if (!state.addresses) {
                state.addresses = [];
            }
            return {
                ...state,
                addresses: [...state.addresses, action.address],
            };
        case WalletActionTypes.SET_ADDRESSES:
            return {
                ...state,
                addresses: [...action.addresses],
            };
        default:
            return state;
    }
};

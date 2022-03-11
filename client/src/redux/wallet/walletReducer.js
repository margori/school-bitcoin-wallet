import { WalletActionTypes } from './walletActions';

const INITIAL_STATE = {
    password: '',
    wifs: [],
};

export const walletReducer = (state, action) => {
    state = state || INITIAL_STATE;
    switch (action.type) {
        case WalletActionTypes.LOCK:
            return {
                ...state,
                password: '',
                wifs: [],
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
        default:
            return state;
    }
};

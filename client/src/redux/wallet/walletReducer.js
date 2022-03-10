import { WalletActionTypes } from './walletActions';

const INITIAL_STATE = {
    password: ''
};

export const walletReducer = (state, action) => {
    state = state || INITIAL_STATE;
    switch (action.type) {
        case WalletActionTypes.LOCK:
            return {
                ...state,
                password: '',
            };
        case WalletActionTypes.UNLOCK:
            return {
                ...state,
                password: action.password,
            };
        default:
            return state;
    }
};

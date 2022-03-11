export const WalletActionTypes = {
    LOCK: 'LOCK',
    UNLOCK: 'UNLOCK',
    ADD_WIF: 'ADD_WIF',
};

export const lock = () => ({
    type: WalletActionTypes.LOCK,
});

export const unlock = (password) => ({
    type: WalletActionTypes.UNLOCK,
    password,
});

export const addWif = (wif) => ({
    type: WalletActionTypes.ADD_WIF,
    wif,
});

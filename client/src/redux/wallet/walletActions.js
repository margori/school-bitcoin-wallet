export const WalletActionTypes = {
    LOCK: 'LOCK',
    UNLOCK: 'UNLOCK',
    ADD_WIF: 'ADD_WIF',
    SET_WIFS: 'SET_WIFS',
    SET_ADDRESSES: 'SET_ADDRESSES',
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

export const setWifs = (wifs) => ({
    type: WalletActionTypes.SET_WIFS,
    wifs,
});

export const setAddresses = (addresses) => ({
    type: WalletActionTypes.SET_ADDRESSES,
    addresses,
});

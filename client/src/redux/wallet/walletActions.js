export const WalletActionTypes = {
    LOCK: 'LOCK',
    UNLOCK: 'UNLOCK',
    ADD_WIF: 'ADD_WIF',
    SET_WIFS: 'SET_WIFS',
    ADD_ADDRESS: 'ADD_ADDRESS',
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

export const addAddress = (address) => ({
    type: WalletActionTypes.ADD_ADDRESS,
    address,
});

export const setAddresses = (addresses) => ({
    type: WalletActionTypes.SET_ADDRESSES,
    addresses,
});

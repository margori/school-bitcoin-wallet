export const WalletActionTypes = {
    LOCK: 'LOCK',
    UNLOCK: 'UNLOCK',
};

export const lock = () => ({
    type: WalletActionTypes.LOCK,
});

export const unlock = (password) => ({
    type: WalletActionTypes.UNLOCK,
    password,
});

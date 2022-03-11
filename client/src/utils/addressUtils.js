const bitcore = require('bitcore-lib');

export const createWif = () => {
    bitcore.Networks.enableRegtest();
    const privateKey = new bitcore.PrivateKey(null, bitcore.Networks.regtest);
    return privateKey.toWIF();
};

export const addressFormWif = (wif) => {
    const privateKey = bitcore.PrivateKey.fromWIF(wif);
    const publicKey = new bitcore.PublicKey(privateKey);
    const address = new bitcore.Address(publicKey, bitcore.Networks.regtest);
    return address.toString();
};

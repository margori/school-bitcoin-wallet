const bitcore = require('bitcore-lib');

export const createWif = () => {
    bitcore.Networks.enableRegtest();
    const privateKey = new bitcore.PrivateKey(null, bitcore.Networks.regtest);
    return privateKey.toWIF();
};

export const addressFromWif = (wif) => {
    const privateKey = bitcore.PrivateKey.fromWIF(wif);
    const publicKey = new bitcore.PublicKey(privateKey);
    const address = new bitcore.Address(publicKey, bitcore.Networks.regtest);
    return address.toString();
};

export const addressesFromWifs = (wifs) => {
    return wifs.map((wif) => addressFromWif(wif));
};

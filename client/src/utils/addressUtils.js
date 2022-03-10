const bitcore = require('bitcore-lib');

export const createAddress = () => {
    bitcore.Networks.enableRegtest();

    const privateKey = new bitcore.PrivateKey(null, bitcore.Networks.regtest);
    return {
        privateKeyString: privateKey.toString(),
        privateKeyWif: privateKey.toWIF(),
        publicKey: privateKey.toPublicKey().toString(),
        address: privateKey.toAddress().toString(),
    };
};

import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import { WalletSendSchema } from '../../schemas/WalletSendSchema';
import { WalletSendForm } from './WalletSendForm';
import { getWifs } from '../../endpoints/Wallet';
import { fetchUtxos } from '../../endpoints/Node';
import CryptoJS from 'crypto-js';
import { addressesFromWifs } from '../../utils/addressUtils';
const bitcore = require('bitcore-lib');

const doSend = async (addresses, password, values) => {
    const changeAddress = addresses[addresses.length - 1];
    const { toAddress, amount, fee } = values;

    const rawAmount = amount + fee;

    let response = await fetchUtxos({ addresses });
    const { utxos } = response.data.data;

    const balance = bitcore.Unit.fromSatoshis(
        response.data.data.balance
    ).toBTC();

    if (balance < rawAmount) {
        throw 'Not enough balance';
    }

    const unspentOutputs = utxos.map(
        (utxo) => new bitcore.Transaction.UnspentOutput(utxo)
    );
    response = await getWifs();
    const safeWifs = response.data.data;
    const wifs = safeWifs.map((safeWif) => {
        return CryptoJS.AES.decrypt(safeWif, password).toString(
            CryptoJS.enc.Utf8
        );
    });
    const privateKeys = wifs.map((wif) =>
        bitcore.PrivateKey.fromWIF(wif, bitcore.Networks.regtest)
    );

    const transaction = new bitcore.Transaction()
        .from(unspentOutputs) // Feed information about what unspent outputs one can use
        .to(toAddress, bitcore.Unit.fromBTC(amount).toSatoshis()) // Add an output with the given amount of satoshis
        .fee(bitcore.Unit.fromBTC(fee).toSatoshis())
        .change(changeAddress)
        .sign(privateKeys);

    console.log('transaction.toObject()');
    console.log(transaction.toObject());
};

const WalletSend = ({ addresses, password }) => {
    let navigate = useNavigate();

    if (!password) {
        useEffect(() => {
            navigate('/wallet/unlock', { replace: true });
        });
    }

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (values, actions) => {
        setSuccessMessage('');
        setErrorMessage('');

        doSend(addresses, password, values)
            .then(() => {
                console.log('success');
            })
            .catch((e) => {
                console.error(e);
            });
        actions.setSubmitting(false);
    };

    return (
        <div className="user-register-page col-md-12">
            <h2>Send</h2>
            <Formik
                initialValues={{
                    address: '',
                    amount: 0.01,
                    fee: 0.00001,
                }}
                validationSchema={WalletSendSchema}
                onSubmit={onSubmit}
            >
                {(props) =>
                    WalletSendForm({ ...props, errorMessage, successMessage })
                }
            </Formik>
        </div>
    );
};

const mapStateToProps = (state) => ({
    password: state.wallet.password,
    addresses: state.wallet.addresses,
});

export default connect(mapStateToProps)(WalletSend);

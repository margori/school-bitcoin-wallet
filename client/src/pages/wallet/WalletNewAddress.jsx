import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { postSaveWif } from '../../endpoints/Wallet';
import { addWif } from '../../redux/wallet/walletActions';
import { createWif, addressFromWif } from '../../utils/addressUtils';
import CryptoJS from 'crypto-js';

const saveWif = (wif, password) => {
    const safeWif = CryptoJS.AES.encrypt(wif, password).toString();
    return postSaveWif({ wif: safeWif });
};

const WalletNewAddress = ({ password, dispatchAddWif, dispatchAddAddress }) => {
    let navigate = useNavigate();

    if (password) {
        const newWif = createWif();
        saveWif(newWif, password)
            .then(() => {
                const newAddress = addressFromWif(newWif);
                dispatchAddAddress(newAddress);
                dispatchAddWif(newWif);
                navigate('/wallet/addresses', { replace: true });
            })
            .catch(() => {
                navigate('/wallet/unlock', { replace: true });
            });
    } else {
        useEffect(() => {
            navigate('/wallet/unlock', { replace: true });
        });
    }

    return (
        <div className="user-logout-page col-md-12">
            Creating new address and redirecting...
        </div>
    );
};

const mapStateToProps = (state) => ({
    password: state.wallet.password,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchAddWif: (wif) => {
        dispatch(addWif(wif));
    },
    dispatchAddAddress: (address) => {
        dispatch(addAddress(address));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletNewAddress);

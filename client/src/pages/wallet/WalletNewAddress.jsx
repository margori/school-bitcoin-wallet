import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { createAddress } from '../../utils/addressUtils';

const WalletNewAddress = ({ password }) => {
    let navigate = useNavigate();

    if (password) {
        const newAddress = createAddress();
        console.log(newAddress);
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

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WalletNewAddress);

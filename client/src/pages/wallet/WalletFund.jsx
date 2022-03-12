import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { postFund } from '../../endpoints/Node';

const WalletFund = ({ addresses }) => {
    let navigate = useNavigate();

    if (addresses.length == 0) {
        useEffect(() => {
            navigate('/wallet/addresses', { replace: true });
        });
    } else {
        const address = addresses[Math.floor(Math.random() * addresses.length)];
        postFund({ address })
            .then(() => {
                navigate('/wallet/balance', { replace: true });
            })
            .catch((e) => {
                console.error(e);
            });
    }

    return (
        <div className="user-logout-page col-md-12">
            Funding and redirecting...
        </div>
    );
};

const mapStateToProps = (state) => ({
    addresses: state.wallet.addresses,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WalletFund);

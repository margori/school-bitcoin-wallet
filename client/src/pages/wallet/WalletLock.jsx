import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { lock } from '../../redux/wallet/walletActions';

const WalletLock = ({ dispatchLock }) => {
    let navigate = useNavigate();

    useEffect(() => {
        dispatchLock();
        navigate('/', { replace: true });
    }, []);

    return (
        <div className="user-logout-page col-md-12">
            Locking and redirecting...
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchLock: () => dispatch(lock()),
});

export default connect(null, mapDispatchToProps)(WalletLock);

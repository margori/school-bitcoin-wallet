import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { postLogout } from '../../endpoints/User';
import { logout } from '../../redux/user/userActions';
import { lock } from '../../redux/wallet/walletActions';

const UserLogout = ({ dispatchLogout, dispatchLock }) => {
    let navigate = useNavigate();

    postLogout()
        .then(() => {
            dispatchLogout();
            dispatchLock();
            navigate('/', { replace: true });
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <div className="user-logout-page col-md-12">
            Logout and redirecting...
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchLogout: () => dispatch(logout()),
    dispatchLock: () => dispatch(lock()),
});

export default connect(null, mapDispatchToProps)(UserLogout);

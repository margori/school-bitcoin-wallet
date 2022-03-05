import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { postLogout } from '../../endpoints/User';
import { logout } from '../../redux/user/userActions';

const UserLogout = ({ dispatchLogout }) => {
    let navigate = useNavigate();

    postLogout()
        .then(() => {
            dispatchLogout();
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
});

export default connect(null, mapDispatchToProps)(UserLogout);

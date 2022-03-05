import { UserActionTypes } from './userActions';

const INITIAL_STATE = {
    loggedIn: false,
    user_id: 0,
    username: '',
};

export const userReducer = (state, action) => {
    state = state || INITIAL_STATE;
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {
                ...state,
                loggedIn: true,
                user_id: action.user.user_id,
                username: action.user.username,
            };
        case UserActionTypes.LOGOUT:
            return {
                ...state,
                loggedIn: false,
                user_id: 0,
                username: '',
            };
        default:
            return state;
    }
};

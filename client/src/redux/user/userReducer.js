import { UserActionTypes } from "./userActions";
import { removeToken, setToken } from "../../endpoints/options";

const INITIAL_STATE = {
    loggedIn: false,
    token: "",
    user_id: 0,
};

export const userReducer = (state, action) => {
    state = state || INITIAL_STATE;
    switch (action.type) {
        case UserActionTypes.LOGIN:
            setToken(action.token);
            return {
                ...state,
                loggedIn: true,
                token: action.token
            };
        case UserActionTypes.LOGOUT:
            removeToken(action.token);
            setLanguage(INITIAL_STATE.language);
            return {
                ...state,
                loggedIn: false,
                token: "",
                user_id: 0,
            };
        default:
            return state;
    }
};

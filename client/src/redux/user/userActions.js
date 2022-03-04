export const UserActionTypes = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
};

export const login = (token) => ({
    type: UserActionTypes.LOGIN,
    token
});

export const logout = () => ({
    type: UserActionTypes.LOGOUT,
});

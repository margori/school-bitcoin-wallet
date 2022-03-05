export const UserActionTypes = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
};

export const login = (user) => ({
    type: UserActionTypes.LOGIN,
    user
});

export const logout = () => ({
    type: UserActionTypes.LOGOUT,
});

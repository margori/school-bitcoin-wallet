export const minUsernameLength = 3;
export const maxUsernameLength = 200;
export const minPasswordLength = 8;
export const maxPasswordLength = 200;

export const isNumber = (c) => c >= '0' && c <= '9';
export const isUpperCase = (c) =>
    c !== undefined &&
    c.toUpperCase() !== c.toLowerCase() &&
    c.toUpperCase() === c;
export const isLowerCase = (c) =>
    c !== undefined &&
    c.toUpperCase() !== c.toLowerCase() &&
    c.toLowerCase() === c;

export const isGoodUsername = (username) => {
    if (username === undefined) {
        return false;
    }
    if (
        username.length < minUsernameLength ||
        username.length > maxUsernameLength
    ) {
        return false;
    }

    return true;
};

export const isGoodPassword = (password) => {
    if (password === undefined) {
        return false;
    }
    if (
        password.length < minPasswordLength ||
        password.length > maxPasswordLength
    ) {
        return false;
    }

    let hasUpper = false;
    for (let i = 0; i < password.length; i++) {
        const c = password.charAt(i);
        if (isUpperCase(c)) {
            hasUpper = true;
            break;
        }
    }
    if (!hasUpper) {
        return false;
    }

    let hasLower = false;
    for (let i = 0; i < password.length; i++) {
        const c = password.charAt(i);
        if (isLowerCase(c)) {
            hasLower = true;
            break;
        }
    }
    if (!hasLower) {
        return false;
    }

    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        const c = password.charAt(i);
        if (isNumber(c)) {
            hasNumber = true;
            break;
        }
    }
    return hasNumber;
};

import React from "react";
import Chance from 'chance';
import { userReducer } from "./userReducer";
import { UserActionTypes } from "./userActions";
import { loggedUserFixture, userFixture } from '../../data/fixtures/user.fixture';

describe('User reducer', () => {

    const chance = new Chance();

    it('should set default state', () => {
        const state = userReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({
            fullname: "",
            loggedIn: false,
            token: "",
            user_id: 0,
        });
    });

    it('should login', () => {
        const newToken = "xxxyyyzzz";
        const action = {
            type: UserActionTypes.LOGIN,
            token: newToken
        };
        const state = userReducer(userFixture(), action);
        expect(state).toEqual({
            fullname: "Jhon Dow",
            loggedIn: true,
            token: newToken,
            user_id: 1
        });
    });

    it('should logout', () => {
        const action = {
            type: UserActionTypes.LOGOUT,
        };
        const state = userReducer(loggedUserFixture(), action);
        expect(state).toEqual({
            loggedIn: false,
            token: "",
            user_id: 0,
        });
    });

});

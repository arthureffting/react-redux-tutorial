import {AnyAction} from "redux";
import {IAuthenticationState, initialState, IViewState} from "./store";
import {AuthenticationActions, ViewActions} from "./actions";

export const authenticationReducer = (state = initialState.authentication, action: AnyAction): IAuthenticationState => {
    switch (action.type) {
        case AuthenticationActions.LOGIN:
            return {
                username: action.payload.username,
                authenticated: true,
            };
        case AuthenticationActions.LOGOUT:
            return {
                username: undefined,
                authenticated: false
            }
        default:
            return state
    }
};

export const viewReducer = (state = initialState.view, action: AnyAction): IViewState => {
    switch (action.type) {
        case ViewActions.SET_LOADING:
            return {
                loading: action.payload.loading
            };
        default:
            return state
    }
};

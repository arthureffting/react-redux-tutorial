import {AnyAction} from "redux";
import {IAuthenticationState, initialState, IViewState} from "./store";
import {AuthenticationActions, ViewActions} from "./actions";

export const authenticationReducer = (state = initialState.authentication, action: AnyAction): IAuthenticationState => {
    switch (action.type) {
        case AuthenticationActions.LOGIN:
            return {
                username: action.username,
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
    return {
        loading: action.loading
    };
};

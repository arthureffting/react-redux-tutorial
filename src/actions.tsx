import {Dispatch} from "react";

export enum AuthenticationActions {
    LOGIN="LOGIN",
    LOGOUT="LOGOUT",
}

export enum ViewActions {
    SET_LOADING="SET_LOADING",
}

export const setLoading = (loading: boolean) => {
    return {
        type: ViewActions.SET_LOADING,
        payload: {
            loading: loading
        }
    }
}

export const requestLogin = (username: string, password: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(setLoading(true))
        authenticate(username, password)
            .then(isSuccessfull => {
                dispatch({
                    type: isSuccessfull ? AuthenticationActions.LOGIN : AuthenticationActions.LOGOUT,
                    payload: {
                        username: username
                    }
                })
                dispatch(setLoading(false))
            })
    }
}

export const requestLogout = () => {
    return {
        type: AuthenticationActions.LOGOUT
    }
}

const authenticate = async (username: string, password: string) => {
    await new Promise(r => setTimeout(r, 500));
    return true
}
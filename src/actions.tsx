import {Dispatch} from "react";

export enum AuthenticationActions {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
}

export enum ViewActions {
    SET_LOADING = "SET_LOADING",
}

export const setLoading = (loading: boolean) => {
    return {
        type: ViewActions.SET_LOADING,
        loading: loading
    }
}

export const requestLogin = (username: string, password: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(setLoading(true))
        authenticate(username, password)
            .then(isSuccessfull => {
                if (isSuccessfull)
                    dispatch(login(username))
                else
                    dispatch(logout())
                dispatch(setLoading(false))
            })
    }
}


export const login = (username: string) => {
    return {
        type: AuthenticationActions.LOGIN,
        username: username
    }
}

export const logout = () => {
    return {
        type: AuthenticationActions.LOGOUT
    }
}

const authenticate = async (username: string, password: string) => {
    await new Promise(r => setTimeout(r, 500));
    return true
}
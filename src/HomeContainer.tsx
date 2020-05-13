import {IApplicationState} from "./store";
import {logout, requestLogin} from "./actions";
import React from "react";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {connect, ConnectedProps} from "react-redux";
import HomeLayout from "./HomeLayout";

const mapStateToProps = (state: IApplicationState) => {
    return {
        authenticated: state.authentication.authenticated,
        username: state.authentication.username,
        loading: state.view.loading,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IApplicationState, void, AnyAction>) => {
    return {
        onLogin: (username: string, password: string) => {
            dispatch(requestLogin(username, password))
        },
        onLogout: () => {
            dispatch(logout())
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
export type HomeProps = ConnectedProps<typeof connector>
export const Home = connector(HomeLayout)
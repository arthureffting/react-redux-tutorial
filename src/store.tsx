import {applyMiddleware, combineReducers, createStore, Store} from "redux"
import {authenticationReducer, viewReducer} from "./reducer";
import thunkMiddleware from 'redux-thunk';
import {createLogger} from "redux-logger";

export interface IViewState {
    loading: boolean,
}

export interface IAuthenticationState {
    authenticated: boolean,
    username: string | undefined,
}

export interface IApplicationState {
    view: IViewState,
    authentication: IAuthenticationState
}

export const initialState: IApplicationState = {
    view: {
        loading: false,
    },
    authentication: {
        authenticated: false,
        username: undefined
    }
}

export const configureStore = (): Store<IApplicationState> => {
    const middlewares = [thunkMiddleware, createLogger()];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const rootReducer = combineReducers<IApplicationState>({
        view: viewReducer,
        authentication: authenticationReducer,
    })
    return createStore(rootReducer, middlewareEnhancer);
}

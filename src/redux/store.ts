import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {contactsReducer} from "./contacts-reducer";
import {useDispatch} from "react-redux";
import {authReducer} from "./auth-reducer";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, void, AnyAction>>()

export type AppRootStateType = ReturnType<typeof rootReducer>

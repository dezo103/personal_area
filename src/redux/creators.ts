import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";
import {AnyAction} from "redux";
import {LoginParamsType} from "../types/DataTypes";
import {authAPI} from "../api/semiFakeAPI";

export const removeContactAC = (id: string) => ({type: 'REMOVE-CONTACT', id} as const)
export const removeContactTC = (id: string) => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    dispatch(removeContactAC(id))
}

export const addContactAC = (title: string) => ({type: 'ADD-CONTACT', title} as const)
export const addContactTC = (title: string) => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    dispatch(addContactAC(title))
}

export const changeContactAC = (newValue: string, id: string) => ({type: 'CHANGE-CONTACT', newValue, id} as const)
export const changeContactTC = (newValue: string, id: string) => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    dispatch(changeContactAC(newValue, id))
}

// LogInCreators

export const setIsLoggedInAC = (isLoggedIn: boolean) => ({type: 'SET-IS-LOGIN', isLoggedIn} as const)
export const loginTC = (data: LoginParamsType) => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    authAPI.login(data).then(
        res  => {
            console.log(res.data)
            let isLoggedFinallyIn: boolean
            isLoggedFinallyIn = res.data.email === 'admin@area.ru' && res.data.password === '1234';
            dispatch(setIsLoggedInAC(isLoggedFinallyIn))
        }
    ).catch((error) => {
        console.log(error)
    })
}

export const logOutTC = () => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    authAPI.logout().then(
        res => {
            console.log(res.data)
        }
    ).catch((error) => {
        console.log(error)
    })
    dispatch(setIsLoggedInAC(false))
}



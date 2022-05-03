import {ThunkDispatch} from 'redux-thunk';
import {AppRootStateType} from './store';
import {AnyAction} from 'redux';

import {LoginParamsType, RequestStatusType} from '../types/DataTypes';
import {fakeAuthAPI} from '../api/semiFakeAPI';


export const removeContactAC = (id: string) => ({type: 'CONTACTS/REMOVE-CONTACT', id} as const)
export const removeContactTC = (id: string) => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    dispatch(removeContactAC(id))
}

export const addContactAC = (title: string) => ({type: 'CONTACTS/ADD-CONTACT', title} as const)
export const addContactTC = (title: string) => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    dispatch(addContactAC(title))
}

export const changeContactAC = (newValue: string, id: string) => ({type: 'CONTACTS/CHANGE-CONTACT', newValue, id} as const)
export const changeContactTC = (newValue: string, id: string) => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    dispatch(changeContactAC(newValue, id))
}

// LogInCreators

export const setIsLoggedInAC = (isLoggedIn: boolean) => ({type: 'ME/SET-IS-LOGIN', isLoggedIn} as const)
export const loginTC = (data: LoginParamsType) => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    dispatch(setAppStatusAC('loading'))
    fakeAuthAPI.login(data).then(
        res  => {
            if (res.data.email === 'admin@area.ru' && res.data.password === '1234') {
                dispatch(setIsLoggedInAC(true))
                dispatch(setAppStatusAC('succeeded'))
            }
            else {
                dispatch(setIsLoggedInAC(false))
                dispatch(setAppErrorAC(`invalid email:  '${res.data.email}'  or password`))
                dispatch(setAppStatusAC('failed'))
            }
        }
    ).catch((error) => {
        dispatch(setAppErrorAC(`backend error ${error}`))
    })
}

export const logOutTC = () => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    dispatch(setAppStatusAC('loading'))
    fakeAuthAPI.logout().then(
        res => {
            dispatch(setAppStatusAC('succeeded'))
        }
    ).catch((error) => {
        dispatch(setAppErrorAC(`backend error ${error}`))
    })
    dispatch(setIsLoggedInAC(false))
}

//App status creators

export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)

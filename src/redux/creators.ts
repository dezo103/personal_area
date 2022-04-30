import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";
import {AnyAction} from "redux";

export const removeContactAC = (id: string) => ({type: 'REMOVE-CONTACT', id} as const)
export const removeContactTC = (id: string) => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    dispatch(removeContactAC(id))
}

export const addContactAC = (title: string) => ({type: 'ADD-CONTACT', title} as const )
export const addContactTC = (title: string) => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    dispatch(addContactAC(title))
}

export const changeContactAC = (newValue: string, id: string) => ({type: 'CHANGE-CONTACT', newValue, id} as const)
export const changeContactTC = (newValue: string, id: string) => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    dispatch(changeContactAC(newValue, id))
}


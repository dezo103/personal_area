import {ContactType} from '../types/DataTypes';
import {v1} from "uuid";
import {AnyAction} from 'redux';
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";


const initialState: Array<ContactType> = [
    // {id: v1(), name: 'has'},
]

export const contactsReducer = (state: Array<ContactType> = initialState, action: ActionsType): Array<ContactType> => {
    switch (action.type) {
        case 'REMOVE-CONTACT':
            return [...state.filter(c => c.id !== action.id)]
        case 'ADD-CONTACT':
            return [...state, {id: v1(), name: action.title}]
        case "CHANGE-CONTACT":
            return state.map(c => c.id === action.id ? {...c, name: action.newValue} : c)
        default:
            return state
    }
}

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

export type ActionsType =
    ReturnType<typeof removeContactAC>
    | ReturnType<typeof addContactAC>
    | ReturnType<typeof changeContactAC>



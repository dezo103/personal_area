import {ContactType} from '../types/DataTypes';
import {v1} from "uuid";
import {AnyAction, Dispatch} from 'redux';
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";


const initialState: Array<ContactType> = [
    {id: v1(), name: 'has'},
    {id: v1(), name: 'nas'},
    // {id: v1(), name: 'das'},
    // {id: v1(), name: 'mas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
    // {id: v1(), name: 'zas'},
]

export const contactsReducer = (state: Array<ContactType> = initialState, action: ActionsType): Array<ContactType> => {
    switch (action.type) {
        case 'REMOVE-CONTACT':
            return [...state.filter(c => c.id !== action.id)]
        default:
            return state
    }
}

export const removeContactAC = (id: string) => ({type: 'REMOVE-CONTACT', id} as const)

export const removeContactTC = (id: string) => (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    dispatch(removeContactAC(id))
}

export type ActionsType = ReturnType<typeof removeContactAC>


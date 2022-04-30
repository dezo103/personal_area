import {ActionsType, InitialStateType} from "../types/DataTypes";

const initialState: InitialStateType = {
    status: 'idle',
    error: null
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        // case 'APP/SET-INITIALIZED':
        //     return {...state, isInitialized: action.isInitialized}
        default:
            return {...state}
    }
}
import {ActionsType, isLoggedInType} from "../types/DataTypes";


const initialState: isLoggedInType = {
    isLoggedIn: false
}

export const authReducer =
    (state: isLoggedInType = initialState, action: ActionsType): isLoggedInType => {
        switch (action.type) {
            case 'SET-IS-LOGIN':
                return {...state, isLoggedIn: action.isLoggedIn}
            default:
                return state
        }
    }

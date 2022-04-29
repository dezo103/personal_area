import {ActionsType, ContactType} from '../types/DataTypes';
import {v1} from "uuid";


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







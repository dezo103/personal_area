import {ActionsType, ContactType} from '../types/DataTypes';
import {v1} from "uuid";


const initialState: Array<ContactType> = [
    {id: v1(), name: 'Dr Dre'},
    {id: v1(), name: 'Snoop Dog'},
    {id: v1(), name: 'Method Man'},
    {id: v1(), name: 'Busta Rhymes'},
    {id: v1(), name: 'DMX'}
]

export const contactsReducer =
    (state: Array<ContactType> = initialState, action: ActionsType): Array<ContactType> => {
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







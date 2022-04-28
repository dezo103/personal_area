import {ContactType} from "../types/DataTypes";
import {v1} from "uuid";

const initialState: Array<ContactType> = [
    {id: v1(), name: 'has'},
    {id: v1(), name: 'nas'},
    {id: v1(), name: 'das'},
    {id: v1(), name: 'mas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
    {id: v1(), name: 'zas'},
]

export const contactsReducer = (state: Array<ContactType> = initialState, action: any): Array<ContactType> => {
    switch (action.type) {
        default:
            return state
    }
 }
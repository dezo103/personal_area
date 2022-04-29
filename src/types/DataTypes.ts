import {addContactAC, changeContactAC, removeContactAC} from "../redux/creators";

export type ContactType = {
    id: string
    name: string
}

export type ContactsListPropsType = {
    contacts: Array<ContactType>
}

export type AddContactFormPropsType = {
    filterContacts: (value: string) => void
}

export type SearchFormPropsType = {
    filterContacts: (value: string) => void
}


export type ActionsType =
    ReturnType<typeof removeContactAC>
    | ReturnType<typeof addContactAC>
    | ReturnType<typeof changeContactAC>
//export type ThunkDispatch = Dispatch<ActionsType | SetAppStatusActionType>
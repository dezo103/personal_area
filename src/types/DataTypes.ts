import {
    addContactAC,
    changeContactAC,
    removeContactAC,
    setAppErrorAC,
    setAppStatusAC,
    setIsLoggedInAC
} from "../redux/creators";

export type ContactType = {
    id: string
    name: string
}

export type isLoggedInType = {
    isLoggedIn: boolean
}

export type LoginParamsType = {
    email: string
    password: string
}

export type ContactsListPropsType = {
    contacts: Array<ContactType>
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    status: RequestStatusType
    error: string | null
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
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppStatusAC>


export type FormikErrorType = {
    email?: string
    password?: string
}

export type ResponseType = {
    email: string,
    password: string,
    id: number
}
import {addContactAC, changeContactAC, removeContactAC} from "../redux/creators";

export type ContactType = {
    id: string
    name: string
}


export type ActionsType =
    ReturnType<typeof removeContactAC>
    | ReturnType<typeof addContactAC>
    | ReturnType<typeof changeContactAC>
//export type ThunkDispatch = Dispatch<ActionsType | SetAppStatusActionType>
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {contactsReducer} from "./contacts-reducer";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    //filteredContacts: filteredContactsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>
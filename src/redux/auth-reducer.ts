import {ActionsType, isLoggedInType} from "../types/DataTypes";


const initialState: isLoggedInType = {
    isLoggedIn: false
}

export const authReducer =
    (state: isLoggedInType = initialState, action: ActionsType): isLoggedInType => {
        switch (action.type) {
            default:
                return state
        }
    }
// type InitialStateType = typeof initialState


// export const authReducer = slice.reducer
// export const {setIsLoggedInAC} = slice.actions

// export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
//     switch (action.type) {
//         case 'login/SET-IS-LOGGED-IN':
//             return {...state, isLoggedIn: action.value} //immerjs
//         default:
//             return state
//     }
// }
// actions
// export const setIsLoggedInAC = (value: boolean) =>
//     ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks
// export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
//     dispatch(setAppStatusAC({status: 'loading'}))
//     authAPI.login(data)
//         .then(res => {
//             if (res.data.resultCode === 0) {
//                 dispatch(setIsLoggedInAC({value: true}))
//                 dispatch(setAppStatusAC({status: "succeeded"}))
//             } else {
//                 handleServerAppError(res.data, dispatch);
//             }
//         }).catch((error) => {
//         handleServerNetworkError(error, dispatch)
//     })
// }
// export const logoutTC = () => (dispatch: Dispatch) => {
//     dispatch(setAppStatusAC({status: 'loading'}))
//     authAPI.logout()
//         .then(res => {
//             if (res.data.resultCode === 0) {
//                 dispatch(setIsLoggedInAC({value: false}))
//                 dispatch(setAppStatusAC({status: 'succeeded'}))
//             } else {
//                 handleServerAppError(res.data, dispatch)
//             }
//         })
//         .catch((error) => {
//             handleServerNetworkError(error, dispatch)
//         })
// }

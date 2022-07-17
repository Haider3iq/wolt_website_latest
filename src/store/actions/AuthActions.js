import {
    formatError,
    login,
    runLogoutTimer,
    saveTokenInLocalStorage,
    signUp,
} from '../../services/AuthService';

export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';

export const SET_VENDOR_DATA = "SET_VENDOR_DATA";





export function signupAction(email, password, history) {
    return (dispatch) => {
        signUp(email, password)
        .then((response) => {
            saveTokenInLocalStorage(response.data);
            runLogoutTimer(
                dispatch,
                response.data.expiresIn * 1000,
                history,
            );
            dispatch(confirmedSignupAction(response.data));
            history.push('/');
        })
        .catch((error) => {
            const errorMessage = formatError(error.response.data);
            dispatch(signupFailedAction(errorMessage));
        });
    };
}








export function logout(history) {
    localStorage.removeItem('userDetails');
    history.push('/login');
    return {
        type: LOGOUT_ACTION,
    };
}








// export function loginAction(email, password, history) {
//     return (dispatch) => {
//          login(email, password)
//         .then((response) => response.json())
//         .then((response) => {
//                 // console.log("respons.empty: ", response)
//                 if(response.vendorData) {
//                     console.log("respons.vendorData: ", response.vendorData)
//                     saveTokenInLocalStorage(response.vendorData);
//                     runLogoutTimer(
//                         dispatch,
//                         response.vendorData.sessionTime * 1000,
//                         history,
//                     );

//                     dispatch(loginConfirmedAction(response.vendorData));
//                     history.push('/dashboard');
//                 } else if(response.empty){
//                     console.log("response.empty: ", response.empty)
//                     const errorMessage = formatError(response);
//                     dispatch(loginFailedAction(response.empty));
//                 }


//                 // saveTokenInLocalStorage(response.data);
//                 // console.log("response.data.expiresIn: ", response.data)
//                 //     runLogoutTimer(
//                 //         dispatch,
//                 //         response.data.expiresIn * 1000,
//                 //         history,
//                 //     );

//                 // dispatch(loginConfirmedAction(response.data));
//                 // history.push('/dashboard');

// 				//window.location.reload();
                
// 				//history.pushState('/index');
                
//             })
//             .catch((error) => {
//                 console.log("error: ", error)
//                 const errorMessage = formatError(error.response.data);
//                 dispatch(loginFailedAction(errorMessage));
//             });
//     };
// }







// export const setVendorData = vendorData => dispatch => {
//     try{
//     dispatch({
//         type: SET_VENDOR_DATA,
//         payload: vendorData,
//     })
//     } catch (error) {
//     console.log(`try catch error in authActions: ${error}`)
//   }

// };








export function loginAction(email, password, history) {
    return (dispatch) => {
         login(email, password)
        .then((response) => response.json())
        .then((response) => {
                console.log("respons.empty: ", response.vendorData.sessionTime)
                if(response.vendorData) {
                    // console.log("respons.vendorData: ", response.vendorData)
                    saveTokenInLocalStorage(response.vendorData);
                    runLogoutTimer(
                        dispatch,
                        response.vendorData.sessionTime * 1000,
                        history,
                    );

                    dispatch(loginConfirmedAction(response.vendorData));
                    history.push('/dashboard');
                } else if(response.empty){
                    console.log("response.empty: ", response.empty)
                    const errorMessage = formatError(response);
                    dispatch(loginFailedAction(response.empty));
                }



        

        // .then((response) => {
        //         saveTokenInLocalStorage(response.data);
        //         console.log("response.data.expiresIn: ", response.data)
        //             runLogoutTimer(
        //                 dispatch,
        //                 response.data.expiresIn * 1000,
        //                 history,
        //             );

        //         dispatch(loginConfirmedAction(response.data));
        //         history.push('/dashboard');






				//window.location.reload();
				//history.pushState('/index');
                
            })
            .catch((error) => {
                console.log("error: ", error)
                const errorMessage = formatError(error.response.data);
                dispatch(loginFailedAction(errorMessage));
            });
    };
}











export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}




export function loginConfirmedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    };
}

export function confirmedSignupAction(payload) {
    return {
        type: SIGNUP_CONFIRMED_ACTION,
        payload,
    };
}

export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}

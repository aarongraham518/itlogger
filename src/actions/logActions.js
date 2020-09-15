import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG} from './types';

//Get logs from server
//Thunk allows us to return function
export const getLogs = () => async dispatch => {
    try{
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    }catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }   
};

//Add new log
export const addLog = (log) => async dispatch => {
    try{
        setLoading();

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    }catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }   
};

//returning to the reducer the value of set_loading
//SET LOADING to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};

//     //thunk allows us to return a function directly
//     return async (dispatch) => {
//         setLoading();

//         const res = await fetch('/logs');
//         const data = await res.json();

//         disbatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     };
// };
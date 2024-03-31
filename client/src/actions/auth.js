import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const signin = (formData, history) => async (dispatch) => {
    try {
        //logIn user
        history.push('/');
    } 
    catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        //signup user
        history.push('/');
    } 
    catch (error) {
        console.log(error);
    }
}
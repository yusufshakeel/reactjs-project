import { combineReducers } from 'redux';

import { LOG_IN, LOG_OUT } from '../contants';

const initialState = {
    isLoggedIn: false
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            window.localStorage.setItem('app_user_isLoggedIn', true);
            return { ...state, isLoggedIn: true };

        case LOG_OUT:
            window.localStorage.removeItem('app_user_isLoggedIn');
            return { ...state, isLoggedIn: false };
        
        default:
            return state;
    }
};

export default combineReducers({
    auth: loginReducer
});
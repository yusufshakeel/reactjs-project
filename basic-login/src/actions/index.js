import { LOG_IN, LOG_OUT } from '../contants';

export const loginAction = () => {
    return {
        type: LOG_IN
    };
};

export const logoutAction = () => {
    return {
        type: LOG_OUT
    };
};

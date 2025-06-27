import * as types from '../types';

const initialState = {
    insLoggedIn: false,
    toke: false,
    user: {},
    isLoading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:{
            return state;
        }
        default: {
            return state;
        }
    }
}
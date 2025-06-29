import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  toke: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.toke = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      const newstate = { ...initialState };
      return newstate;
    }

    default: {
      return state;
    }
  }
}

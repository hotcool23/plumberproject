import { AuthManager } from '../utils';

export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'AUTH/LOGIN_ERROR';
export const LOGOUT = 'AUTH/LOGOUT';

const initialState = {
  user: {
    username: 'test'
  },
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case LOGIN_SUCCESS:
      // AuthManager.saveAuthentication(action.data);
      return state;

    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case LOGOUT:
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }
}

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    // dispatch({ type: LOGIN_SUCCESS, data });
  } catch(error) {
    dispatch({ type: LOGIN_ERROR, error });
  }
}

export const logout = () => dispatch => {
  AuthManager.clearAuthentication();
  dispatch({ type: LOGOUT });
}

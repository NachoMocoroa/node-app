import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from './constants';
import AuthService from '../../services/auth/authServices';
import { AuthStateProps, AuthActionProps } from '../interfaces';

const user: string = AuthService.getUser() || '';
const token: string = AuthService.getToken() || '';

export const initialState: AuthStateProps = {
	user: user,
	token: token,
	loading: false,
	errorMessage: '',
};

export const AuthReducer = (state = initialState, action: AuthActionProps): AuthStateProps => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				loading: true,
			};
		
		case LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload.user,
				token: action.payload.access_token,
				loading: false,
			};
		
		case LOGOUT:
			return {
				...state,
				user: '',
				token: '',
			};

		case LOGIN_ERROR:
			return {
				...state,
				loading: false,
				errorMessage: action.error,
			};

		default:
			return state;
	}
};

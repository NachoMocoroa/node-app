import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from './constants';
import AuthService from '../../services/auth/authServices';
import { deepMerge } from '../../utils/utils';
import { UserData } from '../../models/interfaces';

export function manageLogin(dispatch: any, params: UserData, isLogin: boolean): void {
	isLogin ? loginUser(dispatch, params) : registerUser(dispatch, params);
};

async function registerUser(dispatch: any, loginPayload: UserData): Promise<void> {
	dispatch({ type: LOGIN_REQUEST });
	try {
		const data: any = await AuthService.register(loginPayload);
		if (data?.id) {
			await loginUser(dispatch, loginPayload);
		} else {
			dispatch({ type: LOGIN_ERROR, error: data });
		}
	} catch (error: any) {
		console.log('error: ', error);
	}
};

export async function loginUser(dispatch: any, loginPayload: any): Promise<void> {
	dispatch({ type: LOGIN_REQUEST });
	try {
		let data: any = await AuthService.login(loginPayload);
		if (data?.access_token) {
			const userObj = { user: loginPayload.email };
			data = deepMerge(userObj, data);
			dispatch({ type: LOGIN_SUCCESS, payload: data });
			AuthService.setToken(data.access_token);
			AuthService.setUser(loginPayload.email);
		} else {
			dispatch({ type: LOGIN_ERROR, error: data });
		}
	} catch (error: any) {
		dispatch({ type: LOGIN_ERROR, error: error });
		console.log('error: ', error);
	}
};

export async function logout(dispatch: any): Promise<void> {
	dispatch({ type: LOGOUT });
	AuthService.removeToken();
	AuthService.removeUser();
};

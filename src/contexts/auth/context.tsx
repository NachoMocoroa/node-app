import React, { useReducer, useContext, createContext } from 'react';
import { ReactNodeChildrenProps, AuthStateProps } from '../interfaces';
import { initialState, AuthReducer } from './reducer';

const AuthStateContext = createContext<AuthStateProps>(initialState);
const AuthDispatchContext = createContext<any | null>(null);

export function useAuthState() {
	const context = useContext(AuthStateContext);
	if (context === undefined) {
		throw new Error('useAuthState must be used within a AuthProvider');
	}
	return context;
};

export function useAuthDispatch() {
	const context = useContext(AuthDispatchContext);
	if (context === undefined) {
		throw new Error('useAuthDispatch must be used within a AuthProvider');
	}
	return context;
};

export const AuthProvider = ({ children }: ReactNodeChildrenProps) => {
	const [user, dispatch] = useReducer(AuthReducer, initialState);

	return (
		<AuthStateContext.Provider value={user}>
			<AuthDispatchContext.Provider value={dispatch}>
				{children}
			</AuthDispatchContext.Provider>
		</AuthStateContext.Provider>
	);
};

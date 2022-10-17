import React, { useReducer, useContext, createContext } from 'react';
import { ReactNodeChildrenProps, NodesProps } from '../interfaces';
import { initialState, NodeReducer } from './reducer';

const NodesStateContext = createContext<NodesProps>(initialState);
const NodesDispatchContext = createContext<any | null>(null);

export function useNodesState() {
	const context = useContext(NodesStateContext);
	if (context === undefined) {
		throw new Error('useNodesState must be used within a NodesProvider');
	}
	return context;
};

export function useNodesDispatch() {
	const context = useContext(NodesDispatchContext);
	if (context === undefined) {
		throw new Error('useNodesDispatch must be used within a NodesProvider');
	}
	return context;
};

export const NodesProvider = ({ children }: ReactNodeChildrenProps) => {
	const [node, dispatch] = useReducer(NodeReducer, initialState);

	return (
		<NodesStateContext.Provider value={node}>
			<NodesDispatchContext.Provider value={dispatch}>
				{children}
			</NodesDispatchContext.Provider>
		</NodesStateContext.Provider>
	);
};

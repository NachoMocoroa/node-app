import { 
	NODES_REQUEST, 
	NODES_SUCCESS, 
	NODES_ERROR, 
	NODE_SUCCESS, 
	NODE_UPDATED, 
	NODE_DELETED 
} from './constants';

import { 
	modifyItemNameInArrayById, 
	removeItemByParsedId 
} from '../../utils/utils';
import { NodesActionProps, NodesProps } from '../interfaces';

export const initialState: NodesProps = {
	nodes: [],
	loading: false,
	errorMessage: null,
};

export const NodeReducer = (state = initialState, action: NodesActionProps): any => {
	switch (action.type) {
		case NODES_REQUEST:
			return {
				...state,
				loading: true,
			};
		
		case NODES_SUCCESS:
			return {
				...state,
				nodes: action.payload,
				loading: false,
			};

		case NODES_ERROR:
			return {
				...state,
				loading: false,
				errorMessage: action.error,
			};
		
		case NODE_SUCCESS:
			return {
				...state,
				nodes: [...state.nodes, action.payload],
				loading: false,
			};

		case NODE_UPDATED:
			const newNodes = modifyItemNameInArrayById(state.nodes, action.payload);
			return {
				...state,
				nodes: newNodes,
				loading: false,
			};

		case NODE_DELETED:
			const updatedNodes = removeItemByParsedId(state.nodes, action.payload);
			return {
				...state,
				nodes: updatedNodes,
				loading: false,
			};

		default:
			return state;
	}
};

import { 
	NODES_REQUEST, 
	NODES_SUCCESS, 
	NODES_ERROR, 
	NODE_SUCCESS, 
	NODE_UPDATED, 
	NODE_DELETED 
} from './constants';

import nodesServices from '../../services/nodes/nodesServices';
import { NodeParamProps, NodePatchParamProps } from '../../models/interfaces';

export async function getNodes(dispatch: any): Promise<void> {
	dispatch({ type: NODES_REQUEST });
	try {
		const data = await nodesServices.getNode();
		if (data) {
			dispatch({ type: NODES_SUCCESS, payload: data });
		} else {
			dispatch({ type: NODES_ERROR, error: data });
		}
	} catch (error) {
		dispatch({ type: NODES_ERROR, error: error });
		console.log('error: ', error);
	}
};

export async function postNode(dispatch: any, params: NodeParamProps): Promise<void> {
	dispatch({ type: NODES_REQUEST });
	try {
		const data: NodeParamProps = await nodesServices.postNode(params);
		if (data.id) {
			dispatch({ type: NODE_SUCCESS, payload: data });
		} else {
			dispatch({ type: NODES_ERROR, error: data });
		}
	} catch (error) {
		dispatch({ type: NODES_ERROR, error: error });
		console.log('error: ', error);
	}
};

export async function patchNode(dispatch: any, params: NodePatchParamProps): Promise<void> {
	dispatch({ type: NODES_REQUEST });
	try {
		const data: NodeParamProps = await nodesServices.patchNode(params);
		if (data.id) {
			dispatch({ type: NODE_UPDATED, payload: data });
		} else {
			dispatch({ type: NODES_ERROR, error: data });
		}
	} catch (error) {
		dispatch({ type: NODES_ERROR, error: error });
		console.log('error: ', error);
	}
};

export async function deleteNode(dispatch: any, id: string): Promise<void> {
	dispatch({ type: NODES_REQUEST });
	try {
		await nodesServices.deleteNode(id);
		dispatch({ type: NODE_DELETED, payload: id });
	} catch (error) {
		dispatch({ type: NODES_ERROR, error: error });
		console.log('error: ', error);
	}
};

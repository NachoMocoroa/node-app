import React, { useEffect } from 'react';
import { useAuthState } from '../../contexts/auth';
import { AuthStateProps } from '../../contexts/interfaces';
import { 
    getNodes, 
    postNode, 
    patchNode, 
    deleteNode, 
    useNodesState, 
    useNodesDispatch 
} from '../../contexts/nodes';
import { NodeParamProps, NodePatchParamProps } from '../../models/interfaces';
import FormNode from '../forms/FormNode';
import Logout from '../Logout';
import NodesWrapper from './NodesWrapper';

const Nodes = () => {

    const userDetails: AuthStateProps = useAuthState();
	const dispatch = useNodesDispatch();
	const { loading, errorMessage, nodes } = useNodesState();

	const nodePost = async (params: string) => {
        const nodeObj: NodeParamProps = {
            name: params,
            parentId: nodes.length + 1
        }
        await postNode(dispatch, nodeObj);
	};

	const nodeEdit = async (id: string, parentId: string, value: string) => {
        const nodeObj: NodePatchParamProps = {
            id: parseInt(id, 10),
            node: {
                name: value,
                parentId: parseInt(parentId, 10)
            }
        }
        await patchNode(dispatch, nodeObj);
	};

	const nodeDelete = async (id: string) => {
        await deleteNode(dispatch, id);
	};

    const updateData = async () => {
        await getNodes(dispatch);
    };

    useEffect(() => {
        updateData();
    }, []);
    
    return (
        <>
            <header className="navbar fixed-top navbar-expand-lg flex-column flex-md-row bd-navbar navbar-dark bg-dark">
                <div className="container py-1">
                    <div className="mr-0 mr-md-2">
                        <h1 className="text-light mb-0 text-decoration-underline">NodesApp</h1>
                    </div>
                    <div className="d-flex justify-content-end align-items-center ml-0 ml-md-2">
                        <p className="text-light m-0 ms-5">{ userDetails.user }</p>
                        <Logout />
                    </div>
                </div>
            </header>
            <div className="container d-flex justify-content-center py-5 mt-5">
                <div className="col col-xl-10">
                    <div className="card">
                        <div className="card-body p-md-5">
                            <FormNode 
                                msgError={errorMessage} 
                                isLoading={loading} 
                                handleSubmit={nodePost} 
                            />
                            <NodesWrapper 
                                nodes={nodes} 
                                deleteItem={nodeDelete} 
                                editItem={nodeEdit} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nodes;

import { NODE_URL } from '../constants';
import { 
    axiosGetRequest, 
    axiosPostRequest, 
    axiosPatchRequest, 
    axiosDeleteRequest, 
} from "../axiosServices";

const getNode = async (): Promise<any> => {
    const request: string = NODE_URL!;
    return await axiosGetRequest(request);
};

const postNode = async (params: any): Promise<any> => {
    const request: string = NODE_URL!;
    return await axiosPostRequest(request, params);
};

const patchNode = async (params: any): Promise<any> => {
    const request: string = NODE_URL + `/${params.id}`;
    return await axiosPatchRequest(request, params.node);
};

const deleteNode = async (id: any): Promise<any> => {
    const request: string = NODE_URL + `/${id}`;
    await axiosDeleteRequest(request);
};

const nodesServices = {
    getNode,
    postNode,
    patchNode,
    deleteNode
};

export default nodesServices;

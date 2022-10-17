import React from "react";

export interface TokenProps {
	access_token?: string | null;
};

export interface UserProps {
	user: string | null;
};

export interface AuthStateProps {
	user: string;
	token: string;
	loading: boolean;
	errorMessage?: string;
};

export interface UserPayloadProps {
	user: string;
	access_token: string;
};

export interface AuthActionProps {
	payload: UserPayloadProps;
	type: string;
	error?: string;
};

export interface NodeProps {
	id: number;
	name: string;
	parentId: number;
};

export interface NodesProps {
	nodes: NodeProps[];
	loading: boolean;
	errorMessage?: string | null;
};

export interface NodesActionProps {
	payload: NodeProps[];
	type: string;
	error?: string;
};

export interface ReactNodeChildrenProps {
	children: React.ReactNode;
};

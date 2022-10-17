export interface FormNodeProps {
    msgError?: string | null;
    isLoading: boolean;
    handleSubmit: (name: string) => void;
};

export interface FormUserProps {
    btnLoginText: string;
    btnRegisterText: string;
    msgError?: string;
    isLoading: boolean;
    handleSubmit: (obj: any, val: boolean) => void;
};

export interface ErrorsForm {
    email?: any;
    password?: any;
};

export interface useFormProps {
    initialState: UserData;
    initialFormErrors: ErrorsForm;
    callback: () => {};
    validate: any;
};

export interface NodeCardProps {
    id: string;
    name: string;
    parentId: string;
    handleEdit: (id: string, parentId: string, editableValue: string) => void;
    handleDelete: (id: string) => void;
};

export interface NodeSearchProps {
    items: any;
    search: (arr: any) => void;
};

export interface NodesWrapperProps {
    nodes: any;
    editItem: (id: string, parentId: string, editableValue: string) => void;
    deleteItem: (id: string) => void;
};

export interface UserData {
    email: string;
    password: string;
    id?: number | null;
};

export interface NodeParamProps {
    name: string;
    parentId: number;
    id?: number;
};

export interface NodePatchParamProps {
    id: number;
    node: {
        name: string;
        parentId: number;
    }
};

import React, { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside/useClickOutside';
import { NodeCardProps } from '../../models/interfaces';

const NodeCard = ({ id, name, parentId, handleEdit, handleDelete }: NodeCardProps) => {

    const [editableValue, setEditableValue] = useState<string>(name);
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const buttonRef = useRef<any>(null);
    const textRef = useRef<any>(null);

    const clickOutsidehandler = () => {
        setIsEditable(false);
        setEditableValue(name);
    };
    
    useClickOutside([buttonRef, textRef], clickOutsidehandler);

	const handleClickDelete = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
        handleDelete(id);
	};

	const handleClickEdit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
        setIsEditable(!isEditable);
        if (isEditable && editableValue !== name) {
            handleEdit(id, parentId, editableValue);
        }
	};

    return (
        <li className="w-100 list-group-item d-flex justify-content-between m-0 mb-2 px-2 rounded border border-secondary bg-light">
            <div className="w-100 d-flex justify-content-start">
                <div className="w-100 px-1 px-md-2">
                    { isEditable ? 
                        (
                            <input 
                                ref={textRef} 
                                type="text" 
                                value={editableValue} 
                                onChange={(e) => setEditableValue(e.target.value)} 
                                className="w-100 border border-primary" 
                            />
                        )
                        : (
                            <p className="fw-normal mb-0">{ editableValue }</p>
                        )
                    }
                </div>
            </div>
            <div className="d-flex align-items-start">
                <div 
                    className="d-flex flex-row justify-content-between" 
                    style={{minWidth: 190}}
                >
                    <button 
                        type="button" 
                        ref={buttonRef} 
                        className={`btn btn-${ isEditable ? 'success' : 'warning'} mr-4 d-flex justify-content-between align-items-center`} 
                        onClick={(e) => handleClickEdit(e)}
                    >
			            <span className="ml-4">
                            { 
                                isEditable ? 
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-save" viewBox="0 0 16 16">
                                            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                        </svg>
                                    )
                            }
                        </span>
			            <span style={{marginLeft: 10}}>
                            { isEditable ? 'Save' : 'Edit'}
                        </span>
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger ml-4 d-flex justify-content-between align-items-center" 
                        onClick={(e) => handleClickDelete(e)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                        </svg>
			            <span style={{marginLeft: 10}}>
                            Delete
                        </span>
                    </button>
                </div>
            </div>
        </li>
    );
};

export default NodeCard;

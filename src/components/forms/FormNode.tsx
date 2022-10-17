import React, { useState } from 'react';
import { FormNodeProps } from '../../models/interfaces';
import Spinner from '../Spinner';

const FormNode = ({ msgError, isLoading, handleSubmit }: FormNodeProps) => {
    
    const [name, setName] = useState<string>('');

	const handleValues = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
        if (typeof name === 'string' && name.trim() !== '') {
            handleSubmit(name);
            !msgError && setName('');
        }
	};

    return (
        <>
            <div className="w-100 p-0">
                <form className="w-100 d-flex justify-content-between align-items-center mb-4">
                    <div className="form-outline flex-fill">
                        <input
                            type="text" 
                            placeholder="Add new..." 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            disabled={isLoading} 
                            className="form-control"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary ms-2" 
                        disabled={isLoading} 
                        onClick={(e) => handleValues(e)}
                    >
                        Add
                    </button>
                </form>
                {msgError && (
                    <div className="d-flex justify-content-center">
                        <p className="alert alert-danger">
                            {msgError}
                        </p>
                    </div>
                )}
                {isLoading && <Spinner />}
            </div>
        </>
    );
};

export default FormNode;

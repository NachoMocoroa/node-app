import React from 'react';
import { NodeSearchProps } from '../../models/interfaces';
import { filterByProp } from '../../utils/utils';

const NodeSearch = ({ items, search }: NodeSearchProps) => {

	const filterSearch = (value: string) => {
        const newData = filterByProp(items, 'name', value);
        search(newData);
	};

    return (
        <div className="form-outline">
            <input 
                type="search" 
                placeholder="Search" 
                onChange={(e) => filterSearch(e.target.value)} 
                className="form-control" 
                aria-label="Search" 
            />
        </div>
    );
};

export default NodeSearch;

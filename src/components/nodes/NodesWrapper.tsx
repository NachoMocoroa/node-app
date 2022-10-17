import React, { useState, useEffect, useCallback } from 'react';
import NodeCard from './NodeCard';
import NodeSearch from './NodeSearch';
import { NodesWrapperProps, NodeCardProps } from '../../models/interfaces';

const NodesWrapper = ({ nodes, editItem, deleteItem }: NodesWrapperProps) => {

    const [nodesData, setNodesData] = useState<NodeCardProps[]>([]);

	const searchNodes = (params: any) => {
        setNodesData(params);
	};

    const initNodes = useCallback(() => {
        setNodesData(nodes);
    }, [nodes]);
      
      useEffect(() => {
        initNodes();
    }, [initNodes]);

    return (
        <>
            <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                <NodeSearch 
                    items={nodes} 
                    search={searchNodes} 
                />
            </div>
            <div className="nodes-display">
                {
                    (nodesData && nodesData.length > 0) ? 
                        (
                            <ul className="list-group mb-0">
                                {nodesData.map((item: NodeCardProps) => (
                                    <NodeCard 
                                        key={item.id} 
                                        id={item.id} 
                                        name={item.name} 
                                        parentId={item.parentId} 
                                        handleEdit={editItem} 
                                        handleDelete={deleteItem} 
                                    />
                                ))}
                            </ul>
                        )
                        : (
                            <p>No data.</p>
                        )
                }
            </div>
        </>
    );
};

export default NodesWrapper;

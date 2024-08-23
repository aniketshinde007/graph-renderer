import React from 'react';
import TreeNode from './TreeNode';
import Node from './node';

const TreeView = ({ nodes, renderNodeComponent }) => {
    console.log('TreeView - renderNodeComponent:', renderNodeComponent);
    // Find all root nodes (nodes without a parentId)
    const rootNodes = nodes.filter(node => !node.parentId);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {rootNodes.map(rootNode => (
                <div key={rootNode.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
                    <TreeNode node={rootNode} nodes={nodes} renderNodeComponent={renderNodeComponent}/>
                </div>
            ))}
        </div>
    );
};

export default TreeView;
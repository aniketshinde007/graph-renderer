import React from 'react';

const TreeNode = ({ node, nodes, renderNodeComponent }) => {
    console.log('TreeNode - renderNodeComponent:', renderNodeComponent);
    const successors = nodes.filter(n => n.parentId === node.id);

    if (successors.length === 0) {
        return renderNodeComponent(node);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {renderNodeComponent(node)}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {successors.map(successor => (
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} key={successor.id}>
                        <TreeNode node={successor} nodes={nodes} renderNodeComponent={renderNodeComponent}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TreeNode;
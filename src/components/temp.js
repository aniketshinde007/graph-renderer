//{/* <div style={{display: 'flex', flexDirection: 'row'}}>
        // <Node title={'A'}/>
        // <div style={{display: 'flex', flexDirection: 'column'}}>
        //   <div style={{display: 'flex', flexDirection: 'row'}}>
        //     <Node title={'B'}/>
        //     <div style={{display: 'flex', flexDirection: 'row'}}>
        //       <Node title={'C'}/>
        //       <div style={{display: 'flex', flexDirection: 'column'}}>
        //         <Node title={'G'}/>
        //         <Node title={'H'}/>
        //       </div>
        //     </div>
        //   </div>
        //   <div style={{display: 'flex', flexDirection: 'row'}}>
        //     <Node title={'D'}/>
        //     <Node title={'E'}/>
        //     <Node title={'F'}/>
        //   </div>          
        // </div>
//      </div> */}

// function renderNodes(nodes) {
//   // Helper function to find children of a node
//   function findChildren(parentId) {
//     return nodes.filter(node => node.parentId === parentId);
//   }

//   // Recursive function to build HTML structure
//   function buildTreeHtml(node) {
//     const children = findChildren(node.id);

//     if (children.length === 0) {
//       // No children, just render the node
//       return `<Node title="${node.title}" />`;
//     } else {
//       // Render the node with its children
//       return `
//         <div style="display: flex; flex-direction: column;">
//           <Node title="${node.title}" />
//           <div style="display: flex; flex-direction: row;">
//             ${children.map(child => buildTreeHtml(child)).join('')}
//           </div>
//         </div>
//       `;
//     }
//   }

//   // Find the root node (node without a parentId)
//   const rootNode = nodes.find(node => !node.parentId);

//   // Start building the tree from the root node
//   return `
//     <div style="display: flex; flex-direction: row;">
//       ${buildTreeHtml(rootNode)}
//     </div>
//   `;
// }
// const nodes = [
//   { id: 1, title: 'A' },
//   { id: 2, title: 'B', parentId: 1 },
//   { id: 3, title: 'C', parentId: 2 },
//   { id: 4, title: 'D', parentId: 3 },
//   { id: 5, title: 'E', parentId: 1 },
//   { id: 6, title: 'F', parentId: 2 },
//   { id: 7, title: 'G', parentId: 5 },
//   { id: 8, title: 'H', parentId: 7 },
//   { id: 9, title: 'I', parentId: 8 },
// ];

// function getLevels(nodes) {
//     const levels = [];

//     // Helper function to recursively determine level of each node
//     function assignLevel(node) {
//         if (!node.parentId) {
//             // No parentId means it's at level 1
//             node.levelId = 1;
//         } else {
//             // Find the parent node
//             const parentNode = nodes.find(n => n.id === node.parentId);
//             // Recursively assign level to the parent first if not already assigned
//             if (!parentNode.levelId) {
//                 assignLevel(parentNode);
//             }
//             // Current node's level is parent's level + 1
//             node.levelId = parentNode.levelId + 1;
//         }
        
//         // Ensure the levels array has a sub-array for the current level
//         if (!levels[node.levelId - 1]) {
//             levels[node.levelId - 1] = [];
//         }
//         levels[node.levelId - 1].push(node);
//     }

//     // Assign levels to all nodes
//     nodes.forEach(node => assignLevel(node));

//     return levels;
// }

// const levels = getLevels(nodes);
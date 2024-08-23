import './App.css';

import TreeView from './components/TreeView';
import Node from './components/node';

const App = () => {

  const nodes = [
    { id: 1, title: 'A' },//, children: [ { id: 11, title: 'AA' }, {id: 12, title: 'AB', parentId: 11}, {id: 13, title: 'AC', parentId: 11} ] },
    { id: 2, title: 'B', parentId: 1 },
    { id: 3, title: 'C', parentId: 2 },
    { id: 4, title: 'D', parentId: 1 },
    { id: 5, title: 'E', parentId: 4 },
    { id: 6, title: 'F', parentId: 5 },
    { id: 7, title: 'G', parentId: 3 },
    { id: 8, title: 'H', parentId: 3 },
    { id: 9, title: 'I' },
    { id: 10, title: 'J', parentId: 9 },
    { id: 11, title: 'K', parentId: 4}
  ];

  const renderNodeComponent = (node) => <Node node={node} />;

  return (
    <div className='App'>
      {<TreeView nodes={nodes} renderNodeComponent={renderNodeComponent}/>}
    </div>
  );
}

export default App;
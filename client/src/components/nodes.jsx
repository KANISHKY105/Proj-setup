function addNode(tree, parentId, newNode) {
    if (tree.id === parentId) {
      // If the current node is the parent, add the new node to its children
      return {
        ...tree,
        children: [...tree.children, newNode],
      };
    } else if (tree.children) {
      // If the current node is not the parent, recursively search its children
      return {
        ...tree,
        children: tree.children.map((child) => addNode(child, parentId, newNode)),
      };
    } else {
      // If the current node has no children, return it unchanged
      return tree;
    }
  }
  
  function deleteNode(tree, nodeId) {
    if (tree.id === nodeId) {
      // If the current node is the one to be deleted, return null or handle as needed
      return null;
    } else if (tree.children) {
      // Filter out the node to be deleted and recursively call deleteNode on children
      return {
        ...tree,
        children: tree.children.map((child) => deleteNode(child, nodeId)).filter((child) => child !== null), // Remove any nulls from the children array
      };
    } else {
      // If the current node has no children, return it unchanged
      return tree;
    }
  }
  
  function TreeComponent() {
    const [tree, setTree] = useState(initialTreeData);
  
    const handleAddNode = (parentId, nodeText) => {
      const newNode = {
        id: generateUniqueId(), // Implement a function to generate unique IDs
        text: nodeText,
        children: [],
      };
  
      setTree((currentTree) => addNode(currentTree, parentId, newNode));
    };
  
    // Render your tree component here...
  }
  
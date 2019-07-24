
function maximum_subarray(arr) {
  let currentMax = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    currentMax = Math.max(0, currentMax + arr[i]);
    max = Math.max(currentMax, max);
  }

  return max;
}



//////////////////////////////////////// 
// trees
//////////////////////////////////////// 

// binary tree
// naive implementation
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;;
  }

  insert(val, root=this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }
    if (val < root.val) {
      if (root.left) {
        return this.insert(val, root.left);
      } else {
        root.left = new TreeNode(val);
      }
    } else {
      if (root.right) {
        return this.insert(val, root.right);
      } else {
        root.right = new TreeNode(val);
      }
    }
  }

  inOrderPrint(root) {
    if (!root) return null;
    this.inOrderPrint(root.left);
    console.log(root.val);
    this.inOrderPrint(root.right);
  }

  preOrderPrint(root) {
    if (!root) return null;
    console.log(root.val);
    this.preOrderPrint(root.left);
    this.preOrderPrint(root.right);
  }

  postOrderPrint(root) {
    if (!root) return null;
    this.postOrderPrint(root.left);
    this.postOrderPrint(root.right);
    console.log(root.val);
  }

  search(val, root=this.root) {
    if (!root) return false;
    if (val < root.val) {
      return this.search(val, root.left);
    } else if (val > root.val) {
      return this.search(val, root.right);
    } else {
      return true;
    }
  }
}

function depthFirst(root) {
  if (!root) return;

  let stack = [root];

  while (stack.length) {
    let node = stack.pop();
    console.log(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

function breadthFirst(root) {
  if (!root) return;
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    console.log(node.val);
    if (node.left) {queue.push(node.left)};
    if (node.right) {queue.push(node.right)};
  }
}



// LC 105: Construct a Binary Tree from Preorder & Inorder Traversal (JavaScript)

function TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(preorder, inorder) {
  if (!inorder) return null;
  let current = preorder.shift();
  let node = new TreeNode(current);
  let idx = inorder.indexOf(current);

  node.left = buildTree(preorder, inorder.slice(0, idx));
  node.right = buildTree(preorder, inorder.slice(idx + 1));

  return node;  
}


// Depth First Search (Binary Tree)
// iterative
function dfs(root, targetVal) {
  if (!root) return null;
  let stack = [root];
  while(stack.length) {
    let node = stack.pop();
    if (node.val === targetVal) return node;
    if (root.right) stack.push(root.right);
    if (root.left) stack.push(root.left);
  }
  return null;
}

// recursive
function dfs(root, targetVal) {
  // if no root, return null
  if (!root) return null;
  // if root value is equal to target value, return root
  if (root.val === targetVal) return root;
  // search left side of root recursively for matching target value
  let left = dfs(root.left, targetVal);
  // if there is a left value, return the left
  if (left) return left;
  // search right side of root recursively for matching target value
  let right = dfs(root.right, targetVal);
  // if there is a right value, return the right
  if (right) return right;
  // if there is not match, return null
  return null;
}

// breadth first array
function breadthFirstArray(root) {
  if (!root) return [];
  let output = [];
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    output.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return output;
}


// tree sum
function treeSum(root) {
  if (!root) return 0;
  let sum = 0;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    sum += node.val;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return sum;
}


// tree height
function treeHeight(root) {
  if (!root) return -1;
  let height = 0;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node.left || node.right) height += 1;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return height;
}

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


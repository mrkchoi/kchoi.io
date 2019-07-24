---
layout: post
title: "Depth-First Search, Breadth-First Array, TreeSum, TreeHeight (JavaScript)"
author: "Kenneth"
---

<!-- ### Construct a Binary Tree from Preorder & Inorder Traversal (JavaScript) -->
### Depth-First Search
* should return the node of the tree that contains the targetVal
* should return null if the targetVal is not in the tree
when multiple nodes of the tree contain the targetVal
* should return the first node according to Depth-First order (from left to right) that contains the targetVal

{% highlight javascript %}
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
  if (!root) return null;
  if (root.val === targetVal) return root;
  let left = dfs(root.left, targetVal);
  if (left) return left;
  let right = dfs(root.right, targetVal);
  if (right) return right;
  return null;
}

///////////////////////////////////
// commented version below: 
///////////////////////////////////

// iterative
function dfs(root, targetVal) {
  // if no root, return null
  if (!root) return null;
  // initialize stack with root node
  let stack = [root];
  // iterate through elements of stack
  while(stack.length) {
    let node = stack.pop();
    // if current node value equals target value, return node
    if (node.val === targetVal) return node;
    // if there is a right node, add right node to stack
    if (root.right) stack.push(root.right);
    // if there is a left node, add left node to stack
    if (root.left) stack.push(root.left);
  }
  // if there is not match, return null
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
{% endhighlight %}

### Breadth-First Array
* should return an array containing tree's nodes' values in Breadth-First order (from left to right)

{% highlight javascript %}

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

{% endhighlight %}

### TreeSum
* should return the sum of all node values in the tree
* should return 0 if the tree is empty

{% highlight javascript %}

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
{% endhighlight %}

### TreeHeight
* should return the maximum number of edges between the root and any leaf
* should return -1 if the tree is empty
* should return 0 if the tree only contains a root


{% highlight javascript %}
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
{% endhighlight %}

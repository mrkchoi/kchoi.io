---
layout: post
title: "Construct a Binary Tree from Preorder & Inorder Traversal (JavaScript)"
author: "Kenneth"
---

<!-- ### Construct a Binary Tree from Preorder & Inorder Traversal (JavaScript) -->
### 105. Construct Binary Tree from Preorder and Inorder Traversal (LeetCode Medium)

Given preorder and inorder traversal of a tree, construct the binary tree.
Note:
You may assume that duplicates do not exist in the tree.
For example, given

{% highlight javascript %}
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
{% endhighlight %}

Return the following binary tree:

{% highlight javascript %}
    3
   / \
  9  20
    /  \
   15   7
{% endhighlight %}

The first element of a binary tree preorder traversal is the root node. From there, we can initialize the root of our output to be a TreeNode instance with a value of preorder[0]. 

We also know from the inorder traversal that the values to the left of preorder[0] will lie to the left of the root node, and the values to the right of preorder[0] will lie to the right of the root node. Thus, we can set our root/node's left and right values to the values to each respective side of the inorder traversal. We can recursively call our buildTree function on the left and right sides in order to build out the rest of our tree in this fashion.

At the end of our recursion (when our inorder traversal array is empty), we return the root node of our newly created binary tree.

{% highlight javascript %}
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

{% endhighlight %}

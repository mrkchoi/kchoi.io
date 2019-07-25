---
layout: post
title: "LeetCode 108. Convert Sorted Array to Binary Search Tree"
author: "Kenneth"
---

<!-- ### Construct a Binary Tree from Preorder & Inorder Traversal (JavaScript) -->
### LeetCode 108. Convert Sorted Array to Binary Search Tree (LeetCode Easy)

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: 
{% highlight javascript %}
[-10,-3,0,5,9]
{% endhighlight %}

One possible answer is: 

{% highlight javascript %}
[0,-3,9,-10,null,5]
{% endhighlight %}

 which represents the following height balanced BST:

{% highlight javascript %}
      0
     / \
   -3   9
   /   /
 -10  5
{% endhighlight %}


A binary search tree is, by nature, a sorted data structure in which each node has a value greater than its left child node, and less than or equal to its right child node. 

Given an array of sorted elements, we can bisect the array to find the element at the midpoint which can serve as our root element. From there, we can set the left and right child nodes by recursively calling the same function on the elements to the left and the right of the array and setting them to each child node, respectively. 

This operation continues until we hit our base case where our input array is empty. At this point, we can return null (as this represents that we have reached our terminal nodes).

{% highlight javascript %}
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;
  let mid = Math.floor(nums/2);
  let rootVal = nums[mid];
  let root = new TreeNode(rootVal);
  
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid+1));
  
  return root;
}
{% endhighlight %}
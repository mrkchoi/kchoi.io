---
layout: post
title: "LeetCode 110. Balanced Binary Tree"
author: "Kenneth"
---

<!-- ### Construct a Binary Tree from Preorder & Inorder Traversal (JavaScript) -->
### LeetCode 110. Balanced Binary Tree (LeetCode Easy)

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

Given the following tree 
{% highlight javascript %}
[3,9,20,null,null,15,7]:
{% endhighlight %}

{% highlight javascript %}

    3
   / \
  9  20
    /  \
   15   7
{% endhighlight %}

Return true.

Example 2:

Given the following tree 
{% highlight javascript %}
[1,2,2,3,3,null,null,4,4]:
{% endhighlight %}

{% highlight javascript %}

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
{% endhighlight %}

Return false.

{% highlight javascript %}
function isBalanced(root) {
  if (!root) return true;
  let heights = [];
  
  let height = 0;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (!root.left && !root.right) heights.push(height);
    if (root.left || root.right) height += 1;
  }
  let min = Math.min(...heights);
  let max = Math.max(...heights);
  
  if (max - min > 1) {
    return false;
  } else {
    return true;
  }
}
{% endhighlight %}
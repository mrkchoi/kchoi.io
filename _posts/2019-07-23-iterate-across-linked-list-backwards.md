---
layout: post
title: "Iterate across linked list backwards"
author: "Kenneth"
---

 **Prompt:**

 Iterate over a Singly Linked List of primitives backwards. When finished, 
 return a string representing the original linked list's values backwards 
 in the following format:

                             'A -> B -> C -> D' 

 **Constraints:**

 (1) Your function must be iterative, not recursive.
 (2) Your function must consume O(n) space.
 (3) Employee either a Stack, Queue, or some combination of the two in your
     solution. (Implement any data structures you need, as you need them.)


 Let's code!

{% highlight javascript %}

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here
    if (linkedList.length === 0) return '';
    let stack = [];

    let curNode = linkedList.head;
    while (curNode) {
        stack.push(curNode);
        curNode = curNode.next;
    }

    if (stack.length === 0) return "";
    let output = '';
    while (stack.length > 1) {
        output += `${stack.pop().value} -> `;
    }
    output += `${stack.pop().value}`;
    return output;
}
{% endhighlight %}
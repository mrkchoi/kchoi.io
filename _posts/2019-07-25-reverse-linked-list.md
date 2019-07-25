---
layout: post
title: "Reverse a Singly Linked List"
author: "Kenneth"
---


### Reverse a Singly Linked List (JavaScript)
_Given a Singly Linked List, write a function that reverses the order of the list's nodes._

If there is no linked list or if the linked list does not have a head value, we can immediately return undefined.

Otherwise, we want to keep track of the current node `cur`, our old next node `oldNext`, and set our initial `current.next` to null (this will later become our tail).

Then, we iterate through the nodes of our linked list and for each iteration, we store the node at our previous iteration to `prevCur`, update our new `cur` to be `oldNext`, update `oldNext` to `cur.next`, and set `cur.next` to `prevCur`.

We eventually reach the end of our linked list, reverse the head and tail pointers, then return our new reversed linked list.

{% highlight javascript %}
// Note: You are guaranteed not to receive a linked list with cycles as input.
//
// ------------
// Constraints:
// ------------ 
//
// (1) Your function must run in linear time, O(n).
// (2) You must reverse the list *in place*. (i.e. Use constant space, O(1).)
//
// ------------
// Explanation:
// ------------
//
// Given the following linked list:
//
//   First → Second → Third → Fourth → Fifth → null
//
// Should be mutated into the following list:
//
//   Fifth → Fourth → Third → Second → First → null
//
// This must be done without instantiating a NEW instance of a LinkedList.
// You must do reverse the list in place, by mutating the original input.
//
// --------
// Example:
// --------
//
// const linkedList = new LinkedList();
// linkedList.addToTail('First');
// linkedList.addToTail('Second');
// linkedList.addToTail('Third');
// linkedList.addToTail('Fourth');
// linkedList.addToTail('Fifth');
//
// Current List:  First → Second → Third → Fourth → Fifth → null
//
// const result = reverseLinkedList(root);
//
// Mutated List:  Fifth → Fourth → Third → Second → First → null
//
// result.head.value            => 'Fifth'
// result.head.next.value       => 'Fourth'
// result.tail.value            => 'First'
// result.tail.value.next       =>  null
//
// The old head is now the terminal node!
//
// -----------
// Let's code!
// -----------

function reverseLinkedList(linkedList) {
  if (!linkedList || !linkedList.head) return;

  let cur = linkedList.head;
  let oldNext = cur.next;
  cur.next = null;

  let i = 0;
  while (i < linkedList.length - 1) {
    prevCur = cur;
    cur = oldNext;
    oldNext = cur.next;
    cur.next = prevCur;

    i += 1;
  }

  let oldHead = linkedList.head;
  linkedList.head = linkedList.tail;
  linkedList.tail = oldHead;
  return linkedList;
}
{% endhighlight %}
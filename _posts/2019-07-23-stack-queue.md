---
layout: post
title: "Implementing a StackQueue in JavaScript"
author: "Kenneth"
---

### Introduction to Stacks & Queues

Stacks and queues are abstract data types (ADTs), meaning that their definitions are more conceptual and related to the rules governing their user-facing behaviors. They both represent a linear collection of nodes or values. In this way, they are quite similar to linked lists.

The primary difference between a stack and queue are the ways in which we insert and remove elements into them.
* **Stacks** are Last In First Out (LIFO)
* **Queues** are First In First Out (FIFO)


### StackQueue
Implement your preferred Stack implementation, including the methods

* Push
* Pop
* Size

Then, implement a Queue by instantiating two Stack instances for storage

The StackQueue implementation should include the following methods

* Enqueue
* Dequeue
* Size

Let's code

{% highlight javascript %}
class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(node) {
        if (!this.top) {
            this.top = node;
            this.bottom = node;
        } else {
            let temp = this.top;
            this.top = node;
            this.top.next = temp;
        }
        return this.length += 1;
    }

    pop() {
        if (!this.top) return null;

        let temp = this.top;
        if (this.top === this.bottom) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }
        this.length -= 1;
        return temp;
    }

    size() {
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.front) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }

        this.inStack.push(new Node(newNode.value));
        return this.size();
    }

    dequeue() {
        if (!this.front) {
            return null;
        } else if (this.size() === 1) {
            this.back = null;
            this.front = null;
        } else {
            this.front = this.front.next;
        }

        if (this.outStack.size() === 0) {
            while(this.inStack.size() > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }

        let temp = this.outStack.pop();

        return temp;
    }

    size() {
        return this.inStack.size() + this.outStack.size();
    }


};

{% endhighlight %}
---
layout: post
title: "Singly Linked List (JavaScript)"
author: "Kenneth"
---

<!-- ### Construct a Binary Tree from Preorder & Inorder Traversal (JavaScript) -->
### Singly Linked List (JavaScript)

Below is an implementation of a singly linked list:

{% highlight javascript %}
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // let temp = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1
        return this;
    }

    removeTail() {
        if (!this.head) return;
        let temp = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let i = 0
            let cur = this.head;
            while (i < this.length - 2) {
                cur = cur.next;
                i += 1;
            }
            this.tail = cur;
            this.tail.next = null;
        }

        this.length -= 1;
        return temp;
    }

    addToHead(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }

        this.length += 1;
        return this;
    }

    removeHead() {
        if (!this.head) return;
        let temp = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            temp = this.head;
            this.head = this.head.next;
        }

        this.length -= 1;
        return temp;
    }

    contains(target) {
        if (!this.head) false;

        let i = 0;
        let cur = this.head;
        while (i < this.length) {
            if (cur.value === target) return true;
            cur = cur.next;
            i += 1;
        }
        return false;
    }

    get(index) {
        if (!this.head || index > this.length) return null;

        let cur = this.head;
        let i = 0;
        while (i < index) {
            cur = cur.next;
            i += 1;
        }
        return cur;
    }

    set(index, val) {
        if (index >= this.length) return false;
        let cur = this.head;
        let i = 0;
        while (i < index) {
            cur = cur.next;
            i += 1;
        }
        cur.value = val;
        return true;
    }

    insert(index, val) {
        if (index >= this.length) return false;
        let newNode = new Node(val);

        let prev = this.head;
        let i = 0;
        while (i < index - 1) {
          prev = prev.next;
          i += 1;
        }

        let next = prev.next;
        prev.next = newNode;
        newNode.next = next;
        this.length += 1;
        return true;
    }

    remove(index) {
        if (!this.head || index > this.length) return;
        let i = 0;
        let prev = this.head;
        while (i < index - 1) {
            prev = prev.next;
            i += 1;
        }

        let removed = prev.next;
        let next = prev.next.next;
        prev.next = next;
        
        this.length -= 1;
        return removed;
    }

    size() {
        return this.length;
    }
}
{% endhighlight %}
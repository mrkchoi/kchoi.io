---
layout: post
title: "Uniq Subs + Largest Contiguous Sum"
author: "Kenneth"
---

### uniq_subs (JavaScript)
Write a method that finds all the unique substrings for a word.

{% highlight javascript %}

function uniqSubs(str) {
    let unique = new Set();
    for (let i = 0; i < str.length; i++) {        
        for (let j = i + 1; j <= str.length; j++) {
            let subStr = str.slice(i, j)
            unique.add(subStr);
        }
    }

    return unique;
}

{% endhighlight %}


Time complexity: O(n^2)  
Space complexity: O(n)

&nbsp;
&nbsp;

### largest_contiguous_sum (JavaScript)

A brute force solution to this problem involves iterating through the elements of the input array with two loops. One to point to the start of the subarray, and one to point to the end of the current subarray. The subarray's can be store in a variable, which can be reduced/injected to find the max. The time complexity using this approach is O(n^2) and the space complexity is O(n^2) as well.

An optimization would be to make a single pass through the input array, and at each step storing a reference to both the current (or running) max, as well as the absolute max. At each step, we can set the current max to be the greater of 0 and the `(currentMax + arr[i])`. Then, we can compare the current max with the global max that we will eventually return, and set the global max to the greater of the two. At the end of all of our iterations, we return the global max `max` as the largest contiguous sum of our input.

Write a method that finds all the unique substrings for a word.

{% highlight javascript %}


function largest_contiguous_sum(arr) {
    let currentMax = 0;    
    let max = 0;    

    for (let i = 0; i < arr.length; i++) {
        currentMax = Math.max(0, (currentMax + arr[i]));
        max = Math.max(0, currentMax, max);
    }
    return max;
}

{% endhighlight %}

Time complexity: O(n)  
Space complexity: O(1)


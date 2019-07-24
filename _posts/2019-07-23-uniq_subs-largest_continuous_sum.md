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
Write a method that finds all the unique substrings for a word.

{% highlight javascript %}

function largest_contiguous_sum(arr) {
    
}

{% endhighlight %}

Time complexity: O(n)  
Space complexity: O(1)


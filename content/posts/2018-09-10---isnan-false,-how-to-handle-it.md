---
title: isNaN('') = false 😅, how to handle it?
date: "2018-09-10T12:56:12.300Z"
template: "post"
draft: false
slug: "/posts/isnan-false,-how-to-handle-it/"
category: "Javascript"
tags: 
    - "isNaN"
    - "javascript"
    - "tricks"

description: "I recently noticed that `isNaN('')` and `isNaN(null)` both return `false` in JavaScript. It means that both empty string and `null` are valid numbers. So if you want to perform any number specific operation by just comparing the variable using `isNaN()`, it won't work."
---

I recently noticed that `isNaN('')` and `isNaN(null)` both return `false` in JavaScript. It means that both empty string and `null` are valid numbers. So if you want to perform any number specific operation by just comparing the variable using `isNaN()`, it won't work. Here is an example:

```javascript
function formattedAmount(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return "$ " + x.toFixed(2);
}

console.log(formattedAmount(""));
// output: Error: x.toFixed is not a function

console.log(formattedAmount(null));
// output: Error: Cannot read property 'toFixed' of null
```

This can be fixed using `Number()` function or `+` operator. It will create `Number` object of variable `x`. Hence both empty string and `null` will result into number `0` and accordingly, rest of the statement will be executed.

```javascript
function formattedAmount(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return "$ " + Number(x).toFixed(2);
  // OR
  // return '$ '+ (+x).toFixed(2);
}

console.log(formattedAmount(""));
// output: "$ 0.00"

console.log(formattedAmount(null));
// output: "$ 0.00"

console.log(formattedAmount(12.126));
// output: "$ 12.13"
```

Hope you find it useful.

I made a quick check but didn't get why exactly in JavaScript `isNaN('')` is `false`. I would love to know if you have anything to say regarding that. Thanks for reading!

Proofread by @ron4ex

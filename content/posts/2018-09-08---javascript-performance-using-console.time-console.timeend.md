---
title: JavaScript Performance using console.time() & console.timeEnd()
date: "2018-09-08T19:21:28.907Z"
template: "post"
draft: false
slug: "/posts/javascript-performance-using-console.time-console.timeend/"
category: "Javascript"
tags: 
    - "performance"
    - "javascript"
    - "console"

description: "Many a times it's necessary to check the time your code is taking to execute. JavaScript runs on the client's local machine and we don't want our application to be sluggish even in the devices with lesser hardware configurations."
---

Many a times it's necessary to check the time your code is taking to execute. JavaScript runs on the client's local machine and we don't want our application to be sluggish even in the devices with lesser hardware configurations.

Previously, I was using the method of printing current timestamps to manually check how much time it took. Let's jump right into code:

```javascript
let startTime = new Date().getTime();

console.log("started");

setTimeout(() => {
  console.log(
    "ended in " + (new Date().getTime() - startTime) + " milliseconds"
  );
}, 3000);
```

Output will be :

> "started"
> "ended in 3001 milliseconds"

But then I found that there are built-in methods that can help to accomplish the same. They are `console.time('some text')` and `console.timeEnd('some text')`. These can make our life so much easier to see elapsed times. A refactored version of the code sample above would be;

```javascript
console.time("timer");

setTimeout(() => {
  console.timeEnd("timer");
}, 3000);
```

Output will be:

> "timer: 3001.4951171875ms"

This is pretty clean and kind of a non-hacky way to test our code's execution time.

Hope you find it useful. Happy coding!



Thanks [Ronak Baldha](https://dev.to/ron4ex) for reviewing the post.
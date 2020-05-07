---
title: `useWindowSize` React Hook To Handle Responsiveness In JavaScript
date: "2020-03-04T00:55:28.907Z"
template: "post"
draft: true
slug: "/posts/useWindowSize-hook-to-handle-responsiveness-in-logic"
category: "UI"
tags:
  - "hooks"
  - "react"
  - "responsive-ui"

description: "There are some cases where you want to run a logic depending on the screen size. In other words, sometimes it makes more sense to handle responsiveness in JavaScript instead of CSS. We will be looking into the React Hook called `useWindowSize` I created to achieve the same."
---

It is sometimes helpful to know the responsive breakpoints in JavaScript to tweak and run the logic depending on the screen size.

We will be creating a [Custom React hook](https://reactjs.org/docs/hooks-custom.html). It will determine the screen size. And, we will be able to use the screen sizes just like we do in CSS media queries to update the UI or make the logic run a specific way.

> The code is dependent on the `window` object of the browser. The solution won't work in case of server-side rendering where the `window` object won't exist.

We will name the custom hook `useWindowSize`. We will have a state variable called `windowSize` which will be exported to be used by React Components.

```javascript
import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(undefined);

  ...
  //code to determine the screen size will go here

  ...

  //expose windowSize variable to be used by Components
  // to make responsiveness related chanegs
  return windowSize;
}

export default useWindowSize;
```

Now to determine the screen size, we will first check if the client is a browser, by checking if we have access to `window` object. If we have, we can get the width of the screen using `window.innerWidth` and assign into the state variable as default value.

```javascript
import { useState, useEffect } from "react";

function useWindowSize() {
  //👇
  const isWindowClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState(
    isWindowClient ? window.innerWidth : undefined
  );
  //☝️

  return windowSize;
}

export default useWindowSize;
```

You can use this hook in the component as below,

```javascript
import React from "react";
import useWindowSize from "./useWindowSize";

export default function App() {
  const windowSize = useWindowSize();
  return (
    <div>
      <h1>The screen width is: </h1>
      <span style={{ fontSize: "30px" }}>{windowSize}</span>
    </div>
  );
}
```

However, on resize of the window, this hook won't inform us about the change in size. To achieve it, we will have to implement `window`'s on `resize` listener. We will use it in `useEffect` so that we won't register the listener each time it renders and we make sure that it gets unregistered when it needs to.

```javascript
import { useState, useEffect } from "react";

function useWindowSize() {
  const isWindowClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState(
    isWindowClient ? window.innerWidth : undefined
  );

  //👇
  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setWindowSize(window.innerWidth);
    }

    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //un-register the listener
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);
  //☝️

  return windowSize;
}

export default useWindowSize;
```

Now if we want to have breakpoints instead of this absolute widths, we can convert the sizes into specific breakpoints (let say `sm`, `md`, `lg`, `xlg`) using a simple util function.

```javascript
import { useState, useEffect } from "react";

//👇
//a Util function that will conver the absolute width into breakpoints
function getBreakPoint(windowWidth) {
  if (windowWidth) {
    if (windowWidth < 480) {
      return "sm";
    } else if (windowWidth < 1024) {
      return "md";
    } else if (windowWidth < 1200) {
      return "lg";
    } else {
      return "xlg";
    }
  } else {
    return undefined;
  }
}
//☝️

function useWindowSize() {
  const isWindowClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState(
    isWindowClient
      ? getBreakPoint(window.innerWidth) //👈
      : undefined
  );

  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setWindowSize(getBreakPoint(window.innerWidth)); //👈
    }

    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //unregister the listerner on destroy of the hook
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);

  return windowSize;
}

export default useWindowSize;
```

The sandbox of the final code is as below

<iframe
     src="https://codesandbox.io/embed/funny-taussig-krsgn?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="funny-taussig-krsgn"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

All the best for making your users happy with all size of devices! 😄

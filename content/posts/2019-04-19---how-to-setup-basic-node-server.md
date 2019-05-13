---
title: How to setup basic Node Server
date: "2019-04-19T00:55:28.907Z"
template: "post"
draft: false
slug: "/posts/how-to-setup-basic-node-server"
category: "Node.js"
tags:
  - "node"
  - "server"
  - "express"

description: "We will setup basic Node Server from an empty folder using express.js"
---

## Setup basic Node.js + Express.js server

### Initialize the package manager

- Create any folder to contain the project, let say `my-app`
- Run `npm init` command at `my-app` folder location in terminal. Assuming you have Node installed. If not, please [install](https://nodejs.org/).
- It will ask you the values of the properties of `package.json`.

![package.json config setup](/media/npm-init.PNG)

- It will create a file called `package.json` with the content shown below.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "This is basic node express setup",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Sanket Patel",
  "license": "ISC"
}
```

### Install the express package

- To create an express server, we will need to install the package called `express`
- To do the same, run `npm install express --save` or if you prefer yarn then run `yan add express`

### Create the server

- Let's create `index.js`, which will be the main and entry point of the node server we are going to create.
- It will be having content as below:

```javascript
const express = require("express");

//create express app
const app = express();

//port at which the server will run
const port = 4000;

//create end point
app.get("/", (request, response) => {
  //send 'Hi, from Node server' to client
  response.send("Hi, from Node server");
});

//start server and listen for the request
app.listen(port, () =>
  //a callback that will be called as soon as server start listening
  console.log(`server is listening at http://localhost:${port}`)
);
```

- To run the same run `node index.js` in the terminal. Which should show output as

```bash
$ node index.js
server is listening at http://localhost:4000
```

- And if you will click on http://localhost:4000 link, it will run our default route ('/') and it will show the response message we sent from the server i.e.'Hi, from Node server'.

### Demystify the command

- Instead of running `node index.js` each time, we can create it's a script in `package.json`, like below

```json
...
"scripts": {
  "dev":"node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...
```

- Now you can simply run `npm run dev` or `yarn dev` to run the server. This will be really helpful when in real projects, we want to do many other things while starting the server.

### Watch for the changes and automatically restart the server

- Currently, each time you make changes in the `index.js`, you will have to stop the server(using ctrl+c in windows, cmd+c in macOS I guess), and start again to see the effects.
- Instead, to keep watch on the file, we can use a package called `nodemon`. We can install it as dev dependency by running `npm install nodemon --save-dev` or `yarn add nodemon --dev`.
- And update the `dev` script in `package.json` to as shown below

```json
...
"scripts": {
  "dev": "nodemon index.js", //use `nodemon` instead of `node`
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...
```

- Now as soon as you make any change in the `index.json`, it will automatically detect the changes, it will stop and start the server. Try updating the response message to test the same.

<p style="text-align:center">
<iframe src="https://codesandbox.io/embed/79wz0k0v1?fontsize=14" title="Setup Basic Node.js Server" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
</p>

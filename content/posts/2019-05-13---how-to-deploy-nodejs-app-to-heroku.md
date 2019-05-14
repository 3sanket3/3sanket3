---
title: How To Quickly Deploy Node Js App To Heroku
date: "2019-05-13T00:55:28.907Z"
template: "post"
draft: false
slug: "/posts/how-to-deploy-nodejs-app-to-heroku"
category: "Node.js"
tags:
  - "node"
  - "server"
  - "express"
  - "heroku"
  - "devops"

description: "This tutorial will cover how to deploy the Node.js project to Heroku - the cloud application platform. We will have our application up by running just few commands"
---

This tutorial will cover how to deploy the Node.js project to Heroku - the cloud application platform. We will have our application up by running just few commands.

Assuming you have any node.js app that you want to publish. If not, I have listed the steps in [this tutorial](https://3sanket3.com/posts/how-to-setup-basic-node-server) and codesandbox for the same is [here](https://codesandbox.io/embed/79wz0k0v1) to set up the basic app.

## Prerequisite

- Git

  - To use the Huroku CLI we will need to have the Git installed in the machine, so make sure you have it.

  You can check if it is already installed or not, using

  ```bash
    $ git --version
    git version 2.18.0.windows.1
  ```

- Node 8+

  ```bash
  $ node --version
  v8.12.0
  ```

- A registered account at https://heroku.com
  - If you don't have please sign up and verify your email address

## Initialize Git for the project (if it is not)

If your project is the git repository itself then directly move to [install heroku](#install-heroku)

```bash
$ git init
Initialized empty Git repository in your-project-path/.git/
```

Create a `.gitignore` file to ignore `node_modules`

```bash
$ echo node_modules > .gitignore
```

Commit the existing files to git repository

```bash
$ git add -A

$ git commit -m 'initial commit'
[master (root-commit) e79168d] initial commit
 4 files changed, 2047 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 index.js
 create mode 100644 package.json
 create mode 100644 yarn.lock
```

## Install Heroku

[Download](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) and install the Heroku CLI as per your platform.

Check if it is properly installed by checking version.

```bash
  $ heroku --version
  heroku/7.24.3 win32-x64 node-v11.14.0
```

## Login to Heroku

`heroku login` command will ask us to open a browser using pressing any key, then you can easily login in browser and the terminal will automatically catch it. Isn't it cool!

```bash
$ heroku login
heroku: Press any key to open up the browser to login or q to exit:
Opening browser to https://cli-auth.heroku.com/auth/browser/06c81181-c988-457f-b415-5789e7abd758
Logging in... done
Logged in as 3sanket3@gmail.com
```

## Create a Heroku app

Create the app using command `heroku create <optional-app-name>`

```bash
$ heroku create nodejs-tutorial-one-3sanket3

Creating ⬢ nodejs-tutorial-one-3sanket3... done
https://nodejs-tutorial-one-3sanket3.herokuapp.com/ | https://git.heroku.com/nodejs-tutorial-one-3sanket3.git
```

## Make sure the `package.json` have a `start` command

```json
...
"scripts": {
    "dev": "nodemon index.js", <-- for local development purpose
    "start": "node .", <-- Heroku will use to start the application
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...

```

> Note: If you want to use `start` command for some other task, you can create a `Procfile` to tell heroku which command to run while starting the application, as explained [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile).

## Deploy the code

```bash
$ git push heroku master
```

If everything goes fine you should see the last part of the command output as below. It contains the URL at which your app is deployed.

![heroku deployment output](/media/heroku-deploy-output.PNG)

## Check deployment logs

Using `heroku logs --tail` command, you can check logs of deployment. It will be updated in real-time so you can keep it open while deployment, in another terminal tab/window keep your eye on it.

Ref : https://devcenter.heroku.com/articles/getting-started-with-nodejs

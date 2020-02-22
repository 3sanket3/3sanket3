---
title: Running Out Of Free Build Minutes On Netlify? Try This.
date: "2020-02-21T00:55:28.907Z"
template: "post"
draft: false
slug: "/posts/running-out-of-free-netlify-build-minutes-try-this"
category: "CI/CD"
tags:
  - "beginner"
  - "faqs"
  - "CI/CD"

description: "We all want to have the application cost almost zero for our side projects. And in the world of serverless it is possible too. But there are supporting systems like deployment tools, which we may have to use wisely so that resources may not over the free limits"
---

# Short Answer

The Netlify provide a feature called Build Hooks. It is a URL, which we can hit via `curl` to trigger deployment for the specific branch

# Long Answer

## What is Netlify?

It is a great service to configure and deploy our web apps in no-time. The UI, features and their reliability everything is so slick. They are now not only the deployment solution but also expanding towards serverless functions, auth, storage, analytics and many more.

## What is build minutes?

The computation time(in minutes) on Netlify Server to build your app and generate the production files during deployment. On free plan netlify provides 300 free build minutes.

## The Problem : They may fall short?

Many times we need to have our development going on in several branches. If we have multiple developers working on the project, we generally keep pushing the code frequently. And if the changes on these branches need to reviewed, we configure them as continuous deployment. So with each push, if your branches are deployed, you may cross the 300 free minutes.

## The Solution

One of the awesome feature Netlify provides is deploy via calling a build hook. It is nothing but a URL which we should hit or run `curl` on it to trigger the deployment of the branch. And this is really helpful as except production we are generally okay not to deploy the branches on each push. These command will make our code deployment on-demand and will save the build minutes.

![Build Hooks](/media/build-hooks.jpg)

To keep them handy, we can configure it to the script section of `package.json` as below,

```
...
"scripts": {
    "start": "<start command>",
    "deploy-dev": "curl -X POST -d {} https://api.netlify.com/build_hooks/5e3d300exxxxxxxca2246926", //<--
    "test": "<test command>",
}
....
```

## Conclusion

If you think the non-master branches are unnecessarily using the build minutes and you are running out of free quota just due to that, you should use build hooks.

---
title: Running out of free build minutes on Netlify, try this.
date: "2020-02-21T00:55:28.907Z"
template: "post"
draft: true
slug: "/posts/running-out-of-free-netlify-build-minutes-try-this"
category: "CI/CD"
tags:
  - "beginner"
  - "faqs"
  - "CI/CD"

description: "We all want to have the application cost almost zero for our side projects. And in the world of serverless it is possible too. But there are supporting systems like deployment tools, which we may have to use wisely to not go over the free limits"
---

# Short Answer

The Netlify provide a feature called Build Hooks. It is a URL, which we can hit via `curl` to to trigger deployment from the specific branch

# Long Answer

## What is Netlify?

It is a great service to configure and deploy our web apps in no-time. The UI, features and their reliability everything is so slick. They are now not only the deployment solution but also expanding towards serverless functions, auth, storage, analytics and many more.

## What is build minutes?

The computation time(in minutes) on Netlify Server to build your app and generate the production files. On free plan netlify provides 300 free build minutes.

## Problem : Why they fall short?

Many times we need to have our development going on in several branches. Now if we have multiple developer working on the project, we generally keep pushing the code frequently. And if the changes on these branches are needs to reviewed, we configure them as continuous deployment.

So with each push if your branches are deployed, you may cross the 300 free minutes.

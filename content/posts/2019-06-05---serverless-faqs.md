---
title: Serverless FAQs
date: "2019-06-05T00:55:28.907Z"
template: "post"
draft: false
slug: "/posts/serverless-faqs"
category: "serverless"
tags:
  - "node.js"
  - "serverless"
  - "beginner"
  - "faqs"

description: "This post explains some of the frequent questions many developers have regarding Serverless"
---

## No Servers? Really? 😲

Haha, don't go with the literal meaning of the name. There are servers 🤦‍, just you won't have to manage the way you typically do. The cloud providers will dynamically manage the allocation of resources.

You just write functions and deploy to the cloud. The cloud providers will store your functions in storage. When you ask to run the function, they will pull from storage, run it and done.

## How will I be charged? 💸

It will only charge for the computing time of your function. So, no charge when your code is not running 🤑

## Does it support my programming language? 👨‍💻

It depends on the cloud providers. Here is list of languages supported by the cloud providers.

- [**AWS:**](https://aws.amazon.com/lambda/) Java, Go, PowerShell, Node.js, C#, Python, and Ruby
- [**Google Cloud:**](https://cloud.google.com/functions/) Go, Node.js, Python
- [**Azure:**](https://azure.microsoft.com/en-in/services/functions/) PowerShell, Node.js, C#, Python, F#

There are many other cloud providers that support running serverless functions like [Cloudflare](https://www.cloudflare.com/en-in/products/cloudflare-workers/), [IBM Openwhisks](https://www.ibm.com/in-en/cloud/functions), [Kubeless](https://kubeless.io/), etc.

## Do I have the flexibility to use any version of the runtime environment? 👩‍🔧

No, your code will run on the versions they support. You can find the supported version from the respective providers' documentation. Like, for AWS you can find [here](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html).

## Any framework that guides me writing serverless functions or the project? 👨‍🏫

- https://serverless.com, is provider agnostic and supports most of the languages.
- https://claudiajs.com/ for JavaScript
- https://www.zappa.io/ for Python
- [Serverless Application Model](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) for the AWS ecosystem

## If servers run on request instead of being ready all the time, won't it take time to respond to my request? 😴

Yes, you may experience latency when you trigger a function.

When you call the function for the first time, it takes time to set up the container and bootstrap the application. It is called a "cold start". But for subsequent requests, the cloud provider tries to reuse the container. And it depends on cloud providers and other infrastructure factors for how much time it will keep the containers live. So, they always advise writing code in a way that doesn't assume the container will be reused.

The 'cold start' time depends on various factors like:

- Programming language - statically typed language takes more time
- When you update the functions and deploy, it destroys the containers
- How frequently your function is being called and keep the container "warm".
- The code size, etc.

It is not a huge problem in most of the cases. But still, if you want to avoid the cold start, you can schedule one function which keeps calling the function you want to keep warm, after every certain amount of time.

## How to trigger the deployed functions? ⚡️

They can be triggered in many ways:

- Once deployed, you will get a dedicated HTTP URL, using which we can call
- You can configure the HTTP URLs to use as a REST Apis
- The function can be scheduled to run at a specific time
- On other cloud infrastructure events like on data change event of storage, etc.

## Are there examples, enjoying being serverless? 😎

You can find case studies managed by frameworks and cloud providers like [case studies by serverless framework](https://serverless.com/learn/case-studies/) and [by AWS Lambda](https://aws.amazon.com/lambda/resources/customer-case-studies/)

I would recommend, you start to experiment with serverless if you haven't already. The easiest way is, making the backend functions of your side projects, serverless. And if you are yet to implement your first idea, the serverless will really helpful to remove the server management headache and ship your idea quickly 🚀

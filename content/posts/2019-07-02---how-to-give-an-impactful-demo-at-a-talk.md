---
title: How to give an impactful demo at a talk
date: "2019-07-02T00:55:28.907Z"
template: "post"
draft: false
slug: "/posts/how-to-give-an-impactful-demo-at-a-talk"
category: "Talks"
tags:
  - "beginner"
  - "faqs"
  - "talks"
  - "live code"

description: "Giving code demo at a meetup is a crucial part. And if it goes wrong, it may put you in a tough situation. I will explain few tricks I am using while giving demo and working so far."
---

Giving code demo at a meetup is a crucial part. And if it goes wrong, it may put you in a tough situation. In addition, the demo should be something that the audience should find interesting, easy to understand and doable. I will explain a few tricks I am using while giving a demo and it's working so far.

# Though minimal, it should be a practical application that the audience can relate to 🚗

A demo should be relatable to the practical scenario most of our audience are aware of.

Also, they should feel like, they can do it with little effort, and for that,

- Try to make it easily understandable. You can show an architecture diagram to give an overall idea
- Use third-party services/libraries so that users try to focus on the core concept and not additionally required supportive code
- Keep a very simple file structure.

# Code from Scratch 🐣

I found, if we start our demo from creating a project folder itself, the audience feels like no magic going on.

If you are using frameworks, yes you may not want to spend time on long-running scaffolding process. In that case, if you can start from the default scaffolded files itself it would be great. If you need some utilities by default, you can create a package or at least separate folder which audience can consider a third party library and not focus on its implementation.

# Use third-party services 👨‍🔧

When we are making demo practical, we may need third-party services like send an email, upload image, pull JSON data of specific business etc. Nowadays in the growing era of _No Code_ solutions, most of such services come with easy integration. So, better we quickly add them and try to make demo as real application as possible.

The services mostly have with free quota limits so just make sure you don't exceed the same during demo itself 😉 I experienced it once 😅

# Audience should feel like it will be doable 😎

The actual success of the demo is when your audience tries it out and can implement themselves what you taught. And they will only try if they find it doable. Obviously, there can be people with a variety of experience level. But we should try to make it feel as easy as possible.

# Keep some contents in mind to fill-in while waiting for long running tasks 📄

There may be some tasks during demo which may take time like, stop and start the project, deployment, downloading libraries etc. While waiting for those process to complete, we can explain related concepts. So keep some content for the same.

# Practice, Practice and Practice 👩‍💻

Practice can only make you write the code quickly with less error. There will be many scenarios that you may fall into which you might not have given thought. By practicing more, you will come across them and get clear before the actual demo. Also, as I suggested in [preparing your first talk](https://3sanket3.com/posts/preparing-your-first-talk), you can give a demo to your friends and get feedback.

# Keep screen recording as backup 📹

We all know, it's programming! If unfortunately you run into an unexpected situation and getting out of it in limited time is not possible, you can explain the demo from screen recording.

Hope you find them useful. Please add your suggestions as well in the comment. I would love to learn from your experience.

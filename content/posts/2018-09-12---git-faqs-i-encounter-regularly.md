---
title: Git FAQs I Encounter Regularly
date: "2018-09-12T16:48:05.036Z"
template: "post"
draft: false
slug: "/posts/git-faqs-i-encounter-regularly/"
category: "Git"
tags: 
    - "git"
    - "code management"
    - "tips"

description: "Git is much more than just `push`/`pull` of your code. In this post I will discuss other supporting commands and tricks to handle some scenarios I have encountered while coding in a team. These are also the questions that I'm asked by most git beginners I work with."
---
Git is much more than just `push`/`pull` of your code. In this post I will discuss other supporting commands and tricks to handle some scenarios I have encountered while coding in a team. These are also the questions that I'm asked by most git beginners I work with.

I will assume that you already know the `push`/`pull` and branching concepts of git. Please let me know in comments/DM if you are not and I will create a post on the same.

## 1. Branch switching is forcing me to commit my changes to the current branch before the checkout. But I don't want to commit my changes yet. What should I do?

If so, you can stash (store them safely aside) your current changes and navigate to the other branch easily.

```console
$ git stash
```

It will NOT stash the newly added files. Generally the newly added files won't cause any issue while switching to another branch. But still if you don't want to see the newly added files in changes after a branch switch, you can stash them too by adding `-U` parameter to the command above.

```git
$ git stash -U
```

Thenafter, whenever you want your changes back, run:

```git
$ git stash pop
```

## 2. How can I remove/discard all of my uncommited changes?

```git
$ git reset --hard
```

To remove the untracked files and directories [added on 26th Oct 2018]
```git
$ git clean -d -f
```


## 3. I accidentally committed in `master` or in a branch I should not have. What to do?

First just take a backup of what you committed in a new branch so that you won't lose your changes, using:

```git
$ git checkout -b new-branch-name
```

It will checkout everything you have in `master` branch to `new-branch-name`. Next, we need to remove unnecessary commits (hence the changes) from the `master`.

You will first need to see the log and get the _git commit hash_ to where you want your `master` branch to go back. Think of it like _undo_.

```git
$ git log
commit be6bf5e001852e57bbc2c4e14054e3e539b6601c (HEAD -> master)
Author: Sanket Patel <3sanket3@gmail.com>
Date:   Wed Sep 12 18:19:24 2018 +0530

    another commit by mistake

commit f7169231dc4b729c97f69a877487cf2ddae54133
Author: Sanket Patel <3sanket3@gmail.com>
Date:   Wed Sep 12 18:18:56 2018 +0530

    commit by mistake

commit 9f6deced44efecb59f6d70283b8d0ba2d0a57550 <-- We want to restore at this point
Author: Sanket Patel <3sanket3@gmail.com>
Date:   Wed Sep 12 18:18:26 2018 +0530

    good commit
```

Let's say we are good upto the commit titled _good commit_ i.e. `9f6deced44efecb59f6d70283b8d0ba2d0a57550` and we want to remove the other 2 commits added afterwards. We can do this by:

```git
$ git reset --hard 9f6deced44efecb59f6d70283b8d0ba2d0a57550
```

It will remove the commits and changes made _by mistake_.

## 4. Before merging any branch into my branch, I want to review the changes.

```git
$ git merge others-branch-name --no-commit --no-ff
```

This tries to merge the changes from `others-branch-name` to your branch, but won't commit. So that you will get a chance to review what your branch would look like if the merge happened. You can review and the commit the merge manually.

Happy gitting! :)

Proofread by: @ron4ex
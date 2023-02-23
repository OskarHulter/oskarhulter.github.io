---
title: Blog launch
author: Oskar Hulter
pubDatetime: 2023-02-17T03:42:51Z
postSlug: blog-launch
featured: false
draft: false
tags:
  - Announcement
description:
  My new blog is finally launched, let's nerd out together! 👨‍💻 
  An overview of my plans for the site. 
---

![Spaceship exploring futuristic planet](https://res.cloudinary.com/dduqjmlr5/image/upload/v1677006718/spaceship-exploring-futuristic-city_topwip.png)

## Welcome

I'm excited to announce the launch of my new blog. I hope you find it useful, informative and inspiring. In this post I'll tell you a bit about why I started this blog, what's changed since then and how to get involved with it if you want to.

Whether you are an experienced developer or just getting started,
this blog will provide valuable insights into the why and how of common code
patterns.

## Why create a blog?

You're probably wondering, "Does the world need another blog?"

I was sceptical at first, but I found a great reason that changed my mind.
By sharing your story, you can help others learn and grow.

It’s no secret that programming can be tricky. The key is to understand not just what the code does but why it works in a certain way. That’s why my blog dives deep into each pattern, examining its strengths and weaknesses as well as its best use cases for developers. I believe that if you understand why something works, then you can apply it effectively in your own projects.

## Goals

The best way to learn something is to teach it. The act of explaining
topics in a simple manner will reveal gaps in your understanding. The gaps are
usually small enough that you can be productive at your job without fixing them.
A clear understanding of the underlying principles makes the process of learning
new technologies easier.

## Example

```js title="example.js"
console.log("Hello World")
```

Fundamental
 concepts
  vs
   specific details

- Are more applicable
- Don't change as often
- Fundamentals

Optimizing for new situations makes sense because of two main reasons.

- Change is the only constant.
- Every situation will be new, at least once.
- Every organization has unique constraints. (projects)

It is impossible to learn everything about software in a lifetime. Even the most experienced
developers regularly reach the limits of their expertise. Being confident with
this fact can decrease the risk of burnout and makes the process more fun.

Zen buddhism celebrates the concept of "the beginners mind" - a state bescribed
by the poem:
> “If your mind is empty, it is always ready for anything; it is open to everything. In the beginner’s mind there are many possibilities; in the expert’s mind there are few.”

―

**Shunryu Suzuki,**

**[Zen Mind, Beginner's Mind](https://www.goodreads.com/work/quotes/231282)**

Is it a statement on the creative demands of the hacker ethos? It's only fitting
that a 0-day vulnrability requires an empty mind.

> “When you listen to someone, you should give up all your preconceived ideas and
> your subjective opinions; you should just listen to him, just observe what his
> way is. We put very little emphasis on right and wrong or good and bad. We just
> see things as they are with him, and accept them. This is how we communicate
> with each other. Usually, when you listen to some statement, you hear it as a
> kind of echo of yourself. You are actually listening to your own opinion. If it
> agrees with your opinion you may accept it, but if it does not, you will reject
> it or you may not even really hear it.”

―
**Shunryu Suzuki,**

**[Zen Mind, Beginner's Mind: Informal Talks on Zen Meditation and Practice](https://www.goodreads.com/work/quotes/231282)**

This is sage advice for developers who enjoy a lively discussion (crusade) on code opinions.
If you're not willing to understand the other side of the argument, then I would
consider procrastinating your work in a more productive manner. Memeaholics
trollanonymous is already operating at capacity, unfortunately.

if you want to maximize your growth.

 My current obsession is levraging runtime type safety to maximize security, maintainability and velocity.

The first series of posts will focus on Zod, the brilliant runtime type-checker.
Zod schemas are great for storing the Single Source of Truth of the domain.
Having a single version of the "truth" unlocks the following superpowers:

- Schema definitions are reused as input validation, both for user input and
  function params.

- Types are mirrored automatically on the front and backend.
 added

- Astro 2.0 added support for content definitions using Zod.

- TRPC recently served as inspiration for the creation of Zodios and ts-rest.
  This new breed of api-frameworks replaces RPC with REST which reduces
  complexity. Both packages guarantee full stack, end-to-end type inferance and
  validation out of the box.
  This looks interesting for companies relying on legacy REST-apis.
  Full stack TS codebases has never looked better in terms of developer
  velocity, DX and cost.
  
  - S

- Zod w.

One of my favorite features is Type-inferance. It's great for reducing TS
friction

```ts
import { z } from "zod"

const User = z.object({
  username: z.string(),
})
User.parse({ username: "Ludwig" })

type User = z.infer<typeof User>
```

multipart series of blog posts is
about, a TypeScript-first runtime type system for JavaScript. I will review my
experience with the latest packages and share my thoughts on how to use them.
If you have any questions or comments, please feel free to contact me!

## Conclusion

A passion for learning is essential for any developer who wants to write quality
code efficiently.

My new blog provides an in-depth look at some of the most
popular tools, patterns and packages so that readers can gain a better
understanding of how they work—and when they should be used.

I hope this will be valuable for beginners and veterans alike and I look forward
to learning together. Let's get nerdy! 🤓

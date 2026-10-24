---
title: The Redesign
publishDate: 2026-10-24T00:00:00Z
excerpt: I tried to like Hexo and the themes it created, but it wasn't what I wanted. Using Claude Code, I rewrote the whole site in an afternoon.
image: ~/assets/images/hero.jpg
imageAlt: Illustration of a terminal prompt over mountains at night
tags:
  - hexo
  - personal website
  - astro
---

When I initially set up this website back in May 2026, I was sitting at a dance competition for my daughters. At these competitions there is a lot of waiting around until performance time. Instead of browsing social media, I explored Claude Code and an AI workflow for the first time. It was fun! Folks talk about the "runner's high" but I had that "builder's excitement".

But what it created, while good, just didn't fit what I wanted. Now in September, with dance season starting back up, I have a moment to revisit this site. My AI workflows are better than they were in May. Let's try this again.

## Started with a conversation

Maybe it's a sign of when I started as a software engineer, but I remember the days of getting the team in a room to discuss a design or architecture. That's now changing with AI. I create skills that enable me to evaluate locally and quickly, so that when the team does get together, most blind spots have been eliminated, diagrams are polished, and the fundamentals are double-checked.

Now with AI, I'm able to bring that team review to personal projects, something that would be impossible for a personal website otherwise. Who would be interested in reviewing such a thing as a group? No one.

### Tried Claude Projects

This time, instead of starting with Claude Code and thinking this is a "coding" problem, I treated it as more of a project. Using that logic I wanted to see what the new ["Projects"](https://support.claude.com/en/articles/9517075-what-are-projects) feature had to offer. I threw in my context on the redesign I wanted along with a link to the GitHub repository. I made sure it knew about my workflow via GitHub issues.

Oh, this is a whole new style! Instead of talking about the work through code, the conversation was about the project itself. It even created prototype PNGs so I could see if it fit what I wanted.

We went a few turns on Hexo to eventually switch to Astro as the static site generator. Then came the theme, followed by needing more information like my resume to help show prototypes with data.

Letting Claude do its thing, we eventually had a scaffolded project that "looked" how I wanted. Since Anthropic was offering free credits on projects, this didn't even count against my main usage, which was great. But now the focus switched from "what I wanted" to the "code." That meant one thing, fire up Claude Code.

## Claude Code

Then I started questioning the code that was created, looking at the project structure and how it was set up. I went through the usual items like security, deployment, testing, and standards to keep things clean.

An hour later I had a project that met my standards that I could replace my site with. I created a PR, ensured my PRA (Pull Request Analysis) passed, and deployed the new build. The fact that the style of deployment I created back in May held up and didn't need any changes was an interesting insight. To me, it showed once again that how we develop applications changes at a rapid pace, but how we deploy code to production changes much more slowly.

I've used other coding harnesses like Copilot and Cursor with success, but for some reason Claude Code is just my favorite. It's simple and intuitive, with easy slash commands, a simple Q&A interface, and broader support than most harnesses.

## It's working

It's been two weeks, but during my dance competition downtimes I've wanted to write up my latest thoughts on things I'm doing. This will be my second post in as many weeks. Ultimately, I want to get better at the written word now that the software industry is leveraging AI via HTML and Markdown files. Being able to articulate your ideas and concepts better is a skill that helps whether you're interacting with an LLM or a fellow person trying to understand.

## What's next

I'm a sucker for a "hard way" GitHub repo, as they help you understand how a system is built, not just how to use it. Sort of like I can use Wi-Fi, but how does Wi-Fi work? My most recent hard-way article was setting up [Kubernetes the hard way](https://github.com/kelseyhightower/kubernetes-the-hard-way) from Kelsey Hightower. Using the same AWS account, I created my own new cluster with some small Graviton instances. It cost me around $3 to complete the whole project, and I learned a ton.

While I have a high-level understanding of LLMs, I want to get into the weeds with the [LLM from scratch project](https://github.com/rasbt/LLMs-from-scratch). Until next time!

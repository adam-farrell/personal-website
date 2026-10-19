---
title: Younger Me Would Be Amazed
publishDate: 2026-10-13T00:00:00Z
excerpt: What you have access to these days compared to the early 2000s is mind-blowing. On top of that, it's free.
image: ~/assets/images/hero.jpg
imageAlt: Illustration of a terminal prompt over mountains at night
tags:
  - aws
  - personal website
  - blog
---

I remember back in 2000 I bought my first domain through GoDaddy. It cost me, I think, $35 for the year. I saved files locally, pushed them via SFTP, and they were hosted on a server in the US. Now it's $16 a year for the domain name through AWS, my code is stored in a central repository, and it's pushed automatically.

## My thought process

I could have just gone back to GoDaddy, gotten a domain, and started pushing files. But I'm not the same person I was back then and the internet is incredibly different. First I had to define what I actually wanted to do.

After some thought, my main requirements were:
- Cheap as possible. I knew I would have to pay something, but I didn't want to spend much.
- Not locked into a platform. Could I use Medium, Substack or Blogspot? Absolutely. Or a social network like LinkedIn? Yep. But who knows what those services will look like in the years/months ahead.
- A playground. Working in corporate has some big advantages, but for many valid reasons, some technology is not approved. I wanted to use tech that I might not otherwise have the opportunity to play with.

## AWS just fit

GoDaddy would have charged a monthly fee and come with some fun goodies. But I didn't really need an email inbox, since Gmail is fine. From previous experience I knew I could meet all of my requirements if I went to AWS. But what about cost? I knew that for my traffic levels, CloudFront costs would be fairly minimal, the certificate would be free, the hosted zone would be cheap, and storage costs would be low. But could I make it even cheaper?

Then I found CloudFront introduced [flat-rate pricing plans](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/flat-rate-pricing-plan.html) with a completely free tier.

Perfect! Can't get much better than free. AWS it is. At the time I set up the website, you couldn't manage flat-rate pricing through IaC. It had to be done via click-ops, which was a bummer. That changed in September with an [announcement](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudfront-flat-rate-pricing-plans-api/) that I will try to address later.

### Time to purchase the domain and get moving

Went looking at WHOIS but my name and dot com were taken along with the dashed version. So I figured the dot org edition should be fine. Google doesn't treat them any differently. Bought the domain for $16/year and maybe 10 minutes later I had a domain ready to go in AWS. To my surprise AWS kindly created a hosted zone for me automatically versus having to do a manual setup.

From there I did some click-ops to create my CloudFront distribution and S3 bucket. I also set up budget alerts to make sure I didn't get any surprises on my bills.

## Building the website with AI

I really wanted to experiment with Claude Code with all the hype around it. Along with enhancing my own AI workflow using tooling I was seeing on the internet. Specifically, I wanted to try tooling created by [Matt Pocock](https://github.com/mattpocock). His style mirrored older patterns I'm used to, like tickets and product requirements, while using newer AI tooling methods.

The skill that greatly helped me was grill-me. It's now a standard practice I use all the time. Trying to one-shot prompt work with as much context as I could think of would still cause the LLM to invent concepts and ideas. Grill-me totally changed that and now after some time being interviewed I get much better results. It reminds me of the times in the past when you'd get your development team together in meetings to review a design/architecture to find gaps.

After an interview with Claude Code and using the skills created by Matt Pocock I got going really fast. The issues called out when I needed to be human in the loop, which made it easy to track progress and to see when I needed to step in.

### The site itself

The first iteration of the site was built using Hexo. I found a template that I thought I could manipulate to a state I wanted so I pushed forward. With the site building locally, I then set up the build process.

I hooked up GitHub Actions and was amazed at the tooling you get for free. A public repository gets limited access, which was plenty for my little hobby project.

## Success

The site was up! It had an initial Hello World blog post deployed through releasing a tag via GitHub Actions that assumes a role in my AWS account.

The part that blew my mind was how far we've come from deploying with SFTP to source code driven CD builds at your fingertips. Going from a server somewhere to a site backed by a CDN with no compute required.

Next up, the site's redesign. The Hexo built site just never really felt like what I wanted.

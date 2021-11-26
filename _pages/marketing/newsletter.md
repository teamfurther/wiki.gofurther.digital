---
layout: page
title: "Newsletter"
permalink: 'marketing/newsletter'
---
<small class="owner">Owner: Marketing</small> _Last revision: 12.11.2021_


The following page describes how to write and publish our monthly newsletter digest.

- [Editing templates](#editing-templates)
- [Editing newsletter](#editing-newsletter)
- [Testing](#testing)
- [Scheduling](#scheduling)
{: .toc}

## Editing templates[#](#editing-templates)
Start by duplicating one of the older issues. The base issue should be the latest one, unless you have a specific reason to use an older issue as the source.

1. Update the fixed sections for both the Hungarian (```src/templates/hu.html```) and English (```src/templates/en.html```) language templates.
    - title meta tag
    - issue number and month
    - headline
    - intro image & text
    - blog articles
    - events
    - case study
    - etc.
2. Compile your templates using ```npm start``` from the issue directory.

We always send a slightly different version of the newsletter for new subscribers (greenhorns). Edit the two template files (```src/templates/hu_greenhorn.html``` && ```src/templates/hu_greenhorn.html```) by copying the content from the main templates. Change the **intro image & text** to the one from **the very first issue**.

## Editing newsletter[#](#editing-newsletter)
We use [Sendinblue](https://sendinblue.com){:target="_blank"} to edit and schedule the newsletters themselves. On the Campaigns tab, duplicate one of the older issues. The base issue should be the latest one, unless you have a specific reason to use an older issue as the source.

1. Update the campaign name, subject, preview text and HTML content.
2. Copy the template content from the HTML file (```dist/{lang}.html```) to the Sendinblue editor (click Edit the email content on the Design tab).
3. Sendinblue doesn't process image URL's, so you'll need to manually re-map every image using the Picture icon on the Design tab.
4. Since Sendinblue doesn't allow the mapping if images inlined into CSS, we had to add these to HTML. After mapping images (see step #4), remove these images from the source code. 
5. Select the correct newsletter list from the Recipients tab.

## Testing[#](#testing)
1. Proofread. This email goes out hundreds of trusted, long-time partners.
    - Copy the text into Google Docs to spell-check
    - or use a service like [Grammarly](https://www.grammarly.com){:target="_blank"}.
2. Check that all the links point to the right place. It's easy to miss them when copying!
3. Before scheduling the newsletter&hellip;
    - &hellip;make sure you send a test version of all 4 templates to yourself.
    - &hellip;make sure you perform a test on [litmus.com](https://www.litmus.com){:target="_blank"}.

## Scheduling[#](#scheduling)
1. Once the newsletter is set-up and tested, we need to schedule it.
2. Sendinblue has a daily sending limit, so make sure to spread the campaigns through several days.
3. We're still testing to find the best day and time of week to send newsletters. As a rule of thumb, the best time to send is before 12 AM.
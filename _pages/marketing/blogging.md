---
layout: page
title: "Blogging"
permalink: 'marketing/blogging'
---
<small class="owner">Owner: Marketing</small>


The following page describes how to write and publish blog posts.

- [Writing](#writing)
- [Editing](#editing)
- [Publishing](#publishing)
- [Promoting](#promoting)
{: .toc}

## Writing[#](#writing)
We recommend using Google Docs __with spelling and grammar check enabled__ to write posts.

All blog posts should be written in Hungarian, and English. It's up to the author to choose which language is the base language.

### Approval[#](#writing-approval)
All blog posts need approval __by at least one (marketing) colleague__ before they are ready for publishing. Approval process is as follows:

- write post in base language, get approval
- translate post, get approval
- post is ready for publishing

## Editing[#](#editing)
Editing is easiest to do in code. Some development knowledge is required, though following the below step-by-step guide should allow anyone to edit posts.

### Blog list page[#](#editing-blog-list)
The view for the blog list page can be found at `/resources/views/[en or hu]/blog/index.blade.php`. You need to create a new block for the new blog post.

<div class="thumb">
    <a href="/dist/media/blogging-editing-index.png" target="_blank">
        <img src="/dist/media/blogging-editing-index.png" alt="" />
    </a>
</div>

1. Change the slugs
    - <small>The slug is the human-readable URL of the post. Make sure to include long-tail keywords in the slug.</small>
2. Change the post title
3. Change the post thumbnail
4. Change the post excerpt
    - <small>Should fit in at most 6 lines, usually around 200 characters.</small>

### Blog detail page[#](#editing-blog-detail)
The view for the blog detail page can be found at `/resources/views/[en or hu]/blog/view.blade.php`. This view includes a subview for each post.

These subviews must be named as [slug].blade.php and located in `/resources/views/[en or hu]/blog/posts/`.

<div class="thumb">
    <a href="/dist/media/blogging-editing-detail.png" target="_blank">
        <img src="/dist/media/blogging-editing-detail.png" alt="" />
    </a>
</div>

1. Change the meta title
    - <small>The meta title appears in the tabs of the browser, social media shares and also on the Google Search Results Page (SeRP). Make sure to include long-tail keywords. The meta title differs from the post title (see #5).</small>
2. Change the post meta description
    - <small>The meta description appears in social media shares and the SeRP.</small>
3. Change the post cover image
    - <small>The cover image appears in social media shares.</small>
4. Change the post featured image
    - <small>There are 2 size for the featured image, one for mobile, one for desktop.</small>
5. Change the post title
6. Change the post publishing and modification dates
7. Change the read time
    - <small>You can use a tool like Read-o-meter [&#x2197;](https://niram.org/read/) to estimate read times.</small>
8. Change the video ID (if applicable)
9. Update paragraphs
    - <small>Make sure you use whitespace generously. Space out intro and outro paragraphs from the rest of the text. Also space out groups of paragraphs which describe similar topics.</small>
10. Use headings and images to break up long sections of text
    - <small>Images should always have an `alt` text. Captions should be used most of the time.</small>
11. Change the post author
12. Change the keywords 
    - <small>Use at most 11-12 relevant (short-tail) keywords.</small>
    
### Images[#](#editing-images)
Make sure to be consistent when naming images:
- always use lowercase names, hyphenated
- make sure to include keywords in the names
- cover images
    - should be prefixed with `cover`
    - should be suffixed with language code where necessary
- featured images
    - should be prefixed with `featured`
    - desktop versions should be suffixed with `769w`
    - should be suffixed with language code where necessary
- thumbnails
    - should be prefixed with `thumb`
    - should be suffixed with language code where necessary

## Publishing[#](#publishing)
After getting approval, the blog post should be published on our website. Some development knowledge is required, though following the below step-by-step guide should allow anyone to publish posts.

### Approval[#](#publishing-approval)
All blog posts need approval __by at least one (marketing) colleague__ and code reviewed by the __project lead__ before they are ready for production. Approval process is as follows:

- publish post on staging website [&#x2197;](https://staging.gofurther.digital){:target="_blank"}
- get approval from at least one (marketing) colleague
- create pull request for production website
- get approval from project lead

### Branching[#](#publishing-branching)
Our website uses Gitflow as the continuous deployment strategy, meaning that every push to the `staging` branch is automatically deployed to the staging website, while pushes to the `master` branch need to go through a pull request.

Every blog post should be in it's own feature branch. This branch can then be merged into the `staging` and `master` branches.

## Promoting[#](#promoting)
For promoting in social media (Facebook, LinkedIn, Twitter), please refer to the [social media marketing](/marketing/social-media) page.

### HackerNews[#](#promoting-hackernews)
Paste a link.

### Medium[#](#promoting-medium)
An excerpt of the blog post should be published on our Medium channel, with a link to the full article.

### Quora[#](#promoting-quora)
Find a question for which your article can be an answer. Reply with some short answer and add that more detailed answer can be found in your article (+ link).

### Reddit[#](#promoting-reddit)
Paste a link in thematically related subreddits.

### Tumblr[#](#promoting-tumblr)
Post a link to your article. Remember to add some hashtags.
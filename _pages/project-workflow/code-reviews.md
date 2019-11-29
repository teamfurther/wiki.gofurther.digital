---
layout: page
title: "Code Reviews"
permalink: 'project-workflow/code-reviews'
---
<small class="owner">Owner: Project Lead</small>

Project lead is responsible for weekly code reviews, including final code review before deployment. To help with code reviews, we created a checklist. Use this template [&#x2197;](http://bit.ly/30Z3fLP){:target="_blank"} to do code reviews.

Remember, these are rough guidelines you should adapt to each project.

### Checklist[#](#code-reviews-checklist)
- Did we check for `@TODO` occurences? **If not, do it!**
- Did we run `phpcs` and `phpmd`? **If not, do it!**
- Did we run `phpstan`? **If not, do it!**
- Did we run `phpinsights`? **If not, do it!**
- Is code conforming to [code style](/code-style)? **If not, do it!**
- Did we check all pages for n+1 problems? **If not, do it!**
- Did we clean up code? (orphaned comments, debugging controls, etc.) **If not, do it!**
- Did we do functional testing? **If not, do it!**
- Did we do browser tests? **If not, do it!**
- Did we do stress tests for performance and scalability? **If not, do it!**
- Are class diagrams / data models / API docs up-to-date?
- Did we run page speed tests?
    - [https://gtmetrix.com](https://gtmetrix.com){:target="_blank"}
    - [https://tools.pingdom.com](https://tools.pingdom.com){:target="_blank"}
    - [https://webpagetest.org](https://webpagetest.org){:target="_blank"}
- Do we have proper error handling. Custom pages for *404*, *500*, *503*, *Token Mismatch*
- Did we verify that all HTTP status codes are ok with [https://github.com/spatie/http-status-check](https://github.com/spatie/http-status-check){:target="_blank"}
- Did we scan for mixed content with [https://github.com/spatie/mixed-content-scanner-cli](https://github.com/spatie/mixed-content-scanner-cli){:target="_blank"}
- Do we have Bugsnag set-up for PHP & JS, and integrated into Slack channel? **If not, do it!**
- Did we replace `develop` branch with `staging`? **If not, do it!**
- Is IPS up-to-date?
- Server
    - Does our deployment server use SSL certificates? **If not, set it up!**
    - Does our server redirect *www* to *non-www* and to *https*? **If not, set it up!**
    - Do we have Docker local environment set-up to match server config? **If not, do it!**
    - Do we have CI/CD set-up? **If not, do it!**
    - Do we have separate `production` and `staging` environments set-up? **If not, do it!**
    - Are backups set-up? **If not, set it up!**
- Laravel specific
    - Do we have Laravel Telescope configured? **If not, do it!**
    - Is `artisan scheduler` set-up in crontab?
    - Is `APP_ENV` set to `production`? Is `APP_DEBUG` set to `false`? **If not, do it!**
{: .checklist}

### Resources[#](#code-reviews-resources)
- Code review template [&#x2197;](http://bit.ly/30Z3fLP){:target="_blank"}
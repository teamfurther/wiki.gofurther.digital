---
layout: page
title: "Code Reviews"
permalink: 'coding/code-reviews'
---
<small class="owner">Owner: Project Lead (or Code Reviewer)</small> _Last revision: 12.11.2021_

Project lead is responsible for weekly code reviews, including final code review before deployment. To help with code reviews, we created a checklist. Use this template [&#x2197;](http://bit.ly/30Z3fLP){:target="_blank"} to do code reviews.

Remember, these are rough guidelines you should adapt to each project.

- [Code Quality](#code-quality)
- [DevOps](#devops)
- [Security](#security)
- [Testing](#testing)
- [Technical PM](#technical-pm)
- [User Experience](#ux)
- [Resources](#resources)
{: .toc}

### Code Quality[#](#code-quality)
- Is code conforming to [code style](/coding)? **If not, do it!**
- Did we clean up code? (orphaned comments, debugging controls, etc.) **If not, do it!**
- Did we check for `@TODO` occurences? **If not, do it!**
- Did we run `phpinsights`? **If not, do it!**
- Did we check all pages for n+1 problems? **If not, do it!**
- Does code use modern OOP features (e.g. type hinting)?
- Did we use Laravel Telescope to track slow queries and other issues? **If not, do it!**    
{: .checklist}

### DevOps[#](#devops)
- Does our deployment server use SSL certificates? **If not, set it up!**
- Does our server redirect *www* to *non-www* and to *https*? **If not, set it up!**
- Do we have Docker local environment set-up to match server config? **If not, do it!**
- Do we have CI/CD set-up? **If not, do it!**
- Do we have separate `production` and `staging` environments set-up? **If not, do it!**
- Are backups set-up? **If not, set it up!**
- Is `artisan scheduler` set-up in crontab?    
{: .checklist}

### Security[#](#security)
- Are `/api` routes protected by `auth:api` middleware? **If not, do it!** 
- Is `user` object in localStorage verified against server-side? **If not, do it!**
- Is `APP_ENV` set to `production`? Is `APP_DEBUG` set to `false`? **If not, do it!**    
{: .checklist}

### Testing[#](#testing)
- Did we do functional testing? **If not, do it!**
- Did we do browser tests? **If not, do it!**
- Did we do stress tests for performance and scalability? **If not, do it!**    
{: .checklist}

### Technical PM[#](#technical-pm)
- Do we have Bugsnag set-up for PHP & JS, and integrated into Slack channel? **If not, do it!**
- Do we have a setup.md file? **If not, do it!**
- Did we replace `develop` branch with `staging`? **If not, do it!**
- Is IPS up-to-date?
- Are class diagrams / data models / API docs up-to-date?    
{: .checklist}

### User Experience[#](#ux) {#ux}
- Did we run page speed tests?
    - [https://gtmetrix.com](https://gtmetrix.com){:target="_blank"}
    - [https://tools.pingdom.com](https://tools.pingdom.com){:target="_blank"}
    - [https://webpagetest.org](https://webpagetest.org){:target="_blank"}
- Do we have proper error handling. Custom pages for *404*, *500*, *503*, *Token Mismatch*
- Did we verify that all HTTP status codes are ok with [https://github.com/spatie/http-status-check](https://github.com/spatie/http-status-check){:target="_blank"}
- Did we scan for mixed content with [https://github.com/spatie/mixed-content-scanner-cli](https://github.com/spatie/mixed-content-scanner-cli){:target="_blank"}    
{: .checklist}
    
### Resources[#](#resources)
- Code review template [&#x2197;](http://bit.ly/30Z3fLP){:target="_blank"}
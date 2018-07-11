---
layout: page
title: "Project Set-up"
permalink: 'development-workflow/project-release'
---
When a project moves from development to production, we need to go through numerous steps to get it ready for real world usage. We keep these steps in a checklist:

- Did we check for `@TODO` occurences? **If not, do it!**
- Did we run `phpcs` and `phpmd`? **If not, do it!**
- Did we check all pages for n+1 problems **If not, do it!**
- Did we clean up code? (orphaned comments, debugging controls, etc.) **If not, do it!**
- Did we do functional testing? **If not, do it!**
- Did we do browser tests? **If not, do it!**
- Did we run page speed tests?
    - [https://webpagetest.org](https://webpagetest.org){:target="_blank"}
    - [https://gtmetrix.com](https://gtmetrix.com){:target="_blank"}
    - [https://developers.google.com/speed/pagespeed/insights](https://developers.google.com/speed/pagespeed/insights){:target="_blank"}
- Do we have proper error handling. Custom pages for *404*, *500*, *503*, *Token Mismatch*
- Did we verify that all HTTP status codes are ok with [https://github.com/spatie/http-status-check](https://github.com/spatie/http-status-check){:target="_blank"}
- Did we scan for mixed content with [https://github.com/spatie/mixed-content-scanner-cli](https://github.com/spatie/mixed-content-scanner-cli){:target="_blank"}
- Do we have Bugsnag set-up for PHP & JS, and integrated into Slack channel? **If not, do it!**
- Do we have Google Analytics set-up?
- Did we remove `develop` branch? **If not, remove it!**
- Server
    - Does our deployment server use SSL certificates? **If not, set it up!**
    - Does our server redirect *www* to *non-www* and to *https*? **If not, set it up!**
    - Are backups set-up? **If not, set it up!**
- Laravel specific
    - Is `artisan scheduler` set-up in crontab?
    - Is `APP_ENV` set to `production`? Is `APP_DEBUG` set to `false`? **If not, do it!**
{: .checklist}

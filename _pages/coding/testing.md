---
layout: page
title: "Testing"
permalink: 'coding/testing'
---
<small class="owner">Owner: Development</small> _Last revision: 12.11.2021_ 

- [Unit vs feature tests](#unit-vs-feature)
- [Functional tests](#functional-tests)
{: .toc}

## Unit vs feature tests[#](#unit-vs-feature)
Laravel introduced feature tests as a concept, but under the hood they are actually integration tests. They should be used whenever testing a complete feature. For more simple tests, use unit tests.

E.g.:

A test class for a contact form, with the following assertions should be considered a feature test, since it tests multiple aspect of a contact form (success state, validation, notifications, etc.)

- ```testContactShouldRedirectIfSuccess``` 
- ```testContactShouldReturn422IfInvalidEmailGiven``` 
- ```testContactShouldReturn422IfNoEmailGiven``` 
- ```testContactShouldReturn422IfNoMessageGiven``` 
- ```testContactShouldSendNotificationIfSuccess```

A test class for a registration form which only tests if a user has been created in the database, is considered a unit test.

- ```testRegistrationUserCreatedIfSuccess```

## Functional tests[#](#functional-tests)
Functional test should be considered in addition to unit/feature tests when developing complex flows, such a multi-step registration process or a checkout process. 
---
layout: page
title: "Time Tracking"
permalink: 'life/time-tracking'
---
We use Toggl to track time on all our company-related activities.

- [General rules](#general-rules)
- [Project related tasks](#project-related-tasks)
- [Non-project tasks](#non-project-tasks)
{: .toc}

## General rules[#](#general-rules)

- Always try to start Toggl, whatever you're working on
- Do not to forget adding a description or selecting a project (orphaned entries)
    - as a general rule, all orphaned entries WILL be deleted
    - to prevent adding orphaned entries, try to use your Toggl entries as a reference at stand-up meetings, and correct yesterday's orphans as you spot them
- Make sure you use proper case for adding entries, as Toggl entry grouping is case-sensitive. E.g.: Toggle groups ```Stand-up```, ```stand-up``` and ```stand up``` separately
- If no Toggl project exists for activity or you are not part of project team, ask office manager or project manager to create it/add you.

## Project related tasks[#](#project-related-tasks)

All project related tasks should have a Jira issue number as description and the respective project selected. If no Jira issue exists, ask PM to create it for you, or do it yourself. E.g.:

```
// Description:
VOL-8
// Project:
voltetorve.hu

// Description:
MINI-11
// Project:
MINIPROJECTS
```

Some types of task do not have Jira issues (PM, QA, etc.) or projects do not have a Jira board. In these cases, use one of the following descriptions (make sure you use proper case):

- ```API```
- ```Backend```
- ```Bugfix```
- ```Code review```
- ```DevOps```
- ```Estimates```
- ```Frontend```
- ```PM``` (meetings, admin tasks, planning, retrospective etc.)
- ```Project setup```
- ```QA```
- ```Research```
- ```Specs```
- ```Support```

If a project develops new modules, and entries have to be differentiated by module, a separate Toggl project should be created. E.g.:

```
// Description
QA - CMS
// Project
Corvinus

==>

// Description
QA
// Project
Corvinus CMS
```

## Non-project tasks[#](#non-project-tasks)

Use one of the following descriptions (make sure you use proper case):

- ```1-on-1 meeting```
- ```Account management```
- ```Admin``` (contracts, other administrative tasks)
- ```Emails``` (including phones calls)
- ```Finances```
- ```GTD``` (anything that doesn't fit in other descriptions)
- ```HR``` (posting job adverts, creating tests, filtering candidates, interviews, onboarding)
- ```Learning```
- ```Marketing``` (handling social media, creating content, presentations)
- ```Networking```
- ```PM``` (meetings)
- ```QA``` (for small tasks, when it's more time starting/stopping Toggl for a specific project than the task itself)
- ```Quote```
- ```Research```
- ```Stand-up```
- ```Unassigned```
- ```Workshop``` (dev hours, technical meetings, etc.)

---
layout: page
title: "Project Tracking"
permalink: 'life/project-tracking'
---
We use Jira for issue tracking and agile project management.

- [Structure](#structure)
- [Workflow](#workflow)
{: .toc}

## Structure[#](#structure)

- By default every project should have a Jira project attached with a Kanban board
- By default every development, devops, support, etc. should have a Jira issue
- Issues/user stories in the backlog should have a dedicated space away from the board
- In most cases a board should have the following columns:
    - ```Selected for development / To do``` - issues/user stories on which work can start will be dragged here by PM/PO
    - ```In progress```
    - ```QA```
    - ```Done```
- All issues on the board, should have an assignee
- Priorities should not be set on issues, instead Kanban board should be walked from right to left, and top to bottom (see workflow)

## Workflow[#](#workflow)

### Kanban pull system

Board should be walked from right to left first, and top to bottom second. This means tasks that are furthest to the right should be handled first. If there are more tasks in the rightmost column, items on the top have higher priority.

### Questions on issues

- if you have a question on an issue, leave a comment and re-assign issue to the person you asked the question from;
- if you answer a question, leave a comment and re-assign issue to the person who asked the question.

### QA

- if you finished working on an issue, move the issue to ```QA``` column, and re-assign it to the person responsible for QA;
- if you finished QA, and found issues, leave a comment, move issue back to ```In progress``` column and re-assign it;
- if you finished QA, and found no issues, move issue to ```Done``` column and re-assign to person responsible for deployment.

### Deployment

- whenever deploying issues from ```Done```, responsible should release new version;
- version name should follow Semver scheme. E.g.: ```v2.1.32```.


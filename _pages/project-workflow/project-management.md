---
layout: page
title: "Project Management"
permalink: 'project-workflow/project-management'
---
<small class="owner">Owner: PM</small> _Last revision: 26.06.2020_

During the lifetime of a project, we need to go through numerous steps to ensure our work is efficient, timelines can be met, and product quality assured. This page describes these steps and provides checklists.

- [Kanban Boards](#kanban)
- [Definition of Done](#definition-of-done)
- [Time Tracking](#time-tracking)
- [Checklists](#checklists)
{: .toc}

## Kanban Boards[#](#kanban) {#kanban}

- By default every project should have a Productive project attached with a Backlog and at least a Kanban board
- In most cases the Backlog board should have the following columns:
    - ```Backlog```
    - ```To be estimated```
- For greenfield projects, a Kanban board should have the following columns:
    - ```Selected for development / To do``` - tasks/user stories on which work can start will be dragged here by PM
    - ```In progress```
    - ```QA (internal)```
    - ```QA (external)```
- For support projects, a Kanban board should have the following columns:
    - ```Selected for development / To do``` - tasks/user stories on which work can start will be dragged here by PM
    - ```In progress```
    - ```QA``` - may be separated into ```QA (internal)``` & ```QA (external)```
    - ```Ready for deployment```
- All tasks on the boards, should have an assignee (except in when in ```Backlog``` column)

### Kanban Pull System[#](#kanban-pull-system)

Board should be walked from right to left first, and top to bottom second. This means tasks that are furthest to the right should be handled first. If there are more tasks in the rightmost column, items on the top have higher priority.

### Questions on Tasks[#](#kanban-questions)

- if you have a question on an task, leave a comment and re-assign task to the person you asked the question from;
- if you answer a question, leave a comment and re-assign task to the person who asked the question.

### QA[#](#kanban-qa)

- if you finished working on an task, move the task to ```QA``` column, and re-assign it to the person responsible for QA;
- if you finished QA, and found issues, leave a comment, move task back to ```In progress``` column and re-assign it;
- if you finished QA, and found no issues, move task to ```Ready for deployment``` column and re-assign to person responsible for deployment.

### Deployment[#](#kanban-deployment)

- whenever deploying tasks from ```Ready for deployment```, responsible should mark task as completed.
- if there is no ```Ready for deployment``` column, tasks can be marked as completed after client approval from ```QA (external)```. 

## Definition of Done[#](#definition-of-done)

A task is considered done, when:
- changes are pushed to version control (```staging``` branch)
- changes are tested on ```staging``` server

## Time Tracking[#](#time-tracking)
We use Productive's built in timer to track time on all our company-related activities.

### General Rules[#](#time-tracking-general-rules)

- Always try to start the timer, whatever you're working on
- If no project, budget or service exists for the activity you are doing or you are not part of the project team, ask the project manager to create it/add you

### Project Related Tasks[#](#time-tracking-project-related-tasks)

All project related tasks should have a task selected on top of the project and service. If no task exists, ask the project manager to create it for you, or do it yourself. E.g.:

### Non-project tasks[#](#time-tracking-non-project-tasks)

For non-project tasks, use the ```Internal``` project.

## Checklists[#](#checklists)

### Greenfield Projects[#](#checklists-greenfield-projects)
**Before kick-off**
- <small class="owner">BA</small> Did we have a kick-off meeting (BA, PM, project lead)? **If not, do it!**
- <small class="owner">BA</small> Do we have a backlog of user stories defined?
- <small class="owner">BA</small> Do we have wireframes / high-definition prototypes?
- <small class="owner">Project lead</small> Do we have a risk assessment matrix?
- <small class="owner">PM</small> Do we have project roles established? **If not, do it!**
    - PM
    - Project lead
    - Sitebuild
    - Frontend
    - Backend
    - QA
    - Code reviewer
    - DevOps
- <small class="owner">Project lead</small> Did we have an onboarding meeting with development team?
- <small class="owner">DevOps</small> Do we have a server with CI/CD set-up? **If not, do it!**
- <small class="owner">PM</small> Do we have a Productive project set-up? **If not, do it!**
    - Backlog board
    - Kanban boards
    - Tasks
    - Budgets
    - Documentation (as notes)
- cDo we have a Slack channel set-up?
- <small class="owner">Project lead</small> Do we have an IPS set-up? **If not, do it!**
{: .checklist}

**During project**
- <small class="owner">PM</small> Is user story backlog up-to-date (backlog grooming)?
- <small class="owner">PM</small> Do we have sprint planning for next 2 sprints?
- <small class="owner">PM</small> Do we have all the necessary answers, information, materials to complete next sprint? **If not, do it!**
- <small class="owner">PM</small> Did we schedule a sprint demo? **If not, do it!**
- <small class="owner">QA</small> Are all tasks tested (UAT) and ready for sprint demo? **If not, do it!**
- <small class="owner">PM</small> Did we include client bug reports in the next sprint?
- <small class="owner">PM</small> Did we include client feedback and change requests in backlog?
{: .checklist}

**Change requests**
- <small class="owner">PM</small> Did we create task in backlog? <small>(mark with CR flag)</small>
- <small class="owner">PM</small> Did we communicate changes in deadline / budget? 
{: .checklist}

<small class="note">Communicate CR deadline changes / value even if we offer it for free / at a discounted price!</small>

**Closing project**
- <small class="owner">QA</small> Did we perform final end-to-end user-acceptance testing (UAT)?
- <small class="owner">PM</small> Did we schedule a retrospective meeting?
- <small class="owner">PM</small> Do we have a delivery certificate? **If not, do it!** <small>(this marks the start of warranty period)</small>
- <small class="owner">PM</small> Do we have any outstanding billable hours? **If yes, invoice it!**
{: .checklist}

### Support projects[#](#checklists-support-projects)
**Before kick-off**
- <small class="owner">BA</small> Do we have the takeover documentation?

**During project**
- <small class="owner">Project lead</small> Is the IPS up-to-date?
- <small class="owner">PM</small> Do all tasks have deadlines set?
{: .checklist}

### Client calls, meetings[#](#checklists-meetings)
- Did we take meeting notes?
- Did we get approval on meeting notes?
- Did we create tasks based on meeting notes? Assign them a deadline!
{: .checklist}

### QA[#](#checklists-qa)
- Each user story / task should be individually tested by developer 1st
- Each user story should be end-to-end tested by project lead 2nd
- Each user story / task should be individually tested by project manager 3rd
{: .checklist}
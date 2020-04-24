---
layout: page
title: "Project Management"
permalink: 'project-workflow/project-management'
---
<small class="owner">Owner: PM</small>

During the lifetime of a project, we need to go through numerous steps to ensure our work is efficient, timelines can be met, and product quality assured. This page describes these steps and provides checklists.

- [Kanban Boards](#kanban)
- [Time Tracking](#time-tracking)
- [Checklists](#checklists)
{: .toc}

## Kanban Boards[#](#kanban)

- By default every project should have a Productive project attached with a Backlog and a Kanban board
- In most cases the Backlog board should have the following columns:
    - ```Backlog```
    - ```To be estimated```
- In most cases the Kanban board should have the following columns:
    - ```Selected for development / To do``` - tasks/user stories on which work can start will be dragged here by PM
    - ```In progress```
    - ```QA```
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

- whenever deploying tasks from ```Ready for deployment```, responsible should mark task as completed

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
- Do we have a backlog of user stories?
- Do we have sprint planning for first sprint?
- Do we have a Risk Assessment Matrix? **If not, create one!**
- Do we have project roles established (PM, project lead, code reviewer)? **If not, do it!**
- Do we have a Productive project set-up?
- Do we have a Slack channel set-up?
- Do we have a GIT repo set-up? **If not, do it!**
- Do we have a server with CI/CD set-up? **If not, do it!**
- Do we have an IPS set-up? **If not, do it!**
- Do we have all project documents uploaded to notes in Productive?
{: .checklist}

**During project**
- Is user story backlog up-to-date?
- Do we have sprint planning for next sprint?
- Is project repo up-to-date?
{: .checklist}

**Change requests**
- Did we create task? <small>(mark with CR flag)</small>
- Did we communicate changes in deadline / budget?

<small class="note">Communicate CR deadline changes / value even if we offer it for free / at a discounted price!</small> 
{: .checklist}

**Closing project**
- Do we have a delivery certificate? **If not, do it!** <small>(this marks the start of warranty period)</small>
- Do we have any outstanding billable hours? **If yes, invoice it!**
{: .checklist}

### Support projects[#](#checklists-support-projects)
- Is the IPS up-to-date?
- Do all tasks have deadlines set?
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
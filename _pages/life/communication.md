---
layout: page
title: "Communication"
permalink: 'life/communication'
---
All communication within the C4studio team is done via Slack. Skype or other chat services might be used when communicating with clients or contractors, but migrating them over to Slack is encouraged.

- [Public channels](#public-channels)
- [Project Channels](#project-channels)
- [Third-party Integrations](#third-party)
{: .toc}

## Public channels[#](#public-channels)

```#general``` - use for company-wide announcements and work-based matters only.

<small class="note">All Slack members are part of this channel, including some clients, so take care what you post.</small>

```#watercooler``` - use for non-work banter and water cooler conversations.

As a general rule, if you don't know if you should post to ```#general``` or ```#watercooler```, just use ```#watercooler```.

## Project Channels[#](#project-channels)

- By default all projects, should have a private channel
- All team members should be part of channel
- Old team members should be removed from channel
- Project questions specifically addressed to one team member, should be set via DM instead

## Third-party Integrations[#](#third-party) {#third-party}

### Jira
All Jira projects should be connected with project's Slack channel.

To avoid message noise, connection should be configured to only send notification when an assignee has been updated. To do this, follow these steps:
1. Type ```/jira``` in Slack channel
1. Click Manage subscription
1. Click Edit next to project name
1. Uncheck all boxes except "Assignee updated"

### Bugsnag
All Bugsnag projects should be connected with project's Slack channel. Notifications should be sent when:

- A new error is received
- An error occurs frequently (10, 100, 1000, 2000... etc times)
- An error is automatically reopened
- A project error rate increases significantly
- When project environment is ```staging``` or ```production```.

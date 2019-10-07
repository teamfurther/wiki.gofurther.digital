---
layout: page
title: "Version Control"
permalink: 'project-workflow/version-control'
---
<small class="owner">Owner: Development</small>

All our projects use Git, mostly with a repository hosted on Bitbucket.

- [Repo Naming Conventions](#repo-naming-conventions)
- [Branches](#branches)
- [Commits](#commits)
{: .toc}

## Repo Naming Conventions[#](#repo-naming-conventions)

If the repo contains the source code of a site its name should be the main naked domain name of that site. It should be lowercased.

- Bad: `https://www.gofurther.digital`, `www.gofurther.digital`, `goFurther.digital`
- Good: `gofurther.digital`

Sites that are hosted on a subdomain may use that subdomain in their name.

- Bad: `gofurther.digital-wiki`
- Good: `wiki.gofurther.digital`

If the repo concerns something else, for example a package, its name should be kebab-cased.

- Bad: `LaravelBackup`, `Chronos`
- Good: `laravel-backup`, `chronos`

## Branches[#](#branches)

If you're going to remember one thing in this guide, remember this: Once a project has gone live, the master branch must always be stable. It should be safe to deploy the master branch to production at all times. All branches are assumed to be active; stale branches should get cleaned up accordingly.

### Projects in initial development[#](#projects-in-initial-development)

Projects that aren't live yet have at least two branches: `master` and `develop`. We do it this way to keep the commit log clean for the initial release.

Avoid committing directly on the `master` branch, always commit through `develop`. Feature branches are optional, if you'd like to create a feature branch, make sure it's branched from `develop`, not `master`.


### Live Projects[#](#live-projects)
Once a project goes live, the `develop` branch gets deleted. All future commits to `master` must be added through a feature branch. In most cases, it's preferred to squash your commits on merge.

On live projects with a staging environment, we should use a `staging` branch together with `master`. Feature branches should always branched from `master`, NEVER from `staging`. Feature branches should be first merged in to `staging`. After client approval, they should be merged back into `master` as well.

If you want to deploy a feature branch to `master`, use `git merge <branch> --squash`


### Branch Naming[#](#branch-naming)
There's no strict ruling on feature branch names, just make sure it's clear enough to know what they're for. 

Reserved branches may only contain lowercase letters and hyphens: `master`, `develop`, `staging`

Featured branches should be capitalised, and only contain lowercase letters and hyphens after first letter.

- Bad: `feature-oauth-signup`, `Feature/mailchimp`, `Random-things`
- Good: `Feature-oauth-signup`, `Feature-mailchimp`, `Fix-deliverycosts` or `Updates-june-2018`


### Cleaning up branches[#](#cleaning-up-branches)
Merged remote branches should be deleted regularly with `git push origin :<branch>`

After a while, you'll end up with a few stale branches in your local repository. Branches that don't exist upstream can be cleaned up with `git remote prune origin`. If you want to ensure you're not about to delete something important, add a `--dry-run` flag.


## Commits[#](#commits)
There's not strict ruling on commits in projects in initial development, however, descriptive commit messages are recommended. After a project has gone live, descriptive commit messages are required. Always use present tense in commit messages.

- Non-descriptive: `wip`, `commit`, `a lot`, `solid`
- Descriptive: `Update deps`, `Fix vat calculation in delivery costs`

Ideally, prefer granular commits.

- Acceptable: `Cart fixes`
- Better: `Fix add to cart button`, `Fix cart count on home`

---
name: Person's Name
role: Job Title
pronouns: unspecified

email: optional-email@nhm.ac.uk
image: /assets/people/optional-avatar.jpg
links:
  - name: Repository
    url: https://github.com/NaturalHistoryMuseum
  - name: ORCID
    url: https://orcid.org/0000-0000-0000-0000

order:
  'team:team-slug': 0
tags:
  - group:something

projects:
  - project-slug
  - another-project-slug
posts:
  - blog-post-slug
---

Here is an optional bio for this person.

# Metadata

## Required
- name: the person's name or display name
- role: their job title
- pronouns: e.g. he/him, they/them; defaults to unspecified

## Optional extras
- email: a contact email
- image: an icon or avatar
- links: urls to add to this person's profile

## Grouping and metadata
- order: if this person should be displayed in a particular order within another page, e.g. because they're the team lead and should be first, put something here (otherwise this can be left out)
- tags: optionally add this person to arbitrary groups (i.e. not teams, just groups of people) by adding tags like 'group:exec'

## Featured sections
- projects: featured projects for this person; a list of all associated projects will be extracted from the project files themselves, but if you want to highlight any particular projects you can do so by listing them here
- posts: featured posts for this person; like projects above, but for blog posts

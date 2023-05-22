---
title: Project Name
description: A short description
image: /assets/projects/template-project/cover.png
imageAlt: description of cover image
email: someone@email.com

website: https://nhm.ac.uk
leaders:
  - person-slug-one
people:
  - person-slug-one
  - person-slug-two
otherSites:
  - name: Repository
    url: https://github.com/NaturalHistoryMuseum
publications:
  - title: Publication Name
    year: 2000
    url: https://doi.org/1234

featured: false
teams:
  - team-slug-one
  - team-slug-two
tags:
  - one
  - per
  - line
---

Longer description here.


# Metadata

## Required
- title: the name of the project
- description: a short (one sentence) description of the project
- image: the filepath to a representative image (e.g. a screenshot)
- imageAlt: alt text for the representative image (describe what's in it)
- email: a contact email for the project

## Optional extras
- website: the primary website for the project; leave blank if none
- lead: a list of the project leaders; probably only one, but you can have multiple if there are joint leaders
- people: a list of all people associated with this project
- otherSites: a dictionary of other websites associated with the project, e.g. code repos (names and links); leave blank if none
- publications: a dictionary of publications associated with the project (names, years, and links, preferably DOI links); leave blank if none

## Grouping and metadata
- featured: true/false; is this a featured project that should be displayed prominently
- teams: a list of teams this project is associated with (this will usually be a list of one)
- tags: a list of tags

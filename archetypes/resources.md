---
# FILE NAMING: author-year-short-title.md (first author surname, publication year, short title).
# Example: content/resources/nguyen-2022-national-teacher-shortage.md

# title of the publication
title: ""

# Publication Date: YYYY-MM-DD, e.g. 2022-08-01.
# This field controls chronological sorting and year grouping, not the visible label.
date: {{ .Date | time.Format "2006-01-02" }}

# DISPLAY DATE: English month and four-digit year, e.g. "August 2022".
# This will be displayed date, year-month only valaue is fine.
publication_date: ""
type: resources

# URL slug: short lowercase words separated by hyphens, without .md.
# Example: "national-teacher-shortage" gives /resources/national-teacher-shortage/.
slug: ""
resource_authors: ""

# Multi-value YAML lists; Topic values: Recruitment, Retention, Effectiveness.
# Example: topic: ["Recruitment", "Retention"]
topic: []
# Subtopic options are collected automatically from published resource pages.
sub_topic: []
education_level: []
# Show only available access options. Never use a restricted publisher PDF here.
brief_url: ""
working_paper_url: ""
published_paper_url: ""
paper_id: ""
brief_year: ""
brief_number: ""
acknowledgment: ""
# APA 7: authors, year, sentence-case title, italic journal and volume, issue, pages, DOI URL.
citation: >-

# LIST INTRODUCTION: copy the original paper abstract into description.
# Preserve the source wording; do not substitute Why It Matters or an AI summary.
# Website detail order: title, Study authors, ERRE Research Brief | YYYY-NNN.
# No institutional masthead, ABOUT THE ORIGINAL STUDY, divider lines, or logos.
# The detail page uses the four brief sections below.
description: |-

# DETAIL PAGE: one paragraph explaining the study's relevance.
why_it_matters: >-

data_and_sample: >-

# Add 3-5 findings as YAML list items, each starting with a hyphen.
# Example: - "Greater rurality is associated with more district departures."
key_findings: []
# Add 3 policy implications; distinguish supported actions from untested proposals.
# Markdown emphasis is supported, e.g. - "**Evaluate locally:** Test effects before scaling."
policy_implications: []
draft: true
---

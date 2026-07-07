---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2026-01-05
type: landing

sections:
  # Developer Hero - Gradient background with name, role, social, and CTAs
  - block: dev-hero
    id: hero
    content:
      username: me
      greeting: "Welcome"
      show_status: true
      show_scroll_indicator: true
      typewriter:
        enable: true
        prefix: "We provide"
        strings:
          - "rigorous analysis of teacher evaluation systems across Missouri."
          - "timely research on critical teacher labor market issues."
          - "state and district leaders with evidence-based policy focus areas and solutions."
          - "a statewide educator survey instrument to measure teacher working conditions and intentions."
          - "accessible reports and briefs that translate complex educator data into actionable insights."
        type_speed: 70
        delete_speed: 40
        pause_time: 2500
      cta_buttons:
        - text: About 
          url: "#about"
          icon: arrow-down
        - text: Contact Us
          url: "#contact"
          icon: envelope
    design:
      style: centered
      avatar_shape: square
      avatar_size: lg
      animations: true
      background:
        color:
          light: "#fafafa"
          dark: "#0a0a0f"
      spacing:
        padding: ["6rem", "0", "4rem", "0"]


# About
  - block: markdown
    id: about
    content:
      title: What the ERRE Center Does
      text: |-
        The Educator Recruitment, Retention, and Effectiveness (ERRE) Center, supported by the [Walton Family Foundation](https://www.waltonfamilyfoundation.org/) and the [University of Missouri](https://missouri.edu/), conducts research on the educator workforce to inform state and district policy. Working in partnership with [Missouri Department of Elementary and Secondary Education (DESE)](https://dese.mo.gov/) and the [Department of Higher Education and Workforce Development (DHEWD)](https://dhewd.mo.gov/), the ERRE Center collects and analyzes educator data, studies educator labor market dynamics, and develops tools to assess teacher working conditions.

        The Center's work spans three main areas: examining teacher evaluation systems across districts, researching teacher shortages and mobility, and designing a statewide educator survey to capture teacher working conditions and retention intentions. Findings are translated into reports, briefs, and policy recommendations aimed at improving teacher recruitment, retention, and effectiveness across Missouri and the nation.
    design:
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

    
  # Team Showcase - People organized by role
  - block: team-showcase
    id: team
    content:
      title: Meet Our Team
      subtitle: World-class researchers advancing science
      text: Our diverse team brings together expertise from multiple disciplines.
      user_groups:
        - Leadership
        - Researchers
        - Collaborators
      sort_by: weight
      sort_ascending: false
    design:
      show_role: true
      show_organizations: true
      show_interests: true
      max_interests: 3   # set 0 to hide interests even if provided
      align: center      # or "left" to align header + CTA left
      max_columns: 4     # 2, 3, or 4
      show_social: true
      show_empty_groups: false # show a placeholder when a group has no members
      # Section background color (CSS class)
      css_class: "bg-gray-50 dark:bg-gray-900"

    
  # Filterable Portfolio - Alpine.js powered project filtering
  - block: portfolio
    id: reports
    content:
      title: "Recent Reports"
      subtitle: "Recent ERRE reports."
      count: 0
      filters:
        folders:
          - projects
      buttons:
        - name: All
          tag: '*'
      default_button_index: 0
      # Archive link auto-shown if more projects exist than 'count' above
      # archive:
      #   enable: false  # Set to false to explicitly hide
      #   text: "Browse All"  # Customize text
      #   link: "/work/"  # Custom URL
    design:
      columns: 3
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]
  
  
      
  # Recent Blog Posts
  - block: collection
    id: briefs
    content:
      title: Recent Posts
      subtitle: 'Thoughts on web development, tech, and more'
      text: ''
      filters:
        folders:
          - blog
        exclude_featured: false
      count: 3
      order: desc
    design:
      view: card
      columns: 3
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]
  
  # Contact Section
  - block: contact-info
    id: contact
    content:
      title: Get In Touch
      subtitle: "Let's build something amazing together"
      text: |-
        We are always interested in hearing about new projects and opportunities.
      email: tuan.nguyen@missouri.edu
      autolink: true
    design:
      columns: '1'
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]
---

---
# Metadata
meta_title: "Expense Management | Michelle Taylor"
meta_description: "Capital One commercial card expense management case study. Automating weeks of manual work for corporate card admins."

# Hero
hero_logo_src: "/images/logos/capitalonelogo.png"
hero_logo_alt: "Capital One"
hero_title: "Expense Management"
hero_description: "Automating weeks of manual work for corporate card admins by designing a direct route for cardholders to attach expense information to transactions."
hero_image_src: "/images/expense-management/CapitalOneHero.png"
hero_image_alt: "Capital One Expense Management product screens"

# Overview
overview_label: "Overview"
overview_title: "Commercial Card Platform"
overview_description: "Capital One's Commercial Card platform serves corporate card administrators who manage transactions, credit limits, and expenses across their organizations. Admins are responsible for ensuring compliance, tracking spend, and reconciling expenses for every cardholder in their program."
overview_body: "The platform spans both mobile and web experiences, giving admins and cardholders tools to manage the full lifecycle of a commercial card transaction."
overview_role_title: "My Role"
overview_role_items:
  - icon: "UsersFour"
    text: "Led design across mobile and web product teams"
  - icon: "MagnifyingGlass"
    text: "Conducted in-person client research and onboarding sessions"
  - icon: "Lightbulb"
    text: "Created wireframes, prototypes, and production-ready UI"

# Problem
problem_label: "The Problem"
problem_title: "Manual Processes That Cost Everyone Time"
problem_quote: "It's a bit like being everyone's mom."
problem_quote_attribution: "Corporate Card Administrator, Pilot Program Participant"
problem_description_1: "Corporate card admins were burdened by manual, time-consuming processes to collect receipts, assign general ledger codes, and reconcile expenses. Many relied on expensive third-party integrations or, worse, manual spreadsheets and email chains to get the job done."
problem_description_2: "Admins constantly struggled to get timely receipts and GL codes from cardholders, chasing down individuals one by one and spending weeks every month on tasks that should have been automated."
problem_metrics:
  - value: "Weeks"
    label: "of admin time spent on manual reconciliation each month"
  - value: "$$$$"
    label: "spent on third-party expense integrations"
  - value: "Low"
    label: "tax compliance due to missing receipts and codes"

# Pilot Program
pilot_label: "Research"
pilot_title: "Pilot Program"
pilot_description_1: "We launched a pilot program with 5 middle-market clients, each managing between 20 and 50 cardholders. This gave us a focused yet diverse set of business contexts to understand how expense management varied across organizations."
pilot_description_1_bold: "5 middle-market clients"
pilot_description_2: "The program included in-person onboarding sessions and research visits, where we sat with admins and cardholders to observe their actual workflows, pain points, and workarounds."
pilot_metrics:
  - value: "5"
    label: "pilot clients"
  - value: "20-50"
    label: "cardholders per client"
pilot_image_src: "/images/expense-management/research-visit.jpg"
pilot_image_alt: "In-person research visit with pilot program client"

# Insights
insights_label: "Insights"
insights_title: "Research Findings"
insights_description: "Through our pilot research sessions, four core themes emerged that shaped the product direction."
insights_cards:
  - icon: "ListChecks"
    title: "GL and Expense Codes"
    description: "Every client had a unique, configurable coding system for categorizing expenses. Some used general ledger codes, others used custom expense categories, and many used both. The platform needed to support flexible, client-defined coding structures."
  - icon: "Receipt"
    title: "Expense Details"
    description: "Admins needed quick access to the essential details of every transaction: the receipt image, amount, vendor name, and relevant dates. Speed of review was critical, especially for programs with high transaction volume."
  - icon: "ClockCounterClockwise"
    title: "Pending Transaction Data"
    description: "Matching pending transactions to posted transactions was a persistent challenge. Admins needed visibility into pending data to start the expense process early, rather than waiting days for transactions to fully post."
  - icon: "FileText"
    title: "Expense Reports"
    description: "The format of expense reports mattered less than the reliability and completeness of the data within them. Admins cared most about consistent, accurate delivery of expense data to their accounting systems, regardless of how it was presented."

# Solution 1
solution1_label: "Solution #1"
solution1_title: "Configurable Custom Fields"
solution1_description: "We designed a configurable field system that allowed admins to define up to 4 custom fields per transaction. Each field could be set as a select list with predefined options or a free-form text input, giving organizations the flexibility to match their existing expense coding structures."
solution1_description_highlights:
  - "select list"
  - "free-form text input"
solution1_how_it_works_title: "How It Works"
solution1_how_it_works_icon: "Sliders"
solution1_steps:
  - label: "Step 1"
    text: "Admins create custom fields and define whether each accepts free-form text or a curated list of values."
  - label: "Step 2"
    text: "For select lists, admins configure expense or GL codes that cardholders can choose from when tagging transactions."
  - label: "Step 3"
    text: "Cardholders see only the fields relevant to their organization, reducing confusion and ensuring data consistency."
solution1_images:
  - src: "/images/expense-management/CreateField.png"
    alt: "Create custom field interface"
    width: 1440
    height: 810
  - src: "/images/expense-management/CreateCustomField-TextInputType.png"
    alt: "Custom field text input type configuration"
    width: 720
    height: 480
  - src: "/images/expense-management/ExpenseCategory-ManageCodes.png"
    alt: "Expense category and GL code management"
    width: 720
    height: 480

# Solution 2
solution2_label: "Solution #2"
solution2_title: "Transaction Details Redesign"
solution2_description: "The transaction detail view was completely redesigned to surface the information admins and cardholders needed most. The new layout prioritizes receipt display, vendor and amount comparison between pending and posted states, and a flexible structure that adapts to different transaction types."
solution2_improvements_title: "Key Improvements"
solution2_improvements_icon: "Layout"
solution2_improvements:
  - icon: "Receipt"
    title: "Receipt Display"
    description: "Prominent receipt image with quick-attach functionality"
  - icon: "ClockCounterClockwise"
    title: "Data Comparison"
    description: "Side-by-side vendor, amount, and date for pending vs. posted"
  - icon: "Sliders"
    title: "Flexible Layout"
    description: "Adapts to transaction type and available data"
solution2_before_label: "Before"
solution2_before_image_src: "/images/expense-management/OldTransactionDetail.png"
solution2_before_image_alt: "Previous transaction detail design"
solution2_after_label: "After"
solution2_after_image_src: "/images/expense-management/ExpenseDetail.png"
solution2_after_image_alt: "Redesigned expense detail view"
solution2_detail_images:
  - label: "Pending Transaction State"
    src: "/images/expense-management/TransactionHilton-PostedNoData.png"
    alt: "Transaction detail showing pending state with limited data"
  - label: "Receipt Attachment"
    src: "/images/expense-management/AddReceipt.png"
    alt: "Add receipt to transaction flow"

# Outcome
outcome_label: "Outcome"
outcome_title: "Impact"
outcome_description: "The expense management features launched with all 5 pilot clients, giving admins and cardholders a direct, in-platform path to manage expense data without relying on third-party tools or manual processes."
outcome_metrics:
  - value: "Weeks"
    label: "cut from monthly admin reconciliation work"
  - value: "Increased"
    label: "tax compliance through receipt and code capture"
  - value: "5 Clients"
    label: "launched in pilot program with positive feedback"
outcome_image_src: "/images/expense-management/Home.png"
outcome_image_alt: "Expense management home screen"

# Footer CTA
footerCtaLabel: "Thank you for reading"
footerCtaTitle: "Want to see more of my work?"
footerCtaButtonText: "Back to Portfolio"
footerAboutText: "Learn more about my background and experience"
footerAboutButtonText: "Professional History"
footerAboutHref: "/about"
footerCtaButtonHref: "/"
nextProjectHref: "/roamswild"
nextProjectTitle: "Next Project"
nextProjectImage: "/images/roamswild/mockup.png"
nextProjectImageAlt: "RoamsWild app mockup"
nextProjectDescription: "An AI-assisted exploration tool for finding better campsites, routes, and light"
nextProjectLinkText: "View Project"

# Navigation
back_link_text: "Back to Work"
back_link_href: "/"
bottom_link_text: "Back to All Work"
bottom_link_href: "/"
---

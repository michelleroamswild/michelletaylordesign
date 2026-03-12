---
# Metadata
meta_title: "Expense Management | Michelle Taylor"
meta_description: "Capital One commercial card expense management case study. Automating weeks of manual work for corporate card admins and simplifying the cardholder expense process."

# Hero
hero_logo_src: "/images/logos/capitalonelogo.png"
hero_logo_alt: "Capital One"
hero_title: "Expense Management"
hero_highlight: "Expense Management"
hero_description: "Automating weeks of manual work for corporate card admins and simplifying card users' expense process"
hero_image_src: "/images/expense-management/CapitalOneHero.png"
hero_image_alt: "Capital One Expense Management product screens"

# Overview
overview_label: "Overview"
overview_title: "Commercial Card Platform"
overview_description: "Capital One Commercial Card Platform allows card program administrators to manage their corporate card transactions, credit limit, and expenses. Cardholders have a mobile experience which allows them to view transactions, receive notifications, and lock their card in case of fraudulent charges."
overview_role_title: "My Role"
overview_role_description: "I was the Lead Designer partnering with two product managers and tech leads on the respective mobile and web teams for Commercial Card Plastics. I led in-person and remote research sessions with select clients, completed wireframes and UI/UX design. I collaborated with tech teams on grooming stories for development, and reviewed in-progress work through to feature release."
overview_role_items:
  - icon: "UsersFour"
    text: "Led design across mobile and web product teams"
  - icon: "MagnifyingGlass"
    text: "Conducted in-person client research and onboarding sessions"
  - icon: "Lightbulb"
    text: "Created wireframes, prototypes, and production-ready UI"
  - icon: "Code"
    text: "Collaborated with engineering on story grooming through release"

# Problem
problem_label: "The Problem"
problem_title: "Manual Processes That Cost Everyone Time"
problem_quote: "It's a bit like being everyone's mom."
problem_quote_attribution: "Corporate Card Program Administrator"
problem_description_1: "Companies with corporate card programs almost always need to collect expense metadata from their cardholders for tax purposes. This is either done through a time-consuming manual process or an expensive third-party platform that may or may not integrate with their card."
problem_description_2: "Cardholders have a hard time collecting and keeping track of their receipts, and in turn admins have a hard time getting receipts and GL codes from their cardholders in a timely manner. This means much of the admin's time is spent hunting down cardholders for their receipts and expense reports."

# Pilot Program
pilot_label: "Our Goal"
pilot_title: "Expense Management Pilot Program"
pilot_description_1: "We had a limited feature set that we knew wouldn't cut it for a live product, but could get us in front of select clients to validate our concepts and gather additional insights. We partnered with **5 middle-market clients** to better understand their current expense management and reconciliation processes."
pilot_steps:
  - "Partnering with Sales and Relationship Managers, identified 5 middle-market clients with 20–50 cardholders to pilot existing features"
  - "Scheduled in-person onboarding and research visits with 4 clients to understand their current processes"
  - "Designed and developed updates to fulfill MVP requirements identified during visits"
  - "Released and tested feature updates with pilot client admins and cardholders"
pilot_image_src: "/images/expense-management/research-visit.jpg"
pilot_image_alt: "An Admin manually reconciling a cardholders transactions with their expense report"

# Supporting Research
research_label: "Supporting Research"
research_title: "Validating the Opportunity"
research_proxy_title: "Proxy Research"
research_proxy_description: "Empathy interviews with non-Capital One clients confirmed that card program administrators would be highly interested in an expense management feature set offered directly by their corporate card provider."
research_market_title: "Market Research"
research_market_description: "A third-party review of banks revealed that no player had successfully combined account management with expense management, showing a significant market opportunity."
research_market_image_src: "/images/expense-management/MarketResearch-CompReview.png"
research_market_image_alt: "Competitive review of expense management solutions"
research_segment_title: "Client Segment"
research_segment_description: "This research, combined with past empathy interviews, helped us narrow our target segment to middle-market clients with a mostly manual expense management process."

# Research Photos
research_photos:
  - src: "/images/expense-management/research-admin-reconciling.jpg"
    alt: "An admin manually reconciling a cardholder's transactions with their expense report"
    caption: "An Admin manually reconciling a cardholders transactions with their expense report"
  - src: "/images/expense-management/research-expense-reports.jpg"
    alt: "One billing cycle worth of cardholder expense reports"
    caption: "One billing cycle worth of cardholder expense reports"

# Key Insights
insights_label: "Key Insights"
insights_title: "What We Learned"
insights_description: "Through our pilot research sessions, four core themes emerged that shaped the entire product direction."
insights_cards:
  - number: "1"
    icon: "ListChecks"
    title: "GL and Expense Codes"
    description: "Every client had a unique coding system. Some used GL codes, others custom expense categories, and many used both. Codes didn't change often, but new ones got added frequently — especially across different industries."
  - number: "2"
    icon: "Receipt"
    title: "Expense Details"
    description: "Admins needed to quickly see the receipt, amount, and vendor name to confirm a valid charge. They also needed to confirm the date the charge was made (as opposed to posted) on a valid business day."
  - number: "3"
    icon: "ClockCounterClockwise"
    title: "Pending Transaction Data"
    description: "If we were unable to match a pending transaction to a posted one, there was no way to move expense data over. This was a big problem for restaurant and hotel charges where the amount often changed."
  - number: "4"
    icon: "FileText"
    title: "Expense Reports"
    description: "Admins didn't care if expenses were sent in a report — as long as they got the information. Cardholders didn't want to remember to submit a report. They wanted to add details once and be done."

# Solution 1 - GL and Expense Codes
solution1_label: "Solution #1"
solution1_title: "Configurable Custom Fields"
solution1_problem: "Expense codes differed across clients in terms of labeling, structure, and type. Some clients had hard-to-remember coding rules. One client had cardholders hand-write their codes onto a printout of their transactions."
solution1_insights:
  - "Labels need to be configurable to have a name that makes sense to their cardholders"
  - "Generally all codes fit within two categories — a set list of numeric codes with a text label, or a free-form entry for notes"
  - "Codes don't change very often, but new ones get added frequently, especially depending on the industry"
solution1_solution: "We designed and tested a configurable field system with our pilot clients. Clients loved the ease of being able to change code labels without contacting us or a sales representative. We added Custom Field functionality to the settings page within their account."
solution1_details:
  - "A simple creation process in a tray experience allowed admins to create a field name, choose a type, and add their codes"
  - "We determined that clients within our target market only needed up to four fields. Admins could change the field name, deactivate the field, or manage the codes"
  - "For lists of codes, each input has a numeric value and a human-friendly term that appears to the cardholder in the select list on their expense detail pages"
solution1_images:
  - src: "/images/expense-management/CreateField.png"
    alt: "Create custom field interface"
  - src: "/images/expense-management/AddCodes.png"
    alt: "Add expense codes panel"
  - src: "/images/expense-management/CustomFields-ThreeActiveCodes.png"
    alt: "Three active custom fields configured by admin"
  - src: "/images/expense-management/ExpenseCategory-ManageCodes.png"
    alt: "Expense category and GL code management"
solution1_mobile_image_src: "/images/expense-management/customfieldshighlight.png"
solution1_mobile_image_alt: "Custom Fields as they appear to the cardholder within the mobile experience"
solution1_mobile_caption: "Custom Fields as they appear to the cardholder within the mobile experience"

# Solution 2 - Expense Details
solution2_label: "Solution #2"
solution2_title: "Transaction Details Redesign"
solution2_problem: "Our existing expense details tray and link to download receipts was inefficient for admins. There was too much work involved in viewing expense data, and having to download receipts just to view them was not scalable. The tray couldn't accommodate additional information or the varying custom fields."
solution2_insights:
  - "Admins wanted to bulk download receipts per statement, but mostly just needed to quickly confirm the vendor name, date, and amount during reconciliation"
  - "Transaction details needed to accommodate custom fields and varying client configurations, and potentially be editable by the admin in the future"
  - "After working with the platform, admins found they no longer needed bulk downloads — they trusted that receipt images would be accessible for the 7-year retention period"
solution2_pilot_note: "To get in front of users faster, our pilot program solution was adding download links to each transaction for receipt images. This was the smallest level of effort which allowed us to test expense management within the platform the fastest."
solution2_solution: "We revamped the transactions page to account for expense details and future needs like admin editing of expense codes. We created a cleaner slide-out panel which displayed receipts immediately, giving admins an easy way to compare them to merchant information. The panel was flexible enough for any custom field configuration and could grow to accommodate more information."
solution2_before_label: "Before"
solution2_before_image_src: "/images/expense-management/OldTransactionDetail.png"
solution2_before_image_alt: "Previous transaction detail design — cluttered tray with download links"
solution2_after_label: "After"
solution2_after_image_src: "/images/expense-management/TransactionDetailMockup.png"
solution2_after_image_alt: "Redesigned expense detail panel with inline receipt display"

# Solution 3 - Pending Transaction Data
solution3_label: "Solution #3"
solution3_title: "Pending-to-Posted Transaction Matching"
solution3_problem: "Pending transactions are actually a totally different transaction from their posted counterparts. To users, it appears that a pending transaction seamlessly transitions into a posted one — but behind the scenes they're two different things. This causes issues when users add expense data to pending transactions within the mobile app."
solution3_description: "The app would automatically match pending to posted transactions and move data over. This worked 95% of the time, but was especially hard with restaurant or hotel charges where the pending amount might not match the posted amount. We needed a flow that allowed cardholders to handle this manually."
solution3_user_perceptions:
  - "I already added data to this transaction — where did my receipt and codes go?"
  - "This transaction is appearing twice. Why was I charged twice?"
solution3_solution: "To cover these two main user problems and any edge cases, I designed 4 different experiences depending on the transaction status."
solution3_scenarios:
  - title: "Missing Expense Details"
    description: "Added actions on the transaction detail page allowing cardholders to either 'push' or 'pull' details from a pending or posted transaction"
  - title: "Duplicate Transactions"
    description: "For rare cases where expense details were on an expired pending transaction, users could remove the transaction or move details to the correct posted transaction"
solution3_images:
  - src: "/images/expense-management/multialerts.png"
    alt: "Multiple alert states for pending transaction issues"
  - src: "/images/expense-management/P2P-Scenarios.png"
    alt: "Four pending-to-posted transaction scenarios"
  - src: "/images/expense-management/P2P-PullMockup.jpg"
    alt: "Pull expense details from pending transaction mockup"

# Solution 4 - Expense Reports
solution4_label: "Solution #4"
solution4_title: "Eliminating Expense Reports"
solution4_description: "We removed expense reports entirely from the app. Admins wanted information faster, and cardholders didn't want to remember to submit a report. Once a cardholder adds their expense details to a transaction, the admin can reconcile it immediately — meaning faster reconciliation, fewer missing receipts, and admins can work on their own terms instead of getting backlogged at the end of every month."
solution4_image_src: "/images/expense-management/NoExpenseReports.png"
solution4_image_alt: "No expense reports needed — simplified mobile experience"

# Outcome
outcome_label: "Outcome"
outcome_title: "Results and Reflection"
outcome_description: "The pilot program was a highly effective way to test minimum features with an identified target market. The clients we worked with were incredibly helpful, providing regular insights and feedback that made designing and releasing updates easier."
outcome_note: "Unfortunately, this project wrapped up around the start of Covid-19 when travel and expense spending by companies almost completely went away, and the Expense Management features were not released to clients outside the pilot."
outcome_quote: "We are really enjoying the ease of it. Our owners even love it! One question we did have was, do you know when we would be able to get it for our other companies? It is really making our lives easier so the sooner the better for us."
outcome_quote_attribution: "CRO, Pilot Client Company"
outcome_image_src: "/images/expense-management/Home.png"
outcome_image_alt: "Expense management home screen"

# Footer CTA
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
---

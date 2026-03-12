---
# Metadata
pageTitle: "Bolt Abandoned Carts Case Study — Michelle Taylor"
pageDescription: "How Michelle Taylor redesigned abandoned cart recovery at Bolt, increasing conversion by up to 13% and recovering $18M in lost revenue."

# Hero Section
heroLogo:
  src: "/images/logos/BoltLogo.png"
  alt: "Bolt"
heroTitle: "Increasing Abandoned Cart Conversion by up to 13%*"
heroHighlight: "up to 13%*"
heroDescription: "Redesigned abandoned cart recovery emails and SMS with direct-to-checkout links, pre-loading saved cart contents and shopper information for one-click checkout — recovering millions in potentially lost revenue for Bolt merchants."
heroImage:
  src: "/images/abandoned-carts/ACHero.png"
  alt: "Abandoned cart recovery hero showing email and SMS notifications"

# Overview Section
overviewLabel: "Overview"
overviewTitle: "Recovering lost revenue through smarter cart recovery"
overviewDescription1: "Despite Bolt Checkout's streamlined and efficient purchasing process, the current abandoned cart feature lacked sophistication and efficacy. Checkout abandonment was anywhere from 45%-70% so by failing to effectively re-engage customers led to <strong>missed opportunities in recovering potentially lost sales</strong>."
overviewDescription2: "The primary issues include inadequate retainment of items in the cart, lack of personalization in recovery emails, and insufficient incentives to motivate customers to complete their purchases. Additionally, the current merchant dashboard analytics did not provide detailed insights into cart abandonment."
overviewRole: "Lead Product Designer"
overviewPartners:
  - name: "Product Manager"
    icon: "UserCircle"
  - name: "Engineering Lead & Team"
    icon: "Code"
  - name: "Go-to-Market"
    icon: "Megaphone"
  - name: "Legal"
    icon: "ShieldCheck"
overviewMetrics:
  - name: "Merchant Recovered Amount"
    icon: "ChartLineUp"
  - name: "Abandon Rate"
    icon: "Target"
overviewResearch: "Our team looked at competitive product features, abandonment by industry, peak months, and benchmark performance metrics."
overviewCards:
  - title: "The Problem"
    icon: "ShoppingCartSimple"
    description: "Across industries, 45-70% of shopping carts are abandoned before checkout. For Bolt's merchants, this represented millions in potentially lost revenue every month."
  - title: "Objective"
    icon: "Target"
    description: "Improve cart recovery rates through better email personalization, smarter notification timing, and actionable merchant analytics."
  - title: "Approach"
    icon: "MagnifyingGlass"
    description: "Recovery emails were generic, poorly timed, and directed shoppers back to merchant homepages rather than their saved carts — losing all cart context and requiring shoppers to start over."

# Requirements Definition Section
requirementsLabel: "Design Process"
requirementsTitle: "Requirements Definition"
requirementsDescription: "Breaking down the key areas of improvement, from notification timing and email design to merchant-facing analytict, that would drive higher cart recovery rates."

# Notification Timing Section
timingLabel: "Notification Timing"
timingTitle: "Optimized notification timing for maximum recovery"
timingDescription1: "Through research and testing, we established strategic send windows to maximize engagement without overwhelming shoppers. The first email fires at 2 hours after abandonment — catching intent while it's still fresh — with a follow-up at 24 hours for shoppers who haven't yet returned."
timingDescription1Bold1: "2 hours"
timingDescription1Bold2: "24 hours"
timingDescription2: "SMS notifications follow strict TCPA regulations, only sending during permitted hours and honoring opt-out preferences. The timing logic accounts for shopper timezone, consent status, and channel preferences to ensure compliant, effective outreach."
timingDescription2Bold: "TCPA regulations"
timingImage:
  src: "/images/abandoned-carts/notification-logic.png"
  alt: "Notification timing logic flow showing 2-hour and 24-hour send windows"

# Email & SMS Redesign Section
emailRedesignLabel: "Email & SMS Redesign"
emailRedesignTitle: "Redesigned notifications that drive action"
emailRedesignDescription: "We updated the email branding to reflect each merchant's identity, optimized and tested subject lines for higher open rates, and replaced generic homepage links with a \"Checkout Now\" CTA that pre-loads the shopper's saved cart — removing friction and getting them directly to checkout in one click."
emailRedesignDescriptionBold: "\"Checkout Now\" CTA"
emailRedesignImages:
  - src: "/images/abandoned-carts/AC-Emails.png"
    alt: "Redesigned abandoned cart email templates with merchant branding"
emailRedesignSectionTitle: "Redesigning the branding and content in abandoned cart emails and SMS"
emailRedesignSectionDescription1: "Emails were updated with new Bolt and merchant branding. I worked with our tech writer to optimize the subject line and email copy, and included a preview of the email notifications for the merchant within their dashboard."
emailRedesignSectionDescription2Html: "The <strong class=\"text-charcoal\">&ldquo;Checkout Now&rdquo; CTA</strong> in the emails used order tokens to pre-load the cart contents and any of the saved shopper information at the time of abandonment to maintain a <strong class=\"text-charcoal\">one-click checkout</strong> from their email notification."

# Merchant Dashboard Section
dashboardLabel: "Merchant Dashboard"
dashboardTitle: "Giving merchants visibility and control"
dashboardDescription1: "The merchant dashboard serves as the feature homepage, providing configuration controls for notification settings, branding, and send preferences."
dashboardDescription1Bold: "configuration controls"
dashboardDescription2: "Hero metrics surface key performance data at a glance, while detailed abandonment analytics help merchants understand recovery trends, open rates, and revenue impact over time."
dashboardDescription2Bold: "abandonment analytics"
dashboardImages:
  - src: "/images/abandoned-carts/ac-dashboard-detail.png"
    alt: "Abandoned carts merchant dashboard with detail tray and analytics"

# SMS Consent Section
smsConsentLabel: "SMS Consent"
smsConsentTitle: "TCPA-compliant consent management"
smsConsentDescription1: "SMS recovery required a carefully designed consent collection flow to comply with TCPA regulations. We integrated consent capture directly into the checkout experience, making it easy for shoppers to opt in while maintaining full legal compliance."
smsConsentDescription1Bold: "TCPA regulations"
smsConsentDescription2: "The system tracks consent status per shopper, respects opt-out requests immediately, and provides a compliant flow for phone number collection from shoppers."
smsConsentImage:
  src: "/images/abandoned-carts/TextConsent.png"
  alt: "TCPA-compliant SMS consent collection flow"

# Go-to-Market Section
gtmLabel: "Go-to-Market"
gtmTitle: "Supporting Go-to-Market & Internal Adoption"
gtmDescription: "I also partnered with Product and Go-to-Market teams to help drive merchant adoption:"
gtmBullets:
  - "Designed sales enablement materials, including a product pitch deck and demo visuals."
  - "Supported the PM with training sessions to Sales & CSM teams on product setup, functionality, and value."

# Results Section
resultsLabel: "Results"
resultsTitle: "Recovering more than $18M* in lost revenue"
resultsDescription: "The Abandoned Cart solution successfully recovered more than $18M in lost revenue for select merchants and achieved the following outcomes:"
resultsMetrics:
  - value: "45%"
    label: "Abandonment rate (baseline)"
  - value: "68%"
    label: "Email open rate"
  - value: "18%"
    label: "Email click-to-open rate"
  - value: "12%"
    label: "Avg recovery rate (up to 26.1%)"
  - value: "1%"
    label: "Unsubscribe rate"
  - value: "100+"
    label: "Merchants adopted"
resultsOutro: "By focusing on user-centric design, seamless interactions, and data-informed decision-making, the solution outperformed industry incumbents like Klaviyo while delivering an intuitive experience for both shoppers and merchants."
resultsFootnote: "*Recovered in the first month post launch"

# Future Vision Section
futureVisionLabel: "Future Vision"
futureVisionTitle: "What next?"
futureVisionDescription: "To enhance future cart recovery capabilities, I collaborated with the Product Manager to define a roadmap focusing on:"
futureVisionCards:
  - title: "Multi-Channel Engagement"
    description: "Introduce Email + SMS notification sequences with device recognition for better reach."
  - title: "AI-Powered Personalization"
    description: "Implement ML/AI-driven timing to send notifications at optimal moments based on shopper behavior. Enable personalized product recommendations using browse and cart data to suggest complementary items."
futureVisionOutro: "Through data-driven design, collaborative cross-functional work, and a focus on delivering impact, the Abandoned Cart recovery solution drove significant revenue recovery and elevated the overall checkout experience."

# Footer CTA Section
footerCtaLabel: "Thank you for reading"
footerCtaTitle: "Want to see more of my work?"
footerCtaButtonText: "Back to Portfolio"
footerAboutText: "Learn more about my background and experience"
footerAboutButtonText: "Professional History"
footerAboutHref: "/about"
footerNextProjectTitle: "Next Project"
footerNextProjectHref: "/expense-management"
footerNextProjectImage:
  src: "/images/expense-management/ExpenseManagementMobile.png"
  alt: "Capital One expense management screens"
footerNextProjectDescription: "Automating admin workflows and simplifying expense reporting"
footerNextProjectLinkText: "View Case Study"
---

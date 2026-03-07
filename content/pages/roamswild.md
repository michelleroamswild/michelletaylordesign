---
# Hero
heroTitle: "Learning AI by Building"
heroDescription: "Creating a location intelligence platform for discovering dispersed campsites using terrain data, AI-assisted scoring, and calibrated heuristics to help travelers make smarter decisions."
heroImage: "/images/roamswild/DJI_0024.jpg"
heroLogo: "/images/roamswild/Logo.png"

# RoamsWild Intro
introTitle: "RoamsWild"
introDescription1: "RoamsWild began as a learning project to explore how AI and modern APIs could power more intelligent outdoor exploration beyond static pins and outdated user reports."
introDescription2: "Rather than working on a small or hypothetical problem, I chose a complex, real-world domain I know deeply: road-based travel, dispersed camping, and landscape photography. Using modern AI tools as a build partner, I designed and implemented an intelligent exploration app that helps people make better decisions in the moment — where to go, when to go, and why it's worth it. The project reflects my process of learning by building, treating data, scoring logic, and human judgment as core design materials."
introImage: "/images/roamswild/features.png"

# Project Overview
overviewObjective1: "The primary goal of this project was to learn how AI tools and modern APIs could extend my capabilities as a Product Designer. Rather than treating AI as a novelty feature, I used it as a practical build partner to help me design, prototype, and implement systems that would normally require an engineering team. Large language models supported rapid exploration of system architecture, API design, and data transformations, allowing me to move from ideas to working implementations much faster than traditional learning paths."
overviewObjective2: "This case study focuses less on a polished final product and more on how my role evolved as I learned to design and build AI-informed systems end to end."
overviewRole: "Solo designer & developer — product strategy, UX/UI design, front-end development, data integration."
overviewTools:
  - "Claude Code"
  - "Loveable"
  - "ChatGPT"
  - "GitHub"
  - "Supabase"
  - "Vercel"
  - "Procreate"
  - "Notion"

# Choosing a Problem
choosingTitle: "Finding the right domain to explore"
choosingDescription: "I intentionally chose something that was personal to me but still a real problem, and something I would be excited about. I am constantly on the road and traveling outdoors - and I mainly camp out on public lands for overlanding or offroading trips. So I combined a few instances that were part of a complex domain. From experience, this space has messy and imperfect data and requires judgment, not just retrieval, which ensured I was learning hard things rather than building a simplified or artificial example."
choosingDomains:
  - icon: "Jeep"
    title: "Outdoor Travel"
    description: "Road-based exploration across public lands, national forests, and BLM areas."
  - icon: "Tent"
    title: "Dispersed Camping"
    description: "Free camping on public land without designated sites – requiring knowledge of access, terrain, and regulations."
  - icon: "Camera"
    title: "Landscape Photography"
    description: "Finding optimal lighting, terrain features, and weather conditions for capturing compelling outdoor scenes."

# Problem Statement
problemStatement: "How might I design a system that helps people make better decisions, not just find places?"
problemHighlight: "better decisions"

# The Beginning
beginningDescription1: "The start of this project wasn't planned. I started with a vague prompt that was more about exploring possibilities than building a specific product. It wasn't until I had Claude, Supabase, and a local development server running that I realized I could actually build something end to end."
beginningDescription2: "I began by clarifying three things:"
beginningCards:
  - icon: "Compass"
    label: "Who"
    title: "Road-based travelers"
    description: "People who explore by vehicle -- van lifers, overlanders, and road trippers who need to make decisions about where to stop and camp."
  - icon: "Path"
    label: "Struggles"
    title: "Access, terrain & timing"
    description: "Understanding land access rules, assessing terrain quality for camping, and timing trips around weather and lighting conditions."
  - icon: "Star"
    label: "Success Metric"
    title: "Fewer but smarter recommendations"
    description: "Not more results -- better ones. Quality over quantity, surfacing only locations that match real conditions and preferences."

# Takeaway 1
takeaway1Title: "Start with a clear plan"
takeaway1Description: "AI tools are powerful accelerators, but they amplify whatever direction you give them. Without clear constraints and goals, you end up iterating on the wrong things faster. Define the problem, the audience, and what success looks like before touching any tool."

# Initial Output
initialOutputDescription: "The initial output was extremely incomplete because I hadn't clearly defined what I was trying to make. Features were vague, and some flows didn't make sense from a product perspective. As I spent more time experimenting and evaluating public APIs, the project began to take shape into something more intentional."

# The Foundation
foundationTitle: "Design quality after initial technical exploration"
foundationDescription: "Once I had something more concrete, I intentionally shifted focus back to design quality. I created a style guide, improved consistency, and refined core interaction patterns so the product didn’t feel like a purely technical experiment."

# Takeaway 2
takeaway2Title: "Design remains essential"
takeaway2Description: "AI can generate layouts and suggest patterns, but it cannot replace the intentionality of design decisions. Style guides, consistency, hierarchy, and refined micro-interactions still require a designer's eye. The tools accelerate execution – they do not replace craft."

# From Ideas to Systems
systemsTitle: "From Ideas to Systems"
systemsDescription: "I started with simple heuristics to predict potential dispersed campsites by combining public land data with road networks, identifying dead ends and intersections where campsites often appear."
systemsDescription2: "From there, I designed and built systems that:"
systemsBullets:
  - "Score terrain lighting quality using sun azimuth and weather data"
  - "Evaluate scenic potential and access confidence"
  - "Factor in timing relevance for photography"
systemsClosing: "These systems powered a photo spot–focused exploration experience, with reasoning intentionally exposed in user-friendly language."
scoringDimensions:
  - icon: "CloudSun"
    title: "Terrain"
    description: "Lighting quality scoring based on elevation, aspect, and solar angle"
  - icon: "Mountains"
    title: "Scenic"
    description: "Potential score based on landscape features and viewshed analysis"
  - icon: "MapTrifold"
    title: "Access"
    description: "Confidence rating for road conditions, land status, and legal access"
  - icon: "Camera"
    title: "Timing"
    description: "Photography timing based on golden hour, weather, and seasonal conditions"

# Takeaway 3
takeaway3Title: "Modern APIs enable new product experiences"
takeaway3Description: "The combination of open data sources, modern APIs, and AI tooling means individual designers can now prototype and ship products that previously required full engineering teams. The barrier between design and development is thinner than ever."

# Intelligence Layer
intelligenceTitle: "Designing the Intelligence Layer (AI + APIs)"
intelligenceDescription1: "Instead of relying on popularity, static information, or user reviews, I focused on defining what I wanted the product to consider when making a recommendation. I outlined the kinds of signals that matter in this context, like road type, access, land ownership, weather, and elevation profiles — and then used existing APIs and lightweight models to turn those inputs into ranked results. Initially it was less about inventing algorithms and more about deciding what factors should matter, how they should be combined, and how the output should make sense to a person using the app."
intelligenceDescription2: "To build this as a solo designer, I used large language models as a development partner — specifically Claude code to help prototype API endpoints, generate feature logic, and iterate on scoring approaches quickly. The AI tools accelerated learning and implementation, but the model design, feature selection, and weighting decisions were driven by product intent: surfacing recommendations that users could understand and trust, and using my knowledge of the space to extensively debug results."
intelligenceDescription3: "Rather than treating RoamsWild as a collection of tools, it become more of a set of decision-support systems. Each feature began with a specific question — all things that I have experienced while out on the road: How to predict better light, how to interpret weather for photography, how to surface potential campsites without relying solely on user reports."
dataSources:
  - icon: "CloudSun"
    title: "Open-Meteo"
    description: "Historical and forecast weather data for climate-aware recommendations"
  - icon: "TreeEvergreen"
    title: "Recreation.gov"
    description: "Federal land data, campground availability, and recreation areas"
  - icon: "CloudSun"
    title: "Tomorrow.io"
    description: "Real-time weather intelligence for route and timing optimization"
  - icon: "MapTrifold"
    title: "OpenStreetMap"
    description: "Road network, access routes, and points of interest for navigation context"

# Takeaway 4
takeaway4Title: "Avoid getting carried away"
takeaway4Description: "Focus on baseline experiences before expanding. Harder than it sounds when there is so much potential."

# Challenges
challengesTitle: "Challenges"
challenges:
  - title: "LLMs can be wrong, and they can be wrong a lot"
    description: "Working with AI tools introduced a different set of challenges than traditional design work. Large language models are powerful, but inconsistent, which meant anything generated needed careful review, debugging, and validation. AI outputs were a starting point, not a source of truth."
  - title: "Designing isn't the easiest while building"
    description: "Claude is actually really good at determining UX with little guidance. Sometimes if you are too specific it has a harder time creating something good. It does have a hard time with consistency, and changing the design after the fact takes time and effort."
  - title: "Things can get messy fast"
    description: "As the project evolved, complexity grew quickly. Without clear structure, logic and experiments could become messy, forcing me to slow down, document decisions, and be more intentional about what I was building and why."
  - title: "AI tools ≠ Engineers ≠ Designers (in my Opinion)"
    description: "I also learned that AI tools behave more like engineers than designers. They can implement ideas, but they lack judgment, consistency, and taste. Early outputs were often functional but visually basic or misaligned, reinforcing the need for strong design direction."
  - title: "There's a lot to consider, that you might not consider"
    description: "Finally, the project surfaced constraints I don’t normally encounter in design-only work; API response times, error handling, and packaging the app for real use. These considerations directly affected the experience and pushed me to think beyond interfaces and more holistically about the system, and taught me a lot. "
  - title: "You can do a LOT very quickly"
    description: "I built the base of this app in a few days. In less than 24 hours I had a working trip planner with a full database and a live URL. The power is overwhelming and has so much potential."
  - title: "The ethical dilemma of using AI"
    description: "As an avid outdoorswoman, I struggle with the use of AI given its effect on the environment. Its a back and forth challenge of seeing the potential but also knowing that its likely going to cause more harm than good in the long run. "

# Outcomes
outcomesTitle: "Outcomes"
outcomesDescription: "RoamsWild began as a passion project, but it quickly became a real product with live infrastructure."
outcomesIntro: "In its initial build cycle, I:"
outcomesList:
  - "Designed and shipped a working trip planner and derived campsite discovery system in ~2 days"
  - "Live deployed the application with authentication, database structure, and API integrations"
  - "Established a scalable schema for locations, derived signals, scoring, and confidence modeling, and started building my own database of information"
  - "Built foundational services for terrain-based glow analysis and contextual weather evaluation"

outcomesTradeoffsIntro: "But among that this project showcases several of the tradeoffs you encounter when building with AI tools:"
outcomesTradeoffs:
  - title: "Speed vs. focus:"
    description: "AI tools make it easy to build quickly, but if the problem isn't clear, you just end up with more half-formed features."
  - title: "More data isn't always better:"
    description: "I tested a lot of data calculations that looked impressive but didn't actually improve the results. Simplifying often made things stronger."
  - title: "Automation needs context:"
    description: "If the system can't explain why something is recommended, it's hard to trust, especially in remote environments."

outcomesReflection: "Building this reinforced that fast tools don't replace product thinking, or design. Most of the real work was narrowing the scope, simplifying logic, and deciding what actually improves the experience and provides actual results, instead of just sounding impressive."

# Whats Next
whatsNextTitle: "Whats next?"
whatsNextDescription: "This project is still actively evolving and the foundation is in place, but there are clear areas for refinement and expansion:"
whatsNextItems:
  - title: "Refining terrain analysis and glow scoring accuracy"
    description: "through additional terrain testing and real-world validation"
  - title: "Improving confidence modeling"
    description: "to better reflect uncertainty in derived campsites"
  - title: "Offline mapping and campsite finding"
    description: "for remote environments with limited connectivity"
  - title: "Collapsing features into a seamless experience"
    description: "to give a holistic experience to help reduce uncertainty"
whatsNextClosing: "After a bumpy start with too many ideas, the next steps are to create solid experiences for the existing features and documenting new ideas or feature enhancements in an actual roadmap."

# CTA
ctaTitle: "See RoamsWild in action"
ctaDescription: "Explore the live product and see how terrain data, weather signals, and AI-assisted scoring come together to help travelers discover better campsites."
ctaLink: "https://roamswild.com"
---

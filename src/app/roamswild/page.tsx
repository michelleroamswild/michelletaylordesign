import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  MapTrifold,
  Camera,
  Tent,
  Mountains,
  ArrowLeft,
  ArrowSquareOut,
  Compass,
  CloudSun,
  TreeEvergreen,
  Star,
  Path,
} from "@phosphor-icons/react/dist/ssr";

export default function RoamsWild() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/roamswild/DJI_0693.jpg"
            alt="Aerial landscape of dispersed camping terrain"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
        </div>
        <div className="container-site relative z-10 pb-16 pt-32">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors text-sm"
          >
            <ArrowLeft size={16} weight="bold" />
            Back to portfolio
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/roamswild/Logo.png"
                alt="RoamsWild logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <span className="text-white/80 font-medium text-lg">
                RoamsWild
              </span>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Learning AI by Building
            </h1>
            <p className="body-lg !text-white/80 max-w-2xl">
              Creating a location intelligence platform for discovering dispersed
              campsites using terrain data, AI-assisted scoring, and calibrated
              heuristics to help travelers make smarter decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
                  Project Overview
                </p>
                <h2 className="heading-lg mb-6">
                  A personal project to explore{" "}
                  <span className="highlight">AI-assisted product design</span>
                </h2>
                <p className="body-lg mb-6">
                  RoamsWild is a location intelligence platform designed to help
                  road-based travelers discover dispersed campsites, scenic
                  routes, and photo-worthy landscapes. But the real objective was
                  learning how AI tools extend product design capabilities.
                </p>
                <p className="body-md">
                  Rather than learning AI in the abstract, I chose to build
                  something real -- a full-stack product that would push me to
                  use AI tools across research, design, development, and
                  deployment.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-4">
                  Tools Used
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Claude Code",
                    "Loveable",
                    "ChatGPT",
                    "GitHub",
                    "Supabase",
                    "Vercel",
                    "Procreate",
                    "Notion",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="bg-white rounded-full px-4 py-2 text-sm font-medium text-charcoal"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-4">
                    Objective
                  </p>
                  <p className="body-md">
                    Learning how AI tools extend product design capabilities --
                    from ideation through deployment.
                  </p>
                </div>
                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-4">
                    Role
                  </p>
                  <p className="body-md">
                    Solo designer & developer -- product strategy, UX/UI design,
                    front-end development, data integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Mockup */}
      <section className="bg-cream-dark">
        <div className="container-site py-8">
          <div className="img-rounded">
            <Image
              src="/images/roamswild/mockup.png"
              alt="RoamsWild app mockup showing the campsite discovery interface"
              width={1440}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Choosing a Problem */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
              Choosing a Problem
            </p>
            <h2 className="heading-lg mb-4 max-w-2xl">
              Finding the right domain to explore
            </h2>
            <p className="body-lg mb-10 max-w-2xl">
              I started by identifying three domains I knew deeply from personal
              experience -- areas where existing tools felt inadequate and where
              data could create real value.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6">
                <div className="p-3 bg-cream rounded-lg inline-flex mb-4">
                  <Mountains
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <h3 className="heading-md mb-2">Outdoor Travel</h3>
                <p className="body-md">
                  Road-based exploration across public lands, national forests,
                  and BLM areas with limited information infrastructure.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="p-3 bg-cream rounded-lg inline-flex mb-4">
                  <Tent
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <h3 className="heading-md mb-2">Dispersed Camping</h3>
                <p className="body-md">
                  Free camping on public land without designated sites --
                  requiring knowledge of access, terrain, and regulations.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="p-3 bg-cream rounded-lg inline-flex mb-4">
                  <Camera
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <h3 className="heading-md mb-2">Landscape Photography</h3>
                <p className="body-md">
                  Finding optimal lighting, terrain features, and weather
                  conditions for capturing compelling outdoor scenes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
                Problem Statement
              </p>
              <p className="heading-md">
                &ldquo;How might I design a system that helps people make{" "}
                <span className="highlight">better decisions</span>, not just
                find places?&rdquo;
              </p>
            </div>

            <div className="img-rounded">
              <Image
                src="/images/roamswild/Competitorapps.png"
                alt="Competitive analysis of existing camping and outdoor apps"
                width={1440}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
              The Beginning
            </p>
            <h2 className="heading-lg mb-4 max-w-2xl">
              Three clarifications before building
            </h2>
            <p className="body-lg mb-10 max-w-2xl">
              Before writing any code or opening a design tool, I needed to
              establish clear boundaries for what this product would and would
              not be.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-cream rounded-xl p-6">
                <div className="p-3 bg-white rounded-lg inline-flex mb-4">
                  <Compass
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-2">
                  Who
                </p>
                <h3 className="heading-md mb-2">Road-based travelers</h3>
                <p className="body-md">
                  People who explore by vehicle -- van lifers, overlanders, and
                  road trippers who need to make decisions about where to stop
                  and camp.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6">
                <div className="p-3 bg-white rounded-lg inline-flex mb-4">
                  <Path
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-2">
                  Struggles
                </p>
                <h3 className="heading-md mb-2">
                  Access, terrain & timing
                </h3>
                <p className="body-md">
                  Understanding land access rules, assessing terrain quality for
                  camping, and timing trips around weather and lighting
                  conditions.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6">
                <div className="p-3 bg-white rounded-lg inline-flex mb-4">
                  <Star
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-2">
                  Success Metric
                </p>
                <h3 className="heading-md mb-2">
                  Fewer but smarter recommendations
                </h3>
                <p className="body-md">
                  Not more results -- better ones. Quality over quantity,
                  surfacing only locations that match real conditions and
                  preferences.
                </p>
              </div>
            </div>

            {/* Takeaway 1 */}
            <div className="bg-cream rounded-xl p-8 flex items-start gap-5 mb-10">
              <div className="p-3 bg-white rounded-lg shrink-0">
                <Lightbulb
                  size={28}
                  weight="duotone"
                  className="text-charcoal"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-1">
                  Takeaway #1
                </p>
                <h3 className="heading-md mb-2">Start with a clear plan</h3>
                <p className="body-md">
                  AI tools are powerful accelerators, but they amplify whatever
                  direction you give them. Without clear constraints and goals,
                  you end up iterating on the wrong things faster. Define
                  the problem, the audience, and what success looks like before
                  touching any tool.
                </p>
              </div>
            </div>

            <div className="img-rounded">
              <Image
                src="/images/roamswild/processoverview.png"
                alt="Process overview showing the project planning and workflow"
                width={1440}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Takeaway 1 Image */}
      <section className="bg-cream-dark">
        <div className="container-site py-8">
          <div className="img-rounded">
            <Image
              src="/images/roamswild/takeaway1.png"
              alt="Takeaway 1 visual - starting with a clear plan"
              width={1440}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* The Foundation */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
              The Foundation
            </p>
            <h2 className="heading-lg mb-4 max-w-2xl">
              Design quality after initial technical exploration
            </h2>
            <p className="body-lg mb-10 max-w-2xl">
              After getting the technical scaffolding in place with AI tools, I
              shifted focus to what I know best -- design. The early output
              needed a strong style guide, visual consistency, and refined
              interactions to feel like a real product rather than a prototype.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="img-rounded">
                <Image
                  src="/images/roamswild/designsystems.png"
                  alt="RoamsWild design system showing components and patterns"
                  width={720}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="img-rounded">
                <Image
                  src="/images/roamswild/colors.png"
                  alt="RoamsWild color palette and visual identity"
                  width={720}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Takeaway 2 */}
            <div className="bg-white rounded-xl p-8 flex items-start gap-5">
              <div className="p-3 bg-cream rounded-lg shrink-0">
                <Lightbulb
                  size={28}
                  weight="duotone"
                  className="text-charcoal"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-1">
                  Takeaway #2
                </p>
                <h3 className="heading-md mb-2">Design remains essential</h3>
                <p className="body-md">
                  AI can generate layouts and suggest patterns, but it cannot
                  replace the intentionality of design decisions. Style guides,
                  consistency, hierarchy, and refined micro-interactions still
                  require a designer&apos;s eye. The tools accelerate execution
                  -- they do not replace craft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Takeaway 2 Image */}
      <section className="bg-cream-dark">
        <div className="container-site py-8">
          <div className="img-rounded">
            <Image
              src="/images/roamswild/takeaway2.png"
              alt="Takeaway 2 visual - design remains essential"
              width={1440}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* From Ideas to Systems */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
              From Ideas to Systems
            </p>
            <h2 className="heading-lg mb-4 max-w-2xl">
              Building the core intelligence
            </h2>
            <p className="body-lg mb-10 max-w-2xl">
              The heart of RoamsWild is a scoring system that evaluates
              locations across multiple dimensions -- turning raw data into
              actionable recommendations for travelers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="metric-card">
                <div className="p-3 bg-cream rounded-lg inline-flex mb-3">
                  <CloudSun
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <p className="metric-value">Terrain</p>
                <p className="metric-label">
                  Lighting quality scoring based on elevation, aspect, and solar
                  angle
                </p>
              </div>
              <div className="metric-card">
                <div className="p-3 bg-cream rounded-lg inline-flex mb-3">
                  <Mountains
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <p className="metric-value">Scenic</p>
                <p className="metric-label">
                  Potential score based on landscape features and viewshed
                  analysis
                </p>
              </div>
              <div className="metric-card">
                <div className="p-3 bg-cream rounded-lg inline-flex mb-3">
                  <MapTrifold
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <p className="metric-value">Access</p>
                <p className="metric-label">
                  Confidence rating for road conditions, land status, and legal
                  access
                </p>
              </div>
              <div className="metric-card">
                <div className="p-3 bg-cream rounded-lg inline-flex mb-3">
                  <Camera
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <p className="metric-value">Timing</p>
                <p className="metric-label">
                  Photography timing based on golden hour, weather, and seasonal
                  conditions
                </p>
              </div>
            </div>

            <div className="img-rounded mb-10">
              <Image
                src="/images/roamswild/Exploretab.png"
                alt="RoamsWild explore tab showing the campsite discovery interface"
                width={1440}
                height={900}
                className="w-full h-auto"
              />
            </div>

            {/* Takeaway 3 */}
            <div className="bg-cream rounded-xl p-8 flex items-start gap-5">
              <div className="p-3 bg-white rounded-lg shrink-0">
                <Lightbulb
                  size={28}
                  weight="duotone"
                  className="text-charcoal"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-1">
                  Takeaway #3
                </p>
                <h3 className="heading-md mb-2">
                  Modern APIs enable new product experiences
                </h3>
                <p className="body-md">
                  The combination of open data sources, modern APIs, and AI
                  tooling means individual designers can now prototype and ship
                  products that previously required full engineering teams.
                  The barrier between design and development is thinner than
                  ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Takeaway 3 Image */}
      <section className="bg-cream-dark">
        <div className="container-site py-8">
          <div className="img-rounded">
            <Image
              src="/images/roamswild/takeaway3.png"
              alt="Takeaway 3 visual - modern APIs enable new product experiences"
              width={1440}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Designing the Intelligence Layer */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
              Designing the Intelligence Layer
            </p>
            <h2 className="heading-lg mb-4 max-w-2xl">
              Connecting real-world data to design decisions
            </h2>
            <p className="body-lg mb-10 max-w-2xl">
              The intelligence behind RoamsWild comes from combining multiple
              open data sources into a unified scoring model. Each API provides
              a different dimension of information that feeds the recommendation
              engine.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="p-3 bg-cream rounded-lg inline-flex mb-4">
                  <CloudSun
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <h3 className="font-semibold text-charcoal mb-1">Open-Meteo</h3>
                <p className="text-sm text-muted">
                  Historical and forecast weather data for climate-aware
                  recommendations
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="p-3 bg-cream rounded-lg inline-flex mb-4">
                  <TreeEvergreen
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <h3 className="font-semibold text-charcoal mb-1">
                  Recreation.gov
                </h3>
                <p className="text-sm text-muted">
                  Federal land data, campground availability, and recreation
                  areas
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="p-3 bg-cream rounded-lg inline-flex mb-4">
                  <CloudSun
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <h3 className="font-semibold text-charcoal mb-1">
                  Tomorrow.io
                </h3>
                <p className="text-sm text-muted">
                  Real-time weather intelligence for route and timing
                  optimization
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="p-3 bg-cream rounded-lg inline-flex mb-4">
                  <MapTrifold
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <h3 className="font-semibold text-charcoal mb-1">
                  OpenStreetMap
                </h3>
                <p className="text-sm text-muted">
                  Road network, access routes, and points of interest for
                  navigation context
                </p>
              </div>
            </div>

            <div className="img-rounded">
              <Image
                src="/images/roamswild/features.png"
                alt="RoamsWild features showing the intelligence layer and data integrations"
                width={1440}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Landing Page Showcase */}
      <section className="bg-cream-dark">
        <div className="container-site py-8">
          <div className="img-rounded">
            <Image
              src="/images/roamswild/landingpagemacbook.png"
              alt="RoamsWild landing page displayed on a MacBook"
              width={1440}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Campsite Showcase */}
      <section className="bg-cream">
        <div className="container-site py-8">
          <div className="img-rounded">
            <Image
              src="/images/roamswild/campsitesmacbook.png"
              alt="RoamsWild campsite view on MacBook"
              width={1440}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-charcoal">
        <div className="container-site text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg text-white mb-4">
              See RoamsWild in action
            </h2>
            <p className="body-lg !text-white/70 mb-8">
              Explore the live product and see how terrain data, weather
              signals, and AI-assisted scoring come together to help travelers
              discover better campsites.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://roamswild.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-accent !text-charcoal hover:!bg-accent-dark inline-flex items-center gap-2"
              >
                View the App
                <ArrowSquareOut size={18} weight="bold" />
              </a>
              <Link
                href="/"
                className="btn-primary !bg-white/10 !text-white hover:!bg-white/20 inline-flex items-center gap-2"
              >
                <ArrowLeft size={18} weight="bold" />
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

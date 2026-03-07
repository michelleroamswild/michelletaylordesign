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
  Robot,
  Heart,
  ChatCircleDots,
  GithubLogo,
  Database,
  Globe,
  PaintBrush,
  Notepad,
} from "@phosphor-icons/react/dist/ssr";

export default function RoamsWild() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/roamswild/DJI_0024.jpg"
            alt="Aerial landscape of dispersed camping terrain"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-rw-green/60" />
        </div>
        <div className="container-site relative z-10 text-center">
          <Image
            src="/images/roamswild/Logo.png"
            alt="RoamsWild logo"
            width={120}
            height={120}
            className="rounded-lg mx-auto mb-6 brightness-0 invert"
          />
          <h1 className="heading-xl text-white mb-6">
            Learning AI by Building
          </h1>
          <p className="body-lg text-white/80 max-w-2xl mx-auto">
            Creating a location intelligence platform for discovering dispersed
            campsites using terrain data, AI-assisted scoring, and calibrated
            heuristics to help travelers make smarter decisions.
          </p>
        </div>
      </section>

      {/* RoamsWild */}
      <section className="pt-24 md:pt-32 pb-0 bg-white overflow-visible relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
            <div className="lg:pt-0 lg:pb-24">
              <h2 className="heading-lg mb-6">RoamsWild</h2>
              <p className="body-md text-muted mb-6">
                RoamsWild began as a learning project to explore how AI and
                modern APIs could power more intelligent outdoor exploration
                beyond static pins and outdated user reports.
              </p>
              <p className="body-md text-muted">
                Rather than working on a small or hypothetical problem, I chose
                a complex, real-world domain I know deeply: road-based travel,
                dispersed camping, and landscape photography. Using modern AI
                tools as a build partner, I designed and implemented an
                intelligent exploration app that helps people make better
                decisions in the moment — where to go, when to go, and why
                it&apos;s worth it. The project reflects my process of learning
                by building, treating data, scoring logic, and human judgment as
                core design materials.
              </p>
            </div>
            <div className="mb-[-450px] lg:mb-[-600px]">
              <Image
                src="/images/roamswild/features.png"
                alt="RoamsWild feature cards showing Smart Route Planning, Campsite Database, Trail Discovery, Trip Collaboration, Day-by-Day Itinerary, and Photography Conditions"
                width={1200}
                height={1300}
                className="w-[140%] max-w-none h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "rgb(242, 242, 241)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-4">
            Project Overview
          </p>
          <div className="mb-16 max-w-3xl">
            <h3 className="heading-md mb-4">Objective</h3>
            <p className="body-md text-muted mb-6">
              The primary goal of this project was to learn how AI tools and
              modern APIs could extend my capabilities as a Product Designer.
              Rather than treating AI as a novelty feature, I used it as a
              practical build partner to help me design, prototype, and
              implement systems that would normally require an engineering
              team. Large language models supported rapid exploration of system
              architecture, API design, and data transformations, allowing me
              to move from ideas to working implementations much faster than
              traditional learning paths.
            </p>
            <p className="body-md text-muted">
              This case study focuses less on a polished final product and
              more on how my role evolved as I learned to design and build
              AI-informed systems end to end.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
              Role
            </p>
            <p className="body-md text-muted">
              Solo designer &amp; developer — product strategy, UX/UI design,
              front-end development, data integration.
            </p>
          </div>

          <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
                Tools Used
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Claude Code", icon: Robot },
                  { name: "Loveable", icon: Heart },
                  { name: "ChatGPT", icon: ChatCircleDots },
                  { name: "GitHub", icon: GithubLogo },
                  { name: "Supabase", icon: Database },
                  { name: "Vercel", icon: Globe },
                  { name: "Procreate", icon: PaintBrush },
                  { name: "Notion", icon: Notepad },
                ].map((tool) => (
                  <span
                    key={tool.name}
                    className="bg-white rounded-full px-4 py-2 text-sm font-medium text-charcoal inline-flex items-center gap-2"
                  >
                    <tool.icon size={16} weight="duotone" />
                    {tool.name}
                  </span>
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* App Mockup */}
      <section className="bg-rw-sand">
        <div className="container-site py-32 md:py-44">
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
      <section className="section-spacing bg-rw-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="bg-white rounded-xl p-5">
                <div className="p-2 bg-rw-green/10 rounded-lg inline-flex mb-3">
                  <Mountains
                    size={22}
                    weight="duotone"
                    className="text-rw-green"
                  />
                </div>
                <h3 className="text-base font-semibold mb-1">Outdoor Travel</h3>
                <p className="text-sm text-muted">
                  Road-based exploration across public lands, national forests,
                  and BLM areas with limited information infrastructure.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5">
                <div className="p-2 bg-rw-green/10 rounded-lg inline-flex mb-3">
                  <Tent
                    size={22}
                    weight="duotone"
                    className="text-rw-green"
                  />
                </div>
                <h3 className="text-base font-semibold mb-1">Dispersed Camping</h3>
                <p className="text-sm text-muted">
                  Free camping on public land without designated sites --
                  requiring knowledge of access, terrain, and regulations.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5">
                <div className="p-2 bg-rw-green/10 rounded-lg inline-flex mb-3">
                  <Camera
                    size={22}
                    weight="duotone"
                    className="text-rw-green"
                  />
                </div>
                <h3 className="text-base font-semibold mb-1">Landscape Photography</h3>
                <p className="text-sm text-muted">
                  Finding optimal lighting, terrain features, and weather
                  conditions for capturing compelling outdoor scenes.
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className="mt-12">
          <Image
            src="/images/roamswild/Competitorapps.png"
            alt="Competitive analysis of existing camping and outdoor apps"
            width={1920}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 md:py-32 bg-rw-forest">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center px-8 md:px-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-rw-sage mb-6">
              Problem Statement
            </p>
            <p className="heading-lg text-white">
              &ldquo;How might I design a system that helps people make{" "}
              <span className="text-rw-amber">better decisions</span>, not just
              find places?&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="section-spacing bg-white overflow-hidden">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              <div>
                <h2 className="heading-lg mb-6">The Beginning</h2>
                <p className="body-lg text-muted mb-6">
                  The start of this project wasn&apos;t planned. I started with a
                  vague prompt that was more about exploring possibilities than
                  building a specific product. It wasn&apos;t until I had Claude,
                  Supabase, and a local development server running that I realized I
                  could actually build something end to end.
                </p>
                <p className="body-lg text-muted mb-8">
                  I began by clarifying three things:
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-rw-cream rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-rw-green/10 rounded-lg shrink-0">
                        <Compass
                          size={22}
                          weight="duotone"
                          className="text-rw-green"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-rw-sage mb-1">
                          Who
                        </p>
                        <h3 className="text-base font-semibold mb-1">Road-based travelers</h3>
                        <p className="text-sm text-muted">
                          People who explore by vehicle -- van lifers, overlanders, and
                          road trippers who need to make decisions about where to stop
                          and camp.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-rw-cream rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-rw-green/10 rounded-lg shrink-0">
                        <Path
                          size={22}
                          weight="duotone"
                          className="text-rw-green"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-rw-sage mb-1">
                          Struggles
                        </p>
                        <h3 className="text-base font-semibold mb-1">
                          Access, terrain & timing
                        </h3>
                        <p className="text-sm text-muted">
                          Understanding land access rules, assessing terrain quality for
                          camping, and timing trips around weather and lighting
                          conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-rw-cream rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-rw-green/10 rounded-lg shrink-0">
                        <Star
                          size={22}
                          weight="duotone"
                          className="text-rw-green"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-rw-sage mb-1">
                          Success Metric
                        </p>
                        <h3 className="text-base font-semibold mb-1">
                          Fewer but smarter recommendations
                        </h3>
                        <p className="text-sm text-muted">
                          Not more results -- better ones. Quality over quantity,
                          surfacing only locations that match real conditions and
                          preferences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:-mr-[30vw]">
                <Image
                  src="/images/roamswild/beginning-screenshot.png"
                  alt="Screenshot showing Claude Code terminal and RoamsWild app development"
                  width={1400}
                  height={900}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Takeaway 1 */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "rgba(212, 160, 60, 0.12)" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex p-3 rounded-lg mb-5" style={{ backgroundColor: "rgba(212, 160, 60, 0.2)" }}>
            <Lightbulb
              size={28}
              weight="duotone"
              style={{ color: "#d4a03c" }}
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#d4a03c" }}>
            Takeaway #1
          </p>
          <h3 className="heading-md mb-3">Start with a clear plan</h3>
          <p className="body-md text-muted max-w-2xl mx-auto">
            AI tools are powerful accelerators, but they amplify whatever
            direction you give them. Without clear constraints and goals,
            you end up iterating on the wrong things faster. Define
            the problem, the audience, and what success looks like before
            touching any tool.
          </p>
        </div>
      </section>

      {/* Initial Output */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="body-lg text-muted">
                The initial output was extremely incomplete because I
                hadn&apos;t clearly defined what I was trying to make. Features
                were vague, and some flows didn&apos;t make sense from a product
                perspective. As I spent more time experimenting and evaluating
                public APIs, the project began to take shape into something more
                intentional.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="/images/roamswild/initialappflow.mov" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Ideation Timelapse */}
      <section className="bg-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
        >
          <source src="/images/roamswild/Ideatimelapse.mp4" type="video/mp4" />
        </video>
      </section>

      {/* The Foundation */}
      <section className="section-spacing bg-rw-cream">
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
            <div className="bg-rw-green/10 border border-rw-green/20 rounded-xl p-8 flex items-start gap-5">
              <div className="p-3 bg-rw-green/15 rounded-lg shrink-0">
                <Lightbulb
                  size={28}
                  weight="duotone"
                  className="text-rw-green"
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
      <section className="bg-rw-sand">
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
                <div className="p-3 bg-rw-green/10 rounded-lg inline-flex mb-3">
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
                <div className="p-3 bg-rw-green/10 rounded-lg inline-flex mb-3">
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
                <div className="p-3 bg-rw-green/10 rounded-lg inline-flex mb-3">
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
                <div className="p-3 bg-rw-green/10 rounded-lg inline-flex mb-3">
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
            <div className="bg-rw-green/10 border border-rw-green/20 rounded-xl p-8 flex items-start gap-5">
              <div className="p-3 bg-rw-green/15 rounded-lg shrink-0">
                <Lightbulb
                  size={28}
                  weight="duotone"
                  className="text-rw-green"
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
      <section className="bg-rw-sand">
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
      <section className="section-spacing bg-rw-cream">
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
                <div className="p-3 bg-rw-green/10 rounded-lg inline-flex mb-4">
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
                <div className="p-3 bg-rw-green/10 rounded-lg inline-flex mb-4">
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
                <div className="p-3 bg-rw-green/10 rounded-lg inline-flex mb-4">
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
                <div className="p-3 bg-rw-green/10 rounded-lg inline-flex mb-4">
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
      <section className="bg-rw-sand">
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

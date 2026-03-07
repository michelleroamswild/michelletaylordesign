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
  CheckCircle,
  Warning,
  PencilLine,
  Shuffle,
  UsersThree,
  Brain,
  Lightning,
  Scales,
  ChartLine,
  WifiSlash,
  Jeep,
} from "@phosphor-icons/react/dist/ssr";
import { getPageContent } from "@/lib/content";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  Mountains, Tent, Camera, Compass, Path, Star, CloudSun, MapTrifold, TreeEvergreen, Jeep,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toolIconMap: Record<string, any> = {
  "Claude Code": Robot,
  "Loveable": Heart,
  "ChatGPT": ChatCircleDots,
  "GitHub": GithubLogo,
  "Supabase": Database,
  "Vercel": Globe,
  "Procreate": PaintBrush,
  "Notion": Notepad,
};

export default function RoamsWild() {
  const content = getPageContent("roamswild");
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
          <div className="absolute inset-0 bg-black/40" />
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
            {content.heroTitle}
          </h1>
          <p className="body-lg text-white/80 max-w-2xl mx-auto">
            {content.heroDescription}
          </p>
        </div>
      </section>

      {/* RoamsWild */}
      <section className="pt-24 md:pt-32 pb-0 bg-white overflow-visible relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
            <div className="lg:pt-0 lg:pb-24">
              <h2 className="heading-xl mb-10">{content.introTitle}</h2>
              <p className="body-md text-muted mb-6">
                {content.introDescription1}
              </p>
              <p className="body-md text-muted mb-6">
                {content.introDescription2}
              </p>
              <a
                href="https://www.roamswild.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Visit RoamsWild
                <ArrowSquareOut size={16} weight="bold" />
              </a>
            </div>
            <div className="mb-[-450px] lg:mb-[-600px]">
              <Image
                src="/images/roamswild/features.png"
                alt="RoamsWild feature cards showing Smart Route Planning, Campsite Database, Trail Discovery, Trip Collaboration, Day-by-Day Itinerary, and Photography Conditions"
                width={1200}
                height={1300}
                className="w-[120%] max-w-none h-auto"
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
            <h3 className="heading-xl mb-10">Objective</h3>
            <p className="body-md text-muted mb-6">
              {content.overviewObjective1}
            </p>
            <p className="body-md text-muted">
              {content.overviewObjective2}
            </p>
          </div>

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
              Role
            </p>
            <p className="body-md text-muted">
              {content.overviewRole}
            </p>
          </div>

          <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
                Tools Used
              </p>
              <div className="flex flex-wrap gap-2">
                {(content.overviewTools as string[]).map((tool: string) => {
                  const Icon = toolIconMap[tool];
                  return (
                    <span
                      key={tool}
                      className="bg-white rounded-full px-4 py-2 text-sm font-medium text-charcoal inline-flex items-center gap-2"
                    >
                      {Icon && <Icon size={16} weight="duotone" />}
                      {tool}
                    </span>
                  );
                })}
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
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
                  Choosing a Problem
                </p>
                <h2 className="heading-xl mb-10">
                  {content.choosingTitle}
                </h2>
                <p className="body-lg">
                  {content.choosingDescription}
                </p>
              </div>
              <div className="space-y-4">
                {(content.choosingDomains as Array<{icon: string; title: string; description: string}>).map((domain, i) => {
                  const Icon = iconMap[domain.icon];
                  const colors = [
                    { bg: "rgba(60, 138, 121, 0.12)", text: "#3c8a79" },
                    { bg: "rgba(205, 106, 61, 0.12)", text: "#cd6a3d" },
                    { bg: "rgba(234, 155, 12, 0.12)", text: "#ea9b0c" },
                  ];
                  const color = colors[i % colors.length];
                  return (
                    <div key={domain.title} className="rounded-xl p-5" style={{ backgroundColor: color.bg }}>
                      <div className="p-2 rounded-lg inline-flex mb-3 bg-white/60">
                        {Icon && <Icon size={22} weight="duotone" style={{ color: color.text }} />}
                      </div>
                      <h3 className="text-base font-semibold mb-1">{domain.title}</h3>
                      <p className="text-sm text-muted">{domain.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
        <div className="mt-20 px-6 md:px-12">
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
      <section className="py-28 md:py-36" style={{ backgroundColor: "#e9e5d4" }}>
        <div className="container-site">
          <div className="max-w-5xl mx-auto text-center px-8 md:px-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-8" style={{ color: "#6b8a1d" }}>
              Problem Statement
            </p>
            <p className="heading-hero" style={{ color: "#3f3e2c" }}>
              &ldquo;{content.problemStatement.split(content.problemHighlight)[0]}
              <span style={{ color: "#3c8a79" }}>{content.problemHighlight}</span>
              {content.problemStatement.split(content.problemHighlight)[1]}&rdquo;
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
                <h2 className="heading-xl mb-10">The Beginning</h2>
                <p className="body-lg text-muted mb-6">
                  {content.beginningDescription1}
                </p>
                <p className="body-lg text-muted mb-8">
                  {content.beginningDescription2}
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {(content.beginningCards as Array<{icon: string; label: string; title: string; description: string}>).map((card, i) => {
                    const Icon = iconMap[card.icon];
                    const colors = [
                      { bg: "#f9f8f6", accent: "rgba(60, 138, 121, 0.15)", text: "#3c8a79", label: "#3c8a79" },
                      { bg: "#f9f8f6", accent: "rgba(234, 155, 12, 0.15)", text: "#ea9b0c", label: "#ea9b0c" },
                      { bg: "#f9f8f6", accent: "rgba(107, 92, 230, 0.15)", text: "#6b5ce6", label: "#6b5ce6" },
                    ];
                    const color = colors[i % colors.length];
                    return (
                      <div key={card.label} className="rounded-xl p-5" style={{ backgroundColor: color.bg }}>
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: color.accent }}>
                            {Icon && <Icon size={22} weight="duotone" style={{ color: color.text }} />}
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: color.label }}>
                              {card.label}
                            </p>
                            <h3 className="text-base font-semibold mb-1">{card.title}</h3>
                            <p className="text-sm text-muted">{card.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
      <section className="py-20 md:py-28" style={{ backgroundColor: "hsl(74, 68%, 56%, 0.12)" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex p-3 rounded-lg mb-5" style={{ backgroundColor: "hsl(74, 68%, 35%, 0.15)" }}>
            <Lightbulb
              size={28}
              weight="duotone"
              style={{ color: "hsl(74, 68%, 35%)" }}
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(74, 68%, 35%)" }}>
            Takeaway #1
          </p>
          <h3 className="heading-md mb-3">{content.takeaway1Title}</h3>
          <p className="body-md text-muted">
            {content.takeaway1Description}
          </p>
        </div>
      </section>

      {/* Initial Output */}
      <section className="py-16 md:py-24 bg-rw-forest-dark">
        <div className="container-site relative">
          <div className="rounded-xl overflow-hidden shadow-lg w-[90%] mx-auto">
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
          <div className="relative lg:absolute lg:top-28 lg:left-8 lg:max-w-md mt-6 lg:mt-0">
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg">
              <p className="body-lg text-muted">
                {content.initialOutputDescription}
              </p>
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
            <div className="max-w-2xl mx-auto mb-20">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
                The Foundation
              </p>
              <h2 className="heading-xl mb-10">
                {content.foundationTitle}
              </h2>
              <p className="body-lg">
                {content.foundationDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
              <div className="img-rounded self-start">
                <Image
                  src="/images/roamswild/styleguide.webp"
                  alt="RoamsWild design system style guide"
                  width={720}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl border border-sand overflow-y-auto" style={{ height: "443px" }}>
                <Image
                  src="/images/roamswild/landing-page.png"
                  alt="RoamsWild landing page design"
                  width={720}
                  height={3000}
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Takeaway 2 */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "hsl(74, 68%, 56%, 0.12)" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex p-3 rounded-lg mb-5" style={{ backgroundColor: "hsl(74, 68%, 35%, 0.15)" }}>
            <Lightbulb
              size={28}
              weight="duotone"
              style={{ color: "hsl(74, 68%, 35%)" }}
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(74, 68%, 35%)" }}>
            Takeaway #2
          </p>
          <h3 className="heading-md mb-3">{content.takeaway2Title}</h3>
          <p className="body-md text-muted">
            {content.takeaway2Description}
          </p>
        </div>
      </section>


      {/* From Ideas to Systems */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="img-rounded">
                <Image
                  src="/images/roamswild/explore-annotated.jpg"
                  alt="RoamsWild explore interface with annotations showing public land boundaries, MVUM roads, filter by access, potential camps, and confidence scoring"
                  width={720}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="heading-xl mb-10">
                  {content.systemsTitle}
                </h2>
                <p className="body-lg text-muted mb-4">
                  {content.systemsDescription}
                </p>
                <p className="body-lg text-muted mb-3">
                  {content.systemsDescription2}
                </p>
                <ul className="space-y-2 mb-4">
                  {(content.systemsBullets as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="p-1 rounded-full mt-1 shrink-0" style={{ backgroundColor: "rgba(106, 138, 29, 0.2)" }}>
                        <CheckCircle size={16} weight="fill" style={{ color: "#6b8a1d" }} />
                      </div>
                      <p className="body-md text-muted">{item}</p>
                    </li>
                  ))}
                </ul>
                <p className="body-lg text-muted">
                  {content.systemsClosing}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Explore Tab Image */}
      <section className="bg-white">
        <div className="container-site py-8">
          <div className="img-rounded">
            <Image
              src="/images/roamswild/Exploretab.png"
              alt="RoamsWild explore tab showing the campsite discovery interface"
              width={1440}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Designing the Intelligence Layer */}
      <section className="section-spacing" style={{ backgroundColor: "hsla(60, 16.67%, 92.94%, 1)" }}>
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="heading-xl mb-10">
                  {content.intelligenceTitle}
                </h2>
                <div className="space-y-4">
                  <p className="body-lg text-muted">
                    {content.intelligenceDescription1}
                  </p>
                  <p className="body-lg text-muted">
                    {content.intelligenceDescription2}
                  </p>
                  <p className="body-lg text-muted">
                    {content.intelligenceDescription3}
                  </p>
                </div>
              </div>

              <div className="relative h-[450px]">
                <div className="absolute top-0 left-0 w-[55%] rounded-xl overflow-hidden rotate-[-3deg] z-10">
                  <Image
                    src="/images/roamswild/api-openmeteo.png"
                    alt="Open-Meteo weather API"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute top-8 right-0 w-[50%] rounded-xl overflow-hidden rotate-[2deg] z-20">
                  <Image
                    src="/images/roamswild/api-tomorrowio.png"
                    alt="Tomorrow.io weather API"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute bottom-12 left-4 w-[48%] rounded-xl overflow-hidden rotate-[2deg] z-30">
                  <Image
                    src="/images/roamswild/api-openstreetmap.png"
                    alt="OpenStreetMap API"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute bottom-0 right-6 w-[52%] rounded-xl overflow-hidden rotate-[-2deg] z-40">
                  <Image
                    src="/images/roamswild/api-recgov.png"
                    alt="Recreation.gov RIDB API"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Takeaway 3 */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "hsl(74, 68%, 56%, 0.12)" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex p-3 rounded-lg mb-5" style={{ backgroundColor: "hsl(74, 68%, 35%, 0.15)" }}>
            <Lightbulb
              size={28}
              weight="duotone"
              style={{ color: "hsl(74, 68%, 35%)" }}
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(74, 68%, 35%)" }}>
            Takeaway #3
          </p>
          <h3 className="heading-md mb-3">{content.takeaway3Title}</h3>
          <p className="body-md text-muted">
            {content.takeaway3Description}
          </p>
        </div>
      </section>

      {/* Key Product Experiences */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "hsl(36, 23%, 97%)" }}>
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="heading-xl mb-10">Key Product Experiences</h2>
            <p className="body-lg text-muted">
              The biggest pain point I wanted to solve was decision overload. When traveling, the problem isn&apos;t a lack of options—it&apos;s evaluating which ones are actually worth it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                image: "/images/roamswild/photoweather-ns.png",
                alt: "Photo Weather Conditions feature",
                title: "Photo Weather Conditions",
                description: "Standard weather apps show data; photographers need timing insight. This service evaluates cloud cover, cloud level, and wind during sunrise and sunset windows to determine whether conditions are promising. The result is a simplified signal with brief reasoning, helping users decide if the sky is likely to be clear, dramatic, or somewhere in between.",
              },
              {
                image: "/images/roamswild/besthikestoday-ns.png",
                alt: "Best Hikes Today feature",
                title: "Best Hikes Today",
                description: "Finds nearby hiking trails via Google Places and ranks them for right now using real-time weather from NOAA, sun position, crowd levels, and trail effort to surface the best hikes for today\u2019s conditions.",
              },
              {
                image: "/images/roamswild/surprisemesmall-ns.png",
                alt: "Surprise Me feature",
                title: "Surprise Me",
                description: "Picks a random outdoor region for you based on your location, scoring candidates by public land access, trail density, campsites, and biome diversity, then enriches the result with a scenic drive anchor from Overpass API.",
              },
              {
                image: "/images/roamswild/photoscout-ns.png",
                alt: "Photo Scout feature",
                title: "Photo Scout",
                description: "Analyzes terrain elevation data around a location to find optimal sunrise/sunset photography spots, identifying dramatic terrain features, calculating sun-terrain lighting geometry, verifying shadow-free sightlines to determine shooting locations.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 40px -8px rgba(0, 0, 0, 0.25)" }}>
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={626}
                  height={292}
                  className="w-full h-auto"
                />
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{card.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Takeaway 4 */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "hsl(74, 68%, 56%, 0.12)" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex p-3 rounded-lg mb-5" style={{ backgroundColor: "hsl(74, 68%, 35%, 0.15)" }}>
            <Lightbulb
              size={28}
              weight="duotone"
              style={{ color: "hsl(74, 68%, 35%)" }}
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(74, 68%, 35%)" }}>
            Takeaway #4
          </p>
          <h3 className="heading-md mb-3">{content.takeaway4Title}</h3>
          <p className="body-md text-muted">
            {content.takeaway4Description}
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-spacing" style={{ backgroundColor: "#F2F2F1" }}>
        <div className="container-site">
          <div className="case-study-section">
            <h2 className="heading-xl mb-20">{content.challengesTitle}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="space-y-6">
                  {(content.challenges as Array<{ title: string; description: string }>).map((challenge, i) => {
                    const icons = [Warning, PencilLine, Shuffle, UsersThree, Brain, Lightning, Scales];
                    const colors = [
                      { bg: "rgba(205, 106, 61, 0.12)", text: "#cd6a3d" },
                      { bg: "rgba(232, 90, 154, 0.12)", text: "#e85a9a" },
                      { bg: "rgba(234, 155, 12, 0.12)", text: "#ea9b0c" },
                      { bg: "rgba(107, 92, 230, 0.12)", text: "#6b5ce6" },
                      { bg: "rgba(60, 138, 121, 0.12)", text: "#3c8a79" },
                      { bg: "rgba(74, 150, 237, 0.12)", text: "#4a96ed" },
                      { bg: "rgba(106, 138, 29, 0.12)", text: "#6b8a1d" },
                    ];
                    const ChallengeIcon = icons[i % icons.length];
                    const color = colors[i % colors.length];
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: color.bg }}>
                          <ChallengeIcon size={20} weight="duotone" style={{ color: color.text }} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-charcoal mb-1">{challenge.title}</h3>
                          <p className="body-md text-muted">{challenge.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-6 sticky top-8">
                <div className="img-rounded">
                  <Image
                    src="/images/roamswild/claudeerror.png"
                    alt="Claude Code error during development"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="img-rounded max-w-[55%]">
                  <Image
                    src="/images/roamswild/texts.png"
                    alt="Text messages about RoamsWild development"
                    width={450}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="img-rounded max-w-[80%]">
                  <Image
                    src="/images/roamswild/baduidesign.png"
                    alt="Early UI design iteration showing rough layout"
                    width={480}
                    height={320}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tablet Showcase */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/roamswild/tablet-explore.png"
            alt="RoamsWild app on tablet showing campsite exploration"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 py-24 w-full flex justify-start" style={{ paddingLeft: "clamp(1.5rem, 5vw, 5rem)" }}>
          <div className="w-full max-w-xl">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/roamswild/spotdetail.png"
                alt="Spot detail card showing confidence scoring, data source, vehicle access, and coordinates"
                width={600}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & What's Next */}
      <section className="bg-rw-cream" style={{ paddingTop: "clamp(3rem, 8vw, 6rem)" }}>
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="heading-xl mb-10">{content.outcomesTitle}</h2>
                <p className="body-lg text-muted mb-4">
                  {content.outcomesDescription}
                </p>
                <p className="body-md text-muted mb-4">
                  {content.outcomesIntro}
                </p>
                <ul className="space-y-3 mb-8">
                  {(content.outcomesList as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="p-1 rounded-full mt-1 shrink-0" style={{ backgroundColor: "rgba(106, 138, 29, 0.2)" }}>
                        <CheckCircle size={16} weight="fill" style={{ color: "#6b8a1d" }} />
                      </div>
                      <p className="body-md text-muted">{item}</p>
                    </li>
                  ))}
                </ul>
                <p className="body-md text-muted mb-4">
                  {content.outcomesTradeoffsIntro}
                </p>
                <ul className="space-y-3 mb-8">
                  {(content.outcomesTradeoffs as Array<{ title: string; description: string }>).map((item, i) => (
                    <li key={i} className="body-md text-muted">
                      <strong className="text-charcoal">{item.title}</strong> {item.description}
                    </li>
                  ))}
                </ul>
                <p className="body-md text-muted">
                  {content.outcomesReflection}
                </p>
              </div>
              <div>
                <h2 className="heading-xl mb-10">{content.whatsNextTitle}</h2>
                <p className="body-lg text-muted mb-6">
                  {content.whatsNextDescription}
                </p>
                <ul className="space-y-4 mb-8">
                  {(content.whatsNextItems as Array<{ title: string; description: string }>).map((item, i) => {
                    const icons = [Mountains, ChartLine, WifiSlash, Shuffle];
                    const colors = [
                      { bg: "rgba(205, 106, 61, 0.12)", text: "#cd6a3d" },
                      { bg: "rgba(52, 181, 165, 0.12)", text: "#34b5a5" },
                      { bg: "rgba(74, 150, 237, 0.12)", text: "#4a96ed" },
                      { bg: "rgba(107, 92, 230, 0.12)", text: "#6b5ce6" },
                    ];
                    const Icon = icons[i % icons.length];
                    const color = colors[i % colors.length];
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: color.bg }}>
                          <Icon size={18} weight="duotone" style={{ color: color.text }} />
                        </div>
                        <p className="body-md text-muted">
                          <strong className="text-charcoal">{item.title}</strong> {item.description}
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <p className="body-md text-muted">
                  {content.whatsNextClosing}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 max-w-5xl mx-auto overflow-hidden rounded-t-xl" style={{ maxHeight: "450px", boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.35)" }}>
            <Image
              src="/images/roamswild/roadmap.png"
              alt="RoamsWild product roadmap in Notion showing backlog, in progress, launched, planned, and testing columns"
              width={1440}
              height={810}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Landing Page Showcase */}
      <section>
        <Image
          src="/images/roamswild/landingpagemacbook.png"
          alt="RoamsWild landing page displayed on a MacBook"
          width={1920}
          height={1080}
          className="w-full h-auto block"
        />
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
            <h2 className="heading-xl text-white mb-4">
              {content.ctaTitle}
            </h2>
            <p className="body-lg !text-white/70 mb-8">
              {content.ctaDescription}
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

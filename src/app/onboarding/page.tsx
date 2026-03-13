import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Lightning,
  UserCircle,
  ClockCountdown,
  ChatCircleDots,
  Repeat,
  CreditCard,
  Warning,
  CheckCircle,
  Gauge,
  UsersThree,
  Rocket,
  Code,
  Handshake,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { getPageContent } from "@/lib/content";
import type { Icon } from "@phosphor-icons/react";

const iconMap: Record<string, Icon> = {
  Lightning,
  UserCircle,
  ClockCountdown,
  ChatCircleDots,
  Repeat,
  CreditCard,
  Warning,
  CheckCircle,
  Gauge,
  UsersThree,
  Rocket,
  Code,
  Handshake,
};

export function generateMetadata() {
  const content = getPageContent("onboarding");
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default function OnboardingCaseStudy() {
  const content = getPageContent("onboarding");

  const resultsMetrics = content.resultsMetrics as Array<{
    icon: string;
    value: string;
    valueHighlight?: string;
    label: string;
  }>;

  const problemCards = content.problemCards as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  const discoveryPrinciples = content.discoveryPrinciples as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  const explorationsImages = content.explorationsImages as Array<{
    src: string;
    alt: string;
  }>;

  const phase1Steps = content.phase1Steps as Array<{
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  }>;

  const outcomesCards = content.outcomesCards as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  const overviewPartners = content.overviewPartners as Array<{
    name: string;
    icon: string;
  }>;

  const overviewCards = content.overviewCards as Array<{
    icon: string;
    title: string;
    type: string;
    description?: string;
    items?: string[];
  }>;

  const goalsMetrics = content.goalsMetrics as Array<{
    icon: string;
    title: string;
    measure: string;
    source: string;
    stretch?: boolean;
  }>;

  const discoveryBullets = content.discoveryBullets as string[];

  const designGoals = content.designGoals as string[];

  return (
    <>
      {/* Hero */}
      <section className="bg-bolt-dark text-white overflow-hidden relative flex items-center" style={{ minHeight: "calc(100vh - 5rem)" }}>
        <div className="container-site pt-24 pb-16 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Image
                  src={content.heroLogo}
                  alt={content.heroLogoAlt}
                  width={80}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h1 className="heading-hero !text-white mb-6" style={{ fontSize: "clamp(3.25rem, 7vw, 5.5rem)" }}>
                {content.heroTitle.replace(content.heroTitleHighlight, "").trim()}{" "}
                <span style={{ color: "hsl(67, 100%, 50%)" }}>{content.heroTitleHighlight}</span>
              </h1>
              <p className="body-lg text-white/70 max-w-md">
                {content.heroDescription}
              </p>
            </div>

            <div className="relative lg:-mr-[15vw] lg:-mt-16 lg:-mb-32">
              <Image
                src="/images/onboarding/bolt-hero-illustration.png"
                alt="Bolt lightning illustration with hands"
                width={800}
                height={800}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-start lg:pl-8">
                <Image
                  src="/images/onboarding/initial-select.png"
                  alt="Bolt onboarding package selection screen"
                  width={500}
                  height={500}
                  className="w-[55%] h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-wider text-bolt-green mb-3">
                  {content.overviewLabel}
                </p>
                <h2 className="heading-lg mb-6">
                  {content.overviewTitle}
                </h2>
                <p className="body-lg mb-6">
                  {content.overviewDescription}
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Role</p>
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: "hsl(67, 100%, 50%)", color: "#1a1a1a" }}
                  >
                    <UserCircle size={16} weight="duotone" />
                    {content.overviewRole}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Partners</p>
                  <div className="flex flex-wrap gap-2">
                    {overviewPartners.map((partner) => {
                      const PartnerIcon = iconMap[partner.icon];
                      return (
                        <span
                          key={partner.name}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-sand bg-white text-charcoal"
                        >
                          {PartnerIcon && <PartnerIcon size={14} weight="duotone" className="text-muted" />}
                          {partner.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-sand">
              {overviewCards.map((card, i) => {
                const CardIcon = iconMap[card.icon];
                return (
                  <div key={i} className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: "hsl(67, 100%, 85%)" }}>
                        {CardIcon && <CardIcon size={20} weight="duotone" style={{ color: "hsl(67, 60%, 30%)" }} />}
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">{card.title}</h3>
                    </div>
                    {card.type === "paragraph" ? (
                      <p className="body-md text-muted">{card.description}</p>
                    ) : (
                      <ul className="space-y-2">
                        {card.items?.map((item, j) => (
                          <li key={j} className="body-md text-muted flex items-start gap-2">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "hsl(67, 80%, 45%)" }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-bolt-green mb-3 text-center">
              {content.resultsLabel}
            </p>
            <h2 className="heading-lg mb-10 text-center">
              {content.resultsTitle}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resultsMetrics.map((metric, i) => {
                const Icon = iconMap[metric.icon];
                return (
                  <div key={i} className="metric-card border border-sand">
                    <div className="flex justify-center mb-3">
                      {Icon && (
                        <Icon
                          size={32}
                          weight="duotone"
                          className="text-bolt-green"
                        />
                      )}
                    </div>
                    <p className="metric-value">{metric.value}</p>
                    {metric.valueHighlight && (
                      <p className="metric-value text-bolt-green">{metric.valueHighlight}</p>
                    )}
                    <p className="metric-label mt-2">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-bolt-green mb-3">
                {content.problemLabel}
              </p>
              <h2 className="heading-lg mb-6">
                {content.problemTitle.replace(content.problemTitleHighlight, "").trim()}{" "}
                <span className="highlight">{content.problemTitleHighlight}</span>
              </h2>
              <p className="body-lg">
                {content.problemDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {problemCards.map((card, i) => {
                const Icon = iconMap[card.icon];
                return (
                  <div key={i} className="bg-white rounded-xl p-6 flex items-start gap-4">
                    <div className="p-2 bg-cream rounded-lg shrink-0">
                      {Icon && (
                        <Icon
                          size={24}
                          weight="duotone"
                          className="text-charcoal"
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">
                        {card.title}
                      </p>
                      <p className="text-sm text-muted mt-1">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>


          </div>
        </div>
        <div className="mt-12 overflow-hidden w-full">
          <div className="marquee-track">
            {[...Array(2)].map((_, copy) => (
              <div key={copy} className="marquee-slide" aria-hidden={copy > 0}>
                {[
                  { src: "/images/onboarding/legacy-form-1.png", alt: "Legacy onboarding form - Company section header" },
                  { src: "/images/onboarding/legacy-form-2.png", alt: "Legacy onboarding form - Company section fields" },
                  { src: "/images/onboarding/legacy-form-3.png", alt: "Legacy onboarding form - Contact Info section" },
                  { src: "/images/onboarding/legacy-form-4.png", alt: "Legacy onboarding form - Banking Info section" },
                  { src: "/images/onboarding/legacy-form-5.png", alt: "Legacy onboarding form - Validation errors" },
                  { src: "/images/onboarding/legacy-form-6.png", alt: "Legacy onboarding form - Review section" },
                  { src: "/images/onboarding/legacy-form-7.png", alt: "Legacy onboarding form - Payments Info section" },
                  { src: "/images/onboarding/legacy-form-8.png", alt: "Legacy onboarding form - Owner's Info section" },
                ].map((img) => (
                  <div key={img.src} className="flex-shrink-0 img-rounded" style={{ width: "640px" }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1646}
                      height={1099}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals & Metrics */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-bolt-green mb-3">
              {content.goalsLabel}
            </p>
            <h2 className="heading-lg mb-8">
              {content.goalsTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="body-lg mb-6">
                  {content.goalsDescription1}
                </p>
                <p className="body-lg">
                  {content.goalsDescription2}
                </p>
              </div>

              <div className="bg-cream overflow-hidden">
                <table className="w-full text-left">
                  <tbody>
                    {goalsMetrics.map((metric, i) => {
                      const MetricIcon = iconMap[metric.icon];
                      return (
                        <tr key={metric.title} className={i < goalsMetrics.length - 1 ? "border-b border-sand/50" : ""}>
                          <td className="py-4 pl-5 pr-3 w-10">
                            {MetricIcon && <MetricIcon size={20} weight="duotone" style={{ color: "#FF9AF1" }} />}
                          </td>
                          <td className="py-4 pr-4">
                            <p className="font-semibold text-charcoal text-sm">
                              {metric.title}
                              {metric.stretch && <span className="ml-1 font-normal text-muted">(Stretch)</span>}
                            </p>
                          </td>
                          <td className="py-4 pr-5 text-sm text-muted">{metric.measure}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <ScrollReveal className="mt-12">
              <div className="img-rounded">
                <Image
                  src={content.problemImage}
                  alt={content.problemImageAlt}
                  width={1440}
                  height={810}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-muted text-center mt-3">{content.goalsImageCaption}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Discovery & Process Mapping */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-bolt-green mb-3">
                {content.discoveryLabel}
              </p>
              <h2 className="heading-lg mb-6">
                {content.discoveryTitle}
              </h2>
              <p className="body-lg mb-6">
                {content.discoveryDescription}
              </p>
              <p className="body-lg mb-6">
                {content.discoveryDescription2}
              </p>
              <ul className="space-y-2 mb-6">
                {discoveryBullets.map((bullet, i) => (
                  <li key={i} className="body-lg flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF9AF1" }} />
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="body-lg">
                {content.discoveryDescription3}
              </p>
            </div>

            <ScrollReveal className="img-rounded">
              <Image
                src={content.discoveryImage}
                alt={content.discoveryImageAlt}
                width={1440}
                height={810}
                className="w-full h-auto"
              />
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-12 overflow-hidden w-full" style={{ height: "600px" }}>
          <div className="m2-flow-pan">
            <Image
              src="/images/onboarding/m2-flow.png"
              alt="M2 onboarding process flow diagram"
              width={4800}
              height={800}
              className="h-full w-auto max-w-none"
            />
          </div>
        </div>
      </section>

      {/* Design Explorations */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-center mb-12 max-w-5xl mx-auto">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-bolt-green mb-3">
                  {content.explorationsLabel}
                </p>
                <h2 className="heading-lg mb-6">
                  {content.explorationsTitle}
                </h2>
                <p className="body-lg">
                  {content.explorationsFullDescription}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">Design Goals</p>
                {designGoals.map((goal, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} weight="duotone" style={{ color: "#FF9AF1" }} className="flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-charcoal">{goal}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        <div className="overflow-hidden">
          <div className="ml-auto" style={{ width: "85%", marginRight: "-5%" }}>
            {explorationsImages.map((img, i) => (
              <ScrollReveal key={i} className="img-rounded">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1440}
                  height={2400}
                  className="w-full h-auto"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Phase I Design Flow */}
      <section className="section-spacing bg-charcoal">
        <div className="container-site">
          <div className="case-study-section">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-3">
                {content.phase1FlowLabel}
              </p>
              <h2 className="heading-lg !text-white mb-6">
                {content.phase1FlowTitle}
              </h2>
            </div>

            <ScrollReveal>
              <Image
                src="/images/onboarding/phase1-prototype.gif"
                alt="Phase I onboarding prototype walkthrough"
                width={1440}
                height={900}
                className="w-full h-auto"
                unoptimized
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Phase 1 Design */}
      <section className="section-spacing bg-white">
        <div className="container-site" style={{ maxWidth: "1440px" }}>
          <div className="case-study-section">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-bolt-green mb-3">
                {content.phase1Label}
              </p>
              <h2 className="heading-lg mb-6">
                {content.phase1Title}
              </h2>
              <p className="body-lg">
                {content.phase1Description}
              </p>
            </div>

            <div className="space-y-16">
              {phase1Steps.map((step, i) => {
                const isEven = i % 2 === 1;
                const isGif = step.image.endsWith(".gif");
                return (
                  <div key={i} className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 items-center">
                    {isEven ? (
                      <>
                        <ScrollReveal className="order-2 lg:order-1 img-rounded">
                          <Image
                            src={step.image}
                            alt={step.imageAlt}
                            width={720}
                            height={480}
                            className="w-full h-auto"
                            {...(isGif ? { unoptimized: true } : {})}
                          />
                        </ScrollReveal>
                        <div className="order-1 lg:order-2">
                          <h3 className="heading-md mb-4">{step.title}</h3>
                          <p className="body-md">{step.description}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <h3 className="heading-md mb-4">{step.title}</h3>
                          <p className="body-md">{step.description}</p>
                        </div>
                        <ScrollReveal className="img-rounded">
                          <Image
                            src={step.image}
                            alt={step.imageAlt}
                            width={720}
                            height={480}
                            className="w-full h-auto"
                            {...(isGif ? { unoptimized: true } : {})}
                          />
                        </ScrollReveal>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-spacing bg-bolt-dark text-white">
        <div className="container-site">
          <div className="case-study-section">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-bolt-green mb-3">
                {content.outcomesLabel}
              </p>
              <h2 className="heading-lg text-white mb-6">
                {content.outcomesTitle}
              </h2>
              <p className="body-lg text-white/70">
                {content.outcomesDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {outcomesCards.map((card, i) => {
                const Icon = iconMap[card.icon];
                return (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    {Icon && (
                      <Icon
                        size={28}
                        weight="duotone"
                        className="text-bolt-green mb-3"
                      />
                    )}
                    <p className="font-semibold text-white mb-2">
                      {card.title}
                    </p>
                    <p className="text-sm text-white/60">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="relative overflow-hidden p-10 md:p-16" style={{ backgroundColor: "hsl(214, 100%, 50%)" }}>
            <div className="hidden lg:block absolute top-0 bottom-0 w-px bg-white/15" style={{ left: "55%" }} />
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-xl order-2 lg:order-1">
              <h2 className="heading-md text-white mb-6">
                {content.footerHeading}
              </h2>
              <div className="space-y-12">
                <div>
                  <Link
                    href={content.footerButtonHref}
                    className="btn-primary inline-flex items-center gap-2"
                    style={{ backgroundColor: "hsl(152, 56%, 37%)" }}
                  >
                    <ArrowLeft size={18} weight="bold" />
                    {content.footerButtonText}
                  </Link>
                </div>
                <div>
                  <h2 className="heading-md text-white mb-3">
                    {content.footerAboutText}
                  </h2>
                  <Link
                    href={content.footerAboutHref}
                    className="btn-primary inline-flex items-center gap-2"
                    style={{ backgroundColor: "hsl(152, 56%, 37%)" }}
                  >
                    {content.footerAboutButtonText}
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            </div>

            <Link href={content.nextProjectHref} className="group block order-1 lg:order-2">
              <h2 className="heading-xl text-white mb-6 text-center">
                {content.nextProjectTitle}
              </h2>
              <div className="mb-4">
                <Image
                  src={content.nextProjectImage}
                  alt={content.nextProjectImageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-white font-semibold group-hover:text-white/80 transition-colors">
                {content.nextProjectDescription}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-white/50 group-hover:text-white/70 transition-colors mt-2">
                {content.nextProjectLinkText} <ArrowRight size={14} weight="bold" />
              </span>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

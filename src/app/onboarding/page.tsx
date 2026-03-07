import Image from "next/image";
import {
  ArrowLeft,
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
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
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
};

export const metadata = {
  title: "Bolt Onboarding Case Study — Michelle Taylor",
  description:
    "How Michelle Taylor redesigned Bolt's merchant onboarding from a 70+ day manual process to an automated experience completed in minutes.",
};

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

  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-bolt-dark text-white">
        <div className="container-site">
          <Link
            href={content.backLinkHref}
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft size={16} weight="bold" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <Image
              src={content.heroLogo}
              alt={content.heroLogoAlt}
              width={80}
              height={32}
              className="object-contain"
            />
          </div>

          <div className="max-w-3xl mb-12">
            <h1 className="heading-xl text-white mb-6">
              {content.heroTitle.replace(content.heroTitleHighlight, "").trim()}{" "}
              <span className="text-bolt-green">{content.heroTitleHighlight}</span>
            </h1>
            <p className="body-lg text-white/70">
              {content.heroDescription}
            </p>
          </div>

          <div className="img-rounded">
            <Image
              src={content.heroImage}
              alt={content.heroImageAlt}
              width={1440}
              height={810}
              className="w-full h-auto"
              priority
            />
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

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-1">
                    Role
                  </p>
                  <p className="font-semibold text-charcoal">
                    {content.overviewRole}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-1">
                    Company
                  </p>
                  <p className="font-semibold text-charcoal">{content.overviewCompany}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-1">
                    Goal
                  </p>
                  <p className="body-md">
                    {content.overviewGoal}
                  </p>
                </div>
              </div>
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

            <div className="img-rounded">
              <Image
                src={content.problemImage}
                alt={content.problemImageAlt}
                width={1440}
                height={810}
                className="w-full h-auto"
              />
            </div>
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {discoveryPrinciples.map((principle, i) => {
                const Icon = iconMap[principle.icon];
                return (
                  <div key={i} className="bg-cream rounded-xl p-6">
                    {Icon && (
                      <Icon
                        size={28}
                        weight="duotone"
                        className="text-bolt-green mb-3"
                      />
                    )}
                    <p className="font-semibold text-charcoal text-sm mb-1">
                      {principle.title}
                    </p>
                    <p className="text-sm text-muted">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="img-rounded">
              <Image
                src={content.discoveryImage}
                alt={content.discoveryImageAlt}
                width={1440}
                height={810}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Explorations */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-bolt-green mb-3">
                {content.explorationsLabel}
              </p>
              <h2 className="heading-lg mb-6">
                {content.explorationsTitle}
              </h2>
              <p className="body-lg">
                {content.explorationsDescription}
              </p>
            </div>

            <div className="space-y-8">
              {explorationsImages.map((img, i) => (
                <div key={i} className="img-rounded">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1440}
                    height={810}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 Design */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <div className="max-w-3xl mb-12">
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
                  <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {isEven ? (
                      <>
                        <div className="order-2 lg:order-1 img-rounded">
                          <Image
                            src={step.image}
                            alt={step.imageAlt}
                            width={720}
                            height={480}
                            className="w-full h-auto"
                            {...(isGif ? { unoptimized: true } : {})}
                          />
                        </div>
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
                        <div className="img-rounded">
                          <Image
                            src={step.image}
                            alt={step.imageAlt}
                            width={720}
                            height={480}
                            className="w-full h-auto"
                            {...(isGif ? { unoptimized: true } : {})}
                          />
                        </div>
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

      {/* Back to Work */}
      <section className="section-spacing bg-cream">
        <div className="container-site text-center">
          <Link
            href={content.backLinkHref}
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} weight="bold" />
            {content.backLinkText}
          </Link>
        </div>
      </section>
    </>
  );
}

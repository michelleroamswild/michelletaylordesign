import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  EnvelopeSimple,
  DeviceMobileSpeaker,
  ChartLineUp,
  ShoppingCartSimple,
  ClockCountdown,
  Storefront,
  ShieldCheck,
  Lightbulb,
  RocketLaunch,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { getPageContent } from "@/lib/content";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  DeviceMobileSpeaker,
  ClockCountdown,
  Lightbulb,
  ChartLineUp,
};

const futureVisionIcons = [
  "DeviceMobileSpeaker",
  "ClockCountdown",
  "Lightbulb",
  "ChartLineUp",
];

export function generateMetadata() {
  const content = getPageContent("bolt-abandoned-carts");
  return {
    title: content.pageTitle,
    description: content.pageDescription,
  };
}

export default function BoltAbandonedCarts() {
  const content = getPageContent("bolt-abandoned-carts");
  const resultsMetrics = content.resultsMetrics as Array<{
    value: string;
    label: string;
  }>;

  const emailRedesignImages = content.emailRedesignImages as Array<{
    src: string;
    alt: string;
  }>;

  const dashboardImages = content.dashboardImages as Array<{
    src: string;
    alt: string;
  }>;

  const futureVisionCards = content.futureVisionCards as Array<{
    title: string;
    description: string;
  }>;

  return (
    <>
      {/* Back Navigation */}
      <div className="bg-cream pt-6">
        <div className="container-site">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted hover:text-charcoal transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} weight="bold" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src={content.heroLogo.src}
              alt={content.heroLogo.alt}
              width={80}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          <div className="max-w-3xl mb-12">
            <h1 className="heading-xl mb-6">
              {content.heroTitle.split(content.heroHighlight)[0]}
              <span className="highlight">{content.heroHighlight}</span>
              {content.heroTitle.split(content.heroHighlight)[1]}
            </h1>
            <p className="body-lg">{content.heroDescription}</p>
          </div>
          <div className="img-rounded">
            <Image
              src={content.heroImage.src}
              alt={content.heroImage.alt}
              width={1440}
              height={810}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg">
                    <ShoppingCartSimple
                      size={24}
                      weight="duotone"
                      className="text-charcoal"
                    />
                  </div>
                  <p className="text-sm font-semibold text-muted uppercase tracking-wide">
                    {content.problemLabel}
                  </p>
                </div>
                <h2 className="heading-lg mb-6">{content.problemTitle}</h2>
                <p
                  className="body-md mb-4"
                  dangerouslySetInnerHTML={{
                    __html: content.problemDescription1.replace(
                      content.problemDescription1Bold,
                      `<strong class="text-charcoal">${content.problemDescription1Bold}</strong>`
                    ),
                  }}
                />
                <p className="body-md">{content.problemDescription2}</p>
              </div>
              <ScrollReveal className="img-rounded">
                <Image
                  src={content.problemImage.src}
                  alt={content.problemImage.alt}
                  width={720}
                  height={540}
                  className="w-full h-auto"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-lg">
                  <ChartLineUp
                    size={24}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <p className="text-sm font-semibold text-muted uppercase tracking-wide">
                  {content.resultsLabel}
                </p>
              </div>
              <h2 className="heading-lg mb-4">{content.resultsTitle}</h2>
              <p className="body-md">{content.resultsDescription}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {resultsMetrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <p className="metric-value text-accent-dark">
                    {metric.value}
                  </p>
                  <p className="metric-label">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Optimized Notification Timing */}
      <section className="bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg">
                    <ClockCountdown
                      size={24}
                      weight="duotone"
                      className="text-charcoal"
                    />
                  </div>
                  <p className="text-sm font-semibold text-muted uppercase tracking-wide">
                    {content.timingLabel}
                  </p>
                </div>
                <h2 className="heading-lg mb-6">{content.timingTitle}</h2>
                <p
                  className="body-md mb-4"
                  dangerouslySetInnerHTML={{
                    __html: content.timingDescription1
                      .replace(
                        content.timingDescription1Bold1,
                        `<strong class="text-charcoal">${content.timingDescription1Bold1}</strong>`
                      )
                      .replace(
                        content.timingDescription1Bold2,
                        `<strong class="text-charcoal">${content.timingDescription1Bold2}</strong>`
                      ),
                  }}
                />
                <p
                  className="body-md"
                  dangerouslySetInnerHTML={{
                    __html: content.timingDescription2.replace(
                      content.timingDescription2Bold,
                      `<strong class="text-charcoal">${content.timingDescription2Bold}</strong>`
                    ),
                  }}
                />
              </div>
              <ScrollReveal className="img-rounded">
                <Image
                  src={content.timingImage.src}
                  alt={content.timingImage.alt}
                  width={720}
                  height={540}
                  className="w-full h-auto"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Email & SMS Redesign */}
      <section className="bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="max-w-2xl mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-lg">
                  <EnvelopeSimple
                    size={24}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <p className="text-sm font-semibold text-muted uppercase tracking-wide">
                  {content.emailRedesignLabel}
                </p>
              </div>
              <h2 className="heading-lg mb-6">
                {content.emailRedesignTitle}
              </h2>
              <p
                className="body-md"
                dangerouslySetInnerHTML={{
                  __html: content.emailRedesignDescription.replace(
                    content.emailRedesignDescriptionBold,
                    `<strong class="text-charcoal">${content.emailRedesignDescriptionBold}</strong>`
                  ),
                }}
              />
            </div>

            <ScrollReveal className="img-rounded mb-8">
              <Image
                src={emailRedesignImages[0].src}
                alt={emailRedesignImages[0].alt}
                width={1440}
                height={810}
                className="w-full h-auto"
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {emailRedesignImages.slice(1).map((img, index) => (
                <ScrollReveal key={index} className="img-rounded">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={720}
                    height={540}
                    className="w-full h-auto"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Merchant Dashboard */}
      <section className="bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg">
                    <Storefront
                      size={24}
                      weight="duotone"
                      className="text-charcoal"
                    />
                  </div>
                  <p className="text-sm font-semibold text-muted uppercase tracking-wide">
                    {content.dashboardLabel}
                  </p>
                </div>
                <h2 className="heading-lg mb-6">{content.dashboardTitle}</h2>
                <p
                  className="body-md mb-4"
                  dangerouslySetInnerHTML={{
                    __html: content.dashboardDescription1.replace(
                      content.dashboardDescription1Bold,
                      `<strong class="text-charcoal">${content.dashboardDescription1Bold}</strong>`
                    ),
                  }}
                />
                <p
                  className="body-md"
                  dangerouslySetInnerHTML={{
                    __html: content.dashboardDescription2.replace(
                      content.dashboardDescription2Bold,
                      `<strong class="text-charcoal">${content.dashboardDescription2Bold}</strong>`
                    ),
                  }}
                />
              </div>
              <ScrollReveal className="img-rounded">
                <Image
                  src={dashboardImages[0].src}
                  alt={dashboardImages[0].alt}
                  width={720}
                  height={540}
                  className="w-full h-auto"
                />
              </ScrollReveal>
            </div>

            <ScrollReveal className="img-rounded mt-10">
              <Image
                src={dashboardImages[1].src}
                alt={dashboardImages[1].alt}
                width={1440}
                height={810}
                className="w-full h-auto"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SMS Consent Management */}
      <section className="bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal className="order-2 lg:order-1 img-rounded">
                <Image
                  src={content.smsConsentImage.src}
                  alt={content.smsConsentImage.alt}
                  width={720}
                  height={540}
                  className="w-full h-auto"
                />
              </ScrollReveal>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg">
                    <ShieldCheck
                      size={24}
                      weight="duotone"
                      className="text-charcoal"
                    />
                  </div>
                  <p className="text-sm font-semibold text-muted uppercase tracking-wide">
                    {content.smsConsentLabel}
                  </p>
                </div>
                <h2 className="heading-lg mb-6">{content.smsConsentTitle}</h2>
                <p
                  className="body-md mb-4"
                  dangerouslySetInnerHTML={{
                    __html: content.smsConsentDescription1.replace(
                      content.smsConsentDescription1Bold,
                      `<strong class="text-charcoal">${content.smsConsentDescription1Bold}</strong>`
                    ),
                  }}
                />
                <p className="body-md">{content.smsConsentDescription2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="max-w-2xl mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-lg">
                  <RocketLaunch
                    size={24}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <p className="text-sm font-semibold text-muted uppercase tracking-wide">
                  {content.futureVisionLabel}
                </p>
              </div>
              <h2 className="heading-lg mb-6">
                {content.futureVisionTitle}
              </h2>
              <p className="body-md">{content.futureVisionDescription}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {futureVisionCards.map((card, index) => {
                const IconComponent = iconMap[futureVisionIcons[index]];
                return (
                  <div key={index} className="bg-white rounded-xl p-6">
                    <div className="p-2 bg-cream rounded-lg inline-block mb-4">
                      {IconComponent && (
                        <IconComponent
                          size={24}
                          weight="duotone"
                          className="text-charcoal"
                        />
                      )}
                    </div>
                    <h3 className="heading-md text-lg mb-2">{card.title}</h3>
                    <p className="body-md text-sm">{card.description}</p>
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
          <div className="relative overflow-hidden p-10 md:p-16" style={{ backgroundColor: "hsl(209, 100%, 25%)" }}>
            <div className="hidden lg:block absolute top-0 bottom-0 w-px bg-white/15" style={{ left: "55%" }} />
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
                Thank you for reading
              </p>
              <h2 className="heading-md text-white mb-4">
                Want to see more of my work?
              </h2>
              <p className="body-lg !text-white/70 mb-8">
                Check out my other case studies or head back to the portfolio.
              </p>
              <Link
                href="/"
                className="btn-primary inline-flex items-center gap-2 hover:opacity-85 hover:-translate-y-0.5 transition-all"
                style={{ backgroundColor: "hsl(249, 80%, 60%)" }}
              >
                <ArrowLeft size={18} weight="bold" />
                Back to Portfolio
              </Link>
            </div>

            <Link href="/expense-management" className="group block">
              <h2 className="heading-xl text-white mb-6">
                Next Project
              </h2>
              <div className="mb-4">
                <Image
                  src="/images/expense-management/ExpenseManagementMobile.png"
                  alt="Capital One expense management screens"
                  width={600}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-white font-semibold group-hover:text-white/80 transition-colors">
                Automating admin workflows and simplifying expense reporting
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-white/50 group-hover:text-white/70 transition-colors mt-2">
                View Case Study <ArrowRight size={14} weight="bold" />
              </span>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

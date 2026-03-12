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
  UserCircle,
  Code,
  Megaphone,
  Target,
  MagnifyingGlass,
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
  UserCircle,
  Code,
  Megaphone,
  ShieldCheck,
  ShoppingCartSimple,
  Target,
  MagnifyingGlass,
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

  const overviewPartners = content.overviewPartners as Array<{
    name: string;
    icon: string;
  }>;

  const overviewMetrics = content.overviewMetrics as Array<{
    name: string;
    icon: string;
  }>;

  const overviewCards = content.overviewCards as Array<{
    title: string;
    icon: string;
    description: string;
  }>;

  const gtmBullets = content.gtmBullets as Array<string>;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "hsl(214, 100%, 50%)", height: "calc(100vh - 5rem)" }}>
        <div className="container-site pt-16 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src={content.heroLogo.src}
              alt={content.heroLogo.alt}
              width={80}
              height={32}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          <div className="max-w-4xl">
            <h1 className="heading-hero !text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              {content.heroTitle.split(content.heroHighlight)[0]}
              <span style={{ color: "#E1FF00" }}>{content.heroHighlight}</span>
              {content.heroTitle.split(content.heroHighlight)[1]}
            </h1>
          </div>
        </div>

        <div className="container-site mt-8">
          <div className="img-rounded">
            <Image
              src="/images/abandoned-carts/OverviewImage.png"
              alt="Abandoned carts dashboard and email notification overview"
              width={1440}
              height={810}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "hsl(214, 100%, 50%)" }}>
                  {content.overviewLabel}
                </p>
                <h2 className="heading-lg mb-6">
                  {content.overviewTitle}
                </h2>
                <p className="body-lg mb-4" dangerouslySetInnerHTML={{ __html: content.overviewDescription1 }} />
                <p className="body-lg" dangerouslySetInnerHTML={{ __html: content.overviewDescription2 }} />
              </div>

              <div className="space-y-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">Role</p>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "hsl(214, 100%, 50%)" }}>
                    <UserCircle size={14} weight="duotone" />
                    {content.overviewRole}
                  </span>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">Partners</p>
                  <div className="flex flex-wrap gap-2">
                    {overviewPartners.map((partner) => {
                      const PartnerIcon = iconMap[partner.icon];
                      return (
                        <span key={partner.name} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: "hsl(214, 90%, 92%)", color: "hsl(214, 100%, 35%)" }}>
                          {PartnerIcon && <PartnerIcon size={14} weight="duotone" />}
                          {partner.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">Targeted Business Metrics</p>
                  <div className="flex flex-wrap gap-2">
                    {overviewMetrics.map((metric) => {
                      const MetricIcon = iconMap[metric.icon];
                      return (
                        <span key={metric.name} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: "hsl(214, 90%, 92%)", color: "hsl(214, 100%, 35%)" }}>
                          {MetricIcon && <MetricIcon size={14} weight="duotone" />}
                          {metric.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">Research</p>
                  <p className="body-md">
                    {content.overviewResearch}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {overviewCards.map((card) => {
                const CardIcon = iconMap[card.icon];
                return (
                  <div key={card.title} className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: "hsl(214, 90%, 92%)" }}>
                        {CardIcon && <CardIcon size={20} weight="duotone" style={{ color: "hsl(214, 100%, 40%)" }} />}
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">{card.title}</h3>
                    </div>
                    <p className="body-md text-muted">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <ScrollReveal className="img-rounded mt-12">
              <Image
                src="/images/abandoned-carts/ac-research.png"
                alt="Competitive research - current experience analysis and email/SMS inspiration"
                width={1440}
                height={900}
                className="w-full h-auto"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Requirements Definition */}
      <section className="section-spacing" style={{ backgroundColor: "rgb(240, 240, 234)" }}>
        <div className="container-site">
          <div className="case-study-section">
            <div className="max-w-3xl mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "hsl(214, 100%, 50%)" }}>
                {content.requirementsLabel}
              </p>
              <h1 className="heading-hero mb-4">
                {content.requirementsTitle}
              </h1>
              <p className="body-lg">
                {content.requirementsDescription}
              </p>
            </div>

            {/* 1. Optimized Notification Timing — text left, image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ClockCountdown size={22} weight="duotone" style={{ color: "hsl(214, 100%, 50%)" }} />
                  <p className="text-sm font-semibold text-muted uppercase tracking-wide">
                    {content.timingLabel}
                  </p>
                </div>
                <h2 className="heading-md mb-6">{content.timingTitle}</h2>
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

            {/* 2. Email & SMS Redesign — image left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
              <ScrollReveal className="order-2 lg:order-1">
                <div className="relative">
                  <Image
                    src="/images/abandoned-carts/AC-Emails.png"
                    alt="Redesigned abandoned cart email templates showing mobile and desktop views"
                    width={1440}
                    height={810}
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute -bottom-6 -right-4 w-[40%] drop-shadow-xl">
                    <Image
                      src="/images/abandoned-carts/ACTextBubble.png"
                      alt="SMS notification text bubble for abandoned cart recovery"
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </ScrollReveal>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <EnvelopeSimple size={22} weight="duotone" style={{ color: "hsl(214, 100%, 50%)" }} />
                  <p className="text-sm font-semibold text-muted uppercase tracking-wide">
                    {content.emailRedesignLabel}
                  </p>
                </div>
                <h2 className="heading-md mb-6">
                  {content.emailRedesignSectionTitle}
                </h2>
                <p className="body-md mb-4">
                  {content.emailRedesignSectionDescription1}
                </p>
                <p className="body-md" dangerouslySetInnerHTML={{ __html: content.emailRedesignSectionDescription2Html }} />
              </div>
            </div>

            {/* 3. Merchant Dashboard — text left, image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Storefront size={22} weight="duotone" style={{ color: "hsl(214, 100%, 50%)" }} />
                  <p className="text-sm font-semibold text-muted uppercase tracking-wide">
                    {content.dashboardLabel}
                  </p>
                </div>
                <h2 className="heading-md mb-6">{content.dashboardTitle}</h2>
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

            {/* 4. SMS Consent — image left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
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
                  <ShieldCheck size={22} weight="duotone" style={{ color: "hsl(214, 100%, 50%)" }} />
                  <p className="text-sm font-semibold text-muted uppercase tracking-wide">
                    {content.smsConsentLabel}
                  </p>
                </div>
                <h2 className="heading-md mb-6">{content.smsConsentTitle}</h2>
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

            {/* 5. Supporting Go-to-Market — text left, image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Megaphone size={22} weight="duotone" style={{ color: "hsl(214, 100%, 50%)" }} />
                  <p className="text-sm font-semibold text-muted uppercase tracking-wide">
                    {content.gtmLabel}
                  </p>
                </div>
                <h2 className="heading-md mb-6">
                  {content.gtmTitle}
                </h2>
                <p className="body-md mb-4">
                  {content.gtmDescription}
                </p>
                <ul className="space-y-3 body-md">
                  {gtmBullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-1.5">
                      <span className="mt-[0.65rem] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "hsl(214, 100%, 50%)" }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <ScrollReveal>
                <div className="relative">
                  <Image
                    src="/images/abandoned-carts/ac-landingpage.png"
                    alt="Abandoned carts product landing page for merchant onboarding"
                    width={1440}
                    height={810}
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute -bottom-6 -right-4 w-[45%] drop-shadow-xl">
                    <Image
                      src="/images/abandoned-carts/callout-banner.png"
                      alt="Thank you for your interest confirmation banner"
                      width={400}
                      height={200}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Full-width email mockup with parallax */}
      <section
        className="relative overflow-hidden"
        style={{ height: "clamp(400px, 50vh, 600px)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('/images/abandoned-carts/AbandonedCartEmail.png')" }}
        />
      </section>

      {/* Full-width dashboard overview */}
      <section style={{ backgroundColor: "rgb(240, 240, 234)" }}>
        <div className="container-site section-spacing">
          <Image
            src="/images/abandoned-carts/OverviewImage.png"
            alt="Abandoned carts merchant dashboard with email notification preview"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </section>



      {/* Results */}
      <section className="section-spacing" style={{ backgroundColor: "#68D8FC" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-center">
            {/* CEO LinkedIn post */}
            <ScrollReveal>
              <div className="drop-shadow-xl max-w-sm mx-auto">
                <Image
                  src="/images/abandoned-carts/ceo-mention.png"
                  alt="Bolt CEO Justin Grooms LinkedIn post highlighting Abandoned Carts performance metrics"
                  width={600}
                  height={900}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </ScrollReveal>

            {/* Results content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(0,0,0,0.4)" }}>
                {content.resultsLabel}
              </p>
              <h2 className="heading-lg mb-4">{content.resultsTitle}</h2>
              <p className="body-md mb-8">{content.resultsDescription}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {resultsMetrics.map((metric, index) => (
                  <div key={index} className="rounded-xl p-4 text-center" style={{ backgroundColor: "rgba(255,255,255,0.4)", backdropFilter: "blur(10px)" }}>
                    <p className="text-xl md:text-2xl font-bold text-charcoal mb-1">
                      {metric.value}
                    </p>
                    <p className="text-xs text-muted">{metric.label}</p>
                  </div>
                ))}
              </div>

              <p className="body-md">
                {content.resultsOutro}
              </p>
              <p className="text-xs text-charcoal/70 mt-4">
                {content.resultsFootnote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="section-spacing relative overflow-hidden" style={{ backgroundColor: "rgb(240, 240, 234)" }}>
        <div className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[50%] pointer-events-none">
          <Image
            src="/images/abandoned-carts/eliminate-friction.webp"
            alt=""
            width={800}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <div className="container-site relative z-10">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "hsl(214, 100%, 50%)" }}>
              {content.futureVisionLabel}
            </p>
            <h2 className="heading-lg mb-4">{content.futureVisionTitle}</h2>
            <p className="body-md">{content.futureVisionDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mb-12">
            {futureVisionCards.map((card, index) => {
              const IconComponent = iconMap[futureVisionIcons[index]];
              return (
                <div key={index} className="bg-white rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: "hsl(214, 90%, 92%)" }}>
                      {IconComponent && (
                        <IconComponent
                          size={22}
                          weight="duotone"
                          style={{ color: "hsl(214, 100%, 50%)" }}
                        />
                      )}
                    </div>
                    <h3 className="font-bold text-charcoal">{card.title}</h3>
                  </div>
                  <p className="body-md text-muted">{card.description}</p>
                </div>
              );
            })}
          </div>

          <p className="body-lg max-w-3xl">
            {content.futureVisionOutro}
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="relative overflow-hidden p-10 md:p-16" style={{ backgroundColor: "hsl(209, 100%, 25%)" }}>
            <div className="hidden lg:block absolute top-0 bottom-0 w-px bg-white/15" style={{ left: "55%" }} />
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-xl order-2 lg:order-1">
              <h2 className="heading-md text-white mb-6">
                {content.footerCtaTitle}
              </h2>
              <div className="space-y-12">
                <div>
                  <Link
                    href="/"
                    className="btn-primary inline-flex items-center gap-2 hover:opacity-85 hover:-translate-y-0.5 transition-all"
                    style={{ backgroundColor: "hsl(249, 80%, 60%)" }}
                  >
                    <ArrowLeft size={18} weight="bold" />
                    {content.footerCtaButtonText}
                  </Link>
                </div>
                <div>
                  <h2 className="heading-md text-white mb-3">
                    {content.footerAboutText}
                  </h2>
                  <Link
                    href={content.footerAboutHref}
                    className="btn-primary inline-flex items-center gap-2 hover:opacity-85 hover:-translate-y-0.5 transition-all"
                    style={{ backgroundColor: "hsl(249, 80%, 60%)" }}
                  >
                    {content.footerAboutButtonText}
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            </div>

            <Link href={content.footerNextProjectHref} className="group block order-1 lg:order-2">
              <h2 className="heading-xl text-white mb-6 text-center">
                {content.footerNextProjectTitle}
              </h2>
              <div className="mb-4">
                <Image
                  src={content.footerNextProjectImage.src}
                  alt={content.footerNextProjectImage.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-white font-semibold group-hover:text-white/80 transition-colors">
                {content.footerNextProjectDescription}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-white/50 group-hover:text-white/70 transition-colors mt-2">
                {content.footerNextProjectLinkText} <ArrowRight size={14} weight="bold" />
              </span>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import {
  ArrowLeft,
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

export const metadata = {
  title: "Bolt Abandoned Carts Case Study — Michelle Taylor",
  description:
    "How Michelle Taylor redesigned abandoned cart recovery at Bolt, increasing conversion by up to 26% and recovering $18M in lost revenue.",
};

export default function BoltAbandonedCarts() {
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
              src="/images/logos/BoltLogo.png"
              alt="Bolt"
              width={80}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          <div className="max-w-3xl mb-12">
            <h1 className="heading-xl mb-6">
              Increasing Abandoned Cart Conversion by{" "}
              <span className="highlight">up to 26%</span>
            </h1>
            <p className="body-lg">
              Redesigned abandoned cart recovery emails and SMS with
              direct-to-checkout links, pre-loading saved cart contents and
              shopper information for one-click checkout — recovering millions in
              potentially lost revenue for Bolt merchants.
            </p>
          </div>
          <div className="img-rounded">
            <Image
              src="/images/abandoned-carts/ACHero.png"
              alt="Abandoned cart recovery hero showing email and SMS notifications"
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
                    The Problem
                  </p>
                </div>
                <h2 className="heading-lg mb-6">
                  Cart abandonment plagues e-commerce at massive scale
                </h2>
                <p className="body-md mb-4">
                  Across industries, <strong className="text-charcoal">45-70% of shopping carts are abandoned</strong> before
                  checkout. For Bolt&apos;s merchants, this represented millions
                  of dollars in potentially lost revenue every month.
                </p>
                <p className="body-md">
                  The existing recovery emails were generic, poorly timed, and
                  directed shoppers back to merchant homepages rather than their
                  saved carts — losing all cart context and requiring shoppers to
                  start over. The friction was too high, and conversion suffered
                  as a result.
                </p>
              </div>
              <div className="img-rounded">
                <Image
                  src="/images/abandoned-carts/Before.png"
                  alt="Before state of abandoned cart emails directing to homepages"
                  width={720}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
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
                  Key Results
                </p>
              </div>
              <h2 className="heading-lg mb-4">
                Measurable impact across every metric
              </h2>
              <p className="body-md">
                The redesigned abandoned cart system delivered significant
                improvements in engagement, recovery, and merchant adoption.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="metric-card">
                <p className="metric-value text-accent-dark">68%</p>
                <p className="metric-label">Email open rate</p>
              </div>
              <div className="metric-card">
                <p className="metric-value text-accent-dark">18%</p>
                <p className="metric-label">Click-to-open rate</p>
              </div>
              <div className="metric-card">
                <p className="metric-value text-accent-dark">12%</p>
                <p className="metric-label">Average recovery rate</p>
              </div>
              <div className="metric-card">
                <p className="metric-value text-accent-dark">$18M</p>
                <p className="metric-label">Recovered revenue</p>
              </div>
              <div className="metric-card">
                <p className="metric-value text-accent-dark">100+</p>
                <p className="metric-label">Merchant adoption</p>
              </div>
              <div className="metric-card">
                <p className="metric-value text-accent-dark">1%</p>
                <p className="metric-label">Unsubscribe rate</p>
              </div>
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
                    Notification Timing
                  </p>
                </div>
                <h2 className="heading-lg mb-6">
                  Optimized notification timing for maximum recovery
                </h2>
                <p className="body-md mb-4">
                  Through research and testing, we established strategic send
                  windows to maximize engagement without overwhelming shoppers.
                  The first email fires at{" "}
                  <strong className="text-charcoal">2 hours</strong> after
                  abandonment — catching intent while it&apos;s still fresh — with a
                  follow-up at{" "}
                  <strong className="text-charcoal">24 hours</strong> for
                  shoppers who haven&apos;t yet returned.
                </p>
                <p className="body-md">
                  SMS notifications follow strict{" "}
                  <strong className="text-charcoal">TCPA regulations</strong>,
                  only sending during permitted hours and honoring opt-out
                  preferences. The timing logic accounts for shopper timezone,
                  consent status, and channel preferences to ensure compliant,
                  effective outreach.
                </p>
              </div>
              <div className="img-rounded">
                <Image
                  src="/images/abandoned-carts/Notification Logic.png"
                  alt="Notification timing logic flow showing 2-hour and 24-hour send windows"
                  width={720}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
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
                  Email & SMS Redesign
                </p>
              </div>
              <h2 className="heading-lg mb-6">
                Redesigned notifications that drive action
              </h2>
              <p className="body-md">
                We updated the email branding to reflect each merchant&apos;s
                identity, optimized subject lines for higher open rates, and
                replaced generic homepage links with a{" "}
                <strong className="text-charcoal">
                  &quot;Checkout Now&quot; CTA
                </strong>{" "}
                that pre-loads the shopper&apos;s saved cart — removing friction
                and getting them directly to checkout in one click.
              </p>
            </div>

            <div className="img-rounded mb-8">
              <Image
                src="/images/abandoned-carts/AC-Emails.png"
                alt="Redesigned abandoned cart email templates with merchant branding"
                width={1440}
                height={810}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="img-rounded">
                <Image
                  src="/images/abandoned-carts/email-notification.png"
                  alt="Email notification with direct-to-checkout link"
                  width={720}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
              <div className="img-rounded">
                <Image
                  src="/images/abandoned-carts/sms-notification.png"
                  alt="SMS notification with cart recovery link"
                  width={720}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
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
                    Merchant Dashboard
                  </p>
                </div>
                <h2 className="heading-lg mb-6">
                  Giving merchants visibility and control
                </h2>
                <p className="body-md mb-4">
                  The merchant dashboard serves as the feature homepage,
                  providing{" "}
                  <strong className="text-charcoal">
                    configuration controls
                  </strong>{" "}
                  for notification settings, branding, and send preferences.
                </p>
                <p className="body-md">
                  Hero metrics surface key performance data at a glance, while
                  detailed{" "}
                  <strong className="text-charcoal">
                    abandonment analytics
                  </strong>{" "}
                  help merchants understand recovery trends, open rates, and
                  revenue impact over time.
                </p>
              </div>
              <div className="img-rounded">
                <Image
                  src="/images/abandoned-carts/dashboard.png"
                  alt="Merchant dashboard with configuration controls and hero metrics"
                  width={720}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="img-rounded mt-10">
              <Image
                src="/images/abandoned-carts/ACLanding.png"
                alt="Abandoned cart feature landing page with analytics overview"
                width={1440}
                height={810}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SMS Consent Management */}
      <section className="bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 img-rounded">
                <Image
                  src="/images/abandoned-carts/TextConsent.png"
                  alt="TCPA-compliant SMS consent collection flow"
                  width={720}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
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
                    SMS Consent
                  </p>
                </div>
                <h2 className="heading-lg mb-6">
                  TCPA-compliant consent management
                </h2>
                <p className="body-md mb-4">
                  SMS recovery required a carefully designed consent collection
                  flow to comply with{" "}
                  <strong className="text-charcoal">TCPA regulations</strong>.
                  We integrated consent capture directly into the checkout
                  experience, making it easy for shoppers to opt in while
                  maintaining full legal compliance.
                </p>
                <p className="body-md">
                  The system tracks consent status per shopper, respects opt-out
                  requests immediately, and provides merchants with clear
                  visibility into their SMS-eligible audience size.
                </p>
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
                  Future Vision
                </p>
              </div>
              <h2 className="heading-lg mb-6">
                What comes next for cart recovery
              </h2>
              <p className="body-md">
                The abandoned cart system laid the groundwork for a broader
                vision of intelligent, multi-channel shopper re-engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6">
                <div className="p-2 bg-cream rounded-lg inline-block mb-4">
                  <DeviceMobileSpeaker
                    size={24}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <h3 className="heading-md text-lg mb-2">
                  Multi-channel sequences
                </h3>
                <p className="body-md text-sm">
                  Coordinated recovery flows across email, SMS, push
                  notifications, and retargeting ads — adapting channel priority
                  based on shopper behavior.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="p-2 bg-cream rounded-lg inline-block mb-4">
                  <ClockCountdown
                    size={24}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <h3 className="heading-md text-lg mb-2">
                  AI-powered send timing
                </h3>
                <p className="body-md text-sm">
                  Machine learning models that predict optimal send times per
                  individual shopper, moving beyond fixed windows to personalized
                  delivery.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="p-2 bg-cream rounded-lg inline-block mb-4">
                  <Lightbulb
                    size={24}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <h3 className="heading-md text-lg mb-2">
                  Personalized recommendations
                </h3>
                <p className="body-md text-sm">
                  Product suggestions based on browsing history and cart
                  contents, turning recovery emails into discovery moments that
                  increase AOV.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="p-2 bg-cream rounded-lg inline-block mb-4">
                  <ChartLineUp
                    size={24}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <h3 className="heading-md text-lg mb-2">
                  Advanced analytics
                </h3>
                <p className="body-md text-sm">
                  Deeper insights into recovery attribution, cohort analysis, and
                  A/B testing frameworks to continuously optimize performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

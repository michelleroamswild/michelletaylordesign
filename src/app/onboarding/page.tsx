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

export const metadata = {
  title: "Bolt Onboarding Case Study — Michelle Taylor",
  description:
    "How Michelle Taylor redesigned Bolt's merchant onboarding from a 70+ day manual process to an automated experience completed in minutes.",
};

export default function OnboardingCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-bolt-dark text-white">
        <div className="container-site">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft size={16} weight="bold" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <Image
              src="/images/logos/BoltLogoReverse.png"
              alt="Bolt"
              width={80}
              height={32}
              className="object-contain"
            />
          </div>

          <div className="max-w-3xl mb-12">
            <h1 className="heading-xl text-white mb-6">
              From 70+ Days to{" "}
              <span className="text-bolt-green">Minutes</span>
            </h1>
            <p className="body-lg text-white/70">
              Designing a scalable, automated merchant onboarding system for
              Bolt Products. Transforming a months-long manual process into a
              streamlined self-service experience.
            </p>
          </div>

          <div className="img-rounded">
            <Image
              src="/images/onboarding/Overview-hero.png"
              alt="Bolt onboarding overview"
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
                  Overview
                </p>
                <h2 className="heading-lg mb-6">
                  Rethinking how merchants get started with Bolt
                </h2>
                <p className="body-lg mb-6">
                  Bolt&apos;s merchant onboarding process was a critical
                  bottleneck. New merchants faced a frustrating experience of
                  repetitive forms, manual handoffs, and lengthy communication
                  loops that delayed their time-to-live by months. I led the
                  redesign of this experience to increase merchant self-service,
                  reduce internal touchpoints, and dramatically accelerate the
                  path from sign-up to live.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-1">
                    Role
                  </p>
                  <p className="font-semibold text-charcoal">
                    Lead Product Designer
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-1">
                    Company
                  </p>
                  <p className="font-semibold text-charcoal">Bolt</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-1">
                    Goal
                  </p>
                  <p className="body-md">
                    Increase merchant self-service, reduce internal touchpoints,
                    and accelerate time-to-live.
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
              Key Results
            </p>
            <h2 className="heading-lg mb-10 text-center">
              Measurable impact across the board
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="metric-card border border-sand">
                <div className="flex justify-center mb-3">
                  <ClockCountdown
                    size={32}
                    weight="duotone"
                    className="text-bolt-green"
                  />
                </div>
                <p className="metric-value">70+ days</p>
                <p className="metric-value text-bolt-green">to minutes</p>
                <p className="metric-label mt-2">Onboarding time</p>
              </div>

              <div className="metric-card border border-sand">
                <div className="flex justify-center mb-3">
                  <CheckCircle
                    size={32}
                    weight="duotone"
                    className="text-bolt-green"
                  />
                </div>
                <p className="metric-value">40+ to 11</p>
                <p className="metric-label mt-2">Inputs condensed</p>
              </div>

              <div className="metric-card border border-sand">
                <div className="flex justify-center mb-3">
                  <Lightning
                    size={32}
                    weight="duotone"
                    className="text-bolt-green"
                  />
                </div>
                <p className="metric-value">$0.14B</p>
                <p className="metric-label mt-2">
                  Open revenue opportunities
                </p>
              </div>

              <div className="metric-card border border-sand">
                <div className="flex justify-center mb-3">
                  <UsersThree
                    size={32}
                    weight="duotone"
                    className="text-bolt-green"
                  />
                </div>
                <p className="metric-value">Fewer</p>
                <p className="metric-label mt-2">
                  Implementation manager touchpoints
                </p>
              </div>
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
                The Problem
              </p>
              <h2 className="heading-lg mb-6">
                Basic onboarding was taking{" "}
                <span className="highlight">over 2 months</span>
              </h2>
              <p className="body-lg">
                Bolt&apos;s existing onboarding process was riddled with
                friction. Merchants were stuck in a cycle of back-and-forth
                communications, manual task handling, and redundant data entry
                that stretched what should have been a simple setup into a
                multi-month ordeal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="p-2 bg-cream rounded-lg shrink-0">
                  <ChatCircleDots
                    size={24}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">
                    Communication Loops
                  </p>
                  <p className="text-sm text-muted mt-1">
                    Endless back-and-forth between merchants and internal teams
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="p-2 bg-cream rounded-lg shrink-0">
                  <UserCircle
                    size={24}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">
                    Manual Task Handling
                  </p>
                  <p className="text-sm text-muted mt-1">
                    Implementation managers manually processing each step
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="p-2 bg-cream rounded-lg shrink-0">
                  <ClockCountdown
                    size={24}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">
                    Lengthy Forms
                  </p>
                  <p className="text-sm text-muted mt-1">
                    40+ input fields creating an overwhelming setup experience
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="p-2 bg-cream rounded-lg shrink-0">
                  <Repeat
                    size={24}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">
                    Repetitive Data Entry
                  </p>
                  <p className="text-sm text-muted mt-1">
                    Merchants re-entering information already provided
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="p-2 bg-cream rounded-lg shrink-0">
                  <CreditCard
                    size={24}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">
                    Redundant Payment Data
                  </p>
                  <p className="text-sm text-muted mt-1">
                    Collecting payment info that could be deferred or automated
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="p-2 bg-cream rounded-lg shrink-0">
                  <Warning
                    size={24}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">
                    Poor Accessibility
                  </p>
                  <p className="text-sm text-muted mt-1">
                    Onboarding flows not meeting accessibility standards
                  </p>
                </div>
              </div>
            </div>

            <div className="img-rounded">
              <Image
                src="/images/onboarding/currentstateflow.png"
                alt="Current state onboarding flow showing the complex multi-step process"
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
                Discovery & Process Mapping
              </p>
              <h2 className="heading-lg mb-6">
                Auditing every input to find what truly matters
              </h2>
              <p className="body-lg mb-6">
                I audited all 40+ inputs in the existing onboarding flow,
                categorizing each as essential for account creation or
                deferrable to a later stage. This analysis revealed that the
                majority of fields could be moved post-onboarding, dramatically
                simplifying the initial experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-cream rounded-xl p-6">
                <Gauge
                  size={28}
                  weight="duotone"
                  className="text-bolt-green mb-3"
                />
                <p className="font-semibold text-charcoal text-sm mb-1">
                  Simple, Scalable UI
                </p>
                <p className="text-sm text-muted">
                  A clean interface that scales across Bolt products
                </p>
              </div>

              <div className="bg-cream rounded-xl p-6">
                <UserCircle
                  size={28}
                  weight="duotone"
                  className="text-bolt-green mb-3"
                />
                <p className="font-semibold text-charcoal text-sm mb-1">
                  Merchant Self-Service
                </p>
                <p className="text-sm text-muted">
                  Empower merchants to onboard without hand-holding
                </p>
              </div>

              <div className="bg-cream rounded-xl p-6">
                <CheckCircle
                  size={28}
                  weight="duotone"
                  className="text-bolt-green mb-3"
                />
                <p className="font-semibold text-charcoal text-sm mb-1">
                  Communicate Progress
                </p>
                <p className="text-sm text-muted">
                  Clear feedback on where merchants are in the process
                </p>
              </div>

              <div className="bg-cream rounded-xl p-6">
                <Lightning
                  size={28}
                  weight="duotone"
                  className="text-bolt-green mb-3"
                />
                <p className="font-semibold text-charcoal text-sm mb-1">
                  Align with Branding
                </p>
                <p className="text-sm text-muted">
                  Consistent with Bolt&apos;s visual identity and design system
                </p>
              </div>
            </div>

            <div className="img-rounded">
              <Image
                src="/images/onboarding/OnboardingProcessMapping.png"
                alt="Process mapping showing essential vs deferrable onboarding inputs"
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
                Design Explorations
              </p>
              <h2 className="heading-lg mb-6">
                Iterating toward clarity and simplicity
              </h2>
              <p className="body-lg">
                I explored multiple directions for the onboarding flow,
                including variations on layout, information hierarchy, and
                stepper patterns. These explorations helped the team align on
                the right balance of simplicity and completeness.
              </p>
            </div>

            <div className="space-y-8">
              <div className="img-rounded">
                <Image
                  src="/images/onboarding/onboardingexplorations.png"
                  alt="Onboarding layout and flow explorations"
                  width={1440}
                  height={810}
                  className="w-full h-auto"
                />
              </div>

              <div className="img-rounded">
                <Image
                  src="/images/onboarding/stepperexplorations.png"
                  alt="Stepper component design explorations"
                  width={1440}
                  height={810}
                  className="w-full h-auto"
                />
              </div>
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
                Phase 1 Design
              </p>
              <h2 className="heading-lg mb-6">
                A streamlined path from sign-up to live
              </h2>
              <p className="body-lg">
                The final Phase 1 design introduced a guided, step-by-step
                experience that drastically reduced friction. Each screen was
                designed to collect only what was essential, with smart defaults
                and automation handling the rest.
              </p>
            </div>

            <div className="space-y-16">
              {/* Login Animation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="heading-md mb-4">Seamless Login Experience</h3>
                  <p className="body-md">
                    A polished login flow with smooth animations that sets the
                    tone for the streamlined experience ahead. The design
                    communicates speed and professionalism from the first
                    interaction.
                  </p>
                </div>
                <div className="img-rounded">
                  <Image
                    src="/images/onboarding/login-animation.gif"
                    alt="Login animation showing smooth transition"
                    width={720}
                    height={480}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>

              {/* Automated Account Creation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1 img-rounded">
                  <Image
                    src="/images/onboarding/automated.gif"
                    alt="Automated account creation flow"
                    width={720}
                    height={480}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="heading-md mb-4">
                    Automated Account Creation
                  </h3>
                  <p className="body-md">
                    By automating data population and reducing manual entry, the
                    account creation step went from a tedious multi-day process
                    to something completed in moments. Information is
                    pre-filled where possible and validated in real time.
                  </p>
                </div>
              </div>

              {/* Dashboard Welcome */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="heading-md mb-4">Dashboard Welcome</h3>
                  <p className="body-md">
                    Once authenticated, merchants land on a personalized
                    dashboard that communicates progress, next steps, and
                    available Bolt products. The welcome experience reinforces
                    that setup is fast and guided.
                  </p>
                </div>
                <div className="img-rounded">
                  <Image
                    src="/images/onboarding/boltonboarding.png"
                    alt="Merchant dashboard welcome screen"
                    width={720}
                    height={480}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Product Selection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1 img-rounded">
                  <Image
                    src="/images/onboarding/SelectProduct.png"
                    alt="Product selection screen for Bolt products"
                    width={720}
                    height={480}
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="heading-md mb-4">Product Selection</h3>
                  <p className="body-md">
                    A clear product selection interface lets merchants choose
                    which Bolt products to install. Each option is presented
                    with concise descriptions and visual cues, making the
                    decision simple and informed.
                  </p>
                </div>
              </div>
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
                Outcomes
              </p>
              <h2 className="heading-lg text-white mb-6">
                From months of friction to minutes of momentum
              </h2>
              <p className="body-lg text-white/70">
                The redesigned onboarding system transformed how merchants
                experience Bolt, turning a painful multi-month process into a
                self-service flow that takes minutes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <Rocket
                  size={28}
                  weight="duotone"
                  className="text-bolt-green mb-3"
                />
                <p className="font-semibold text-white mb-2">
                  Minutes Instead of Months
                </p>
                <p className="text-sm text-white/60">
                  Merchants create accounts and go live in minutes instead of
                  waiting 70+ days through manual processes.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <Lightning
                  size={28}
                  weight="duotone"
                  className="text-bolt-green mb-3"
                />
                <p className="font-semibold text-white mb-2">
                  $1.4B Opportunity Identified
                </p>
                <p className="text-sm text-white/60">
                  The streamlined process unlocked significant revenue
                  opportunities by accelerating merchant activation.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <UsersThree
                  size={28}
                  weight="duotone"
                  className="text-bolt-green mb-3"
                />
                <p className="font-semibold text-white mb-2">
                  Reduced Manual Effort
                </p>
                <p className="text-sm text-white/60">
                  Implementation managers freed from repetitive onboarding
                  tasks, able to focus on higher-value merchant relationships.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <Gauge
                  size={28}
                  weight="duotone"
                  className="text-bolt-green mb-3"
                />
                <p className="font-semibold text-white mb-2">
                  Increased Deal Velocity
                </p>
                <p className="text-sm text-white/60">
                  Faster onboarding means faster revenue realization for both
                  Bolt and its merchant partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Work */}
      <section className="section-spacing bg-cream">
        <div className="container-site text-center">
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} weight="bold" />
            Back to All Work
          </Link>
        </div>
      </section>
    </>
  );
}

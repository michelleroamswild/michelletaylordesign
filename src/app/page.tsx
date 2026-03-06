import {
  CalendarDots,
  Compass,
  Strategy,
} from "@phosphor-icons/react/dist/ssr";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-white">
        <div className="container-site">
          <p className="text-sm text-muted mb-4">Hi, I&apos;m Michelle</p>
          <h1 className="heading-hero max-w-4xl mb-8">
            I&apos;m a product designer with over 10 years of experience solving
            complex problems and delivering impactful results across industries.
          </h1>
          <p className="body-lg text-muted max-w-3xl mb-12">
            I helped boost abandoned cart recovery rates by up to 26% at{" "}
            <span className="highlight">Bolt</span>, streamlined expense
            reconciliation for{" "}
            <span className="highlight">Capital One</span> businesses cutting
            weeks of work out of expense processes, and developed innovative
            methods to prevent shipping exceptions in supply chain management at{" "}
            <span className="highlight">CHR</span>. My work focuses on creating
            efficiencies for users that deliver measurable business results.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <CalendarDots size={18} weight="regular" />
              <span>10+ years experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass size={18} weight="regular" />
              <span>E-commerce, Fintech, Logistics</span>
            </div>
            <div className="flex items-center gap-2">
              <Strategy size={18} weight="regular" />
              <span>Strategy-led design for B2B and SaaS Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="container-site space-y-10">
          <CaseStudyCard
            logo="/images/roamswild/Logo.png"
            logoAlt="RoamsWild"
            title="Building a data-driven exploration tool for finding better campsites, routes, and light built with AI-assisted design and development tools"
            summary="RoamsWild is a location discovery tool designed to reduce decision fatigue for outdoor travel. Instead of relying only on static pins and user reports, it uses terrain data, road networks, and weather signals to surface high-potential campsites and photo locations."
            results="Built as a passion project, it explores how calibrated data and thoughtful heuristics can support real-world decisions without over-automating the experience."
            cta="View Project"
            href="/roamswild"
            image="/images/roamswild/mockup.png"
            imageAlt="RoamsWild app mockup"
            bg="bg-cream"
          />

          <CaseStudyCard
            logo="/images/logos/BoltLogoReverse.png"
            logoAlt="Bolt"
            logoWidth={80}
            title="Accelerating onboarding to install Bolt Products in a matter of minutes instead of weeks"
            summary="This new onboarding process changed an unwieldy manual process to a scalable, automated flow so merchants could onboard and install products without the need for internal interference."
            results="We condensed over 40 data inputs that required information from three different user types to the necessary 11 inputs and automated creation of environments so merchants could get set up without requiring manual work by our Implementation Managers."
            cta="View Case Study"
            href="/onboarding"
            image="/images/onboarding/OnboardingHighlight.png"
            imageAlt="Bolt onboarding interface"
            bg="bg-charcoal"
            darkText={false}
          />

          <CaseStudyCard
            logo="/images/logos/BoltLogo.png"
            logoAlt="Bolt"
            logoWidth={80}
            title="Doubling Conversion: Abandoned Cart Redesign with Direct-to-Checkout Links"
            summary="A simple redesign of abandoned cart emails that utilized direct to checkout links and a more robust merchant dashboard experience"
            results={`The new emails resulted in doubling recovery rate for select merchants from and average of 6% to 13% — some up to 26%, recovering $18M of potentially lost revenue.`}
            cta="View Project"
            href="/bolt-abandoned-carts"
            image="/images/abandoned-carts/ACHero.png"
            imageAlt="Abandoned cart recovery dashboard"
            bg="bg-light-blue"
          />

          <CaseStudyCard
            logo="/images/logos/capitalonelogo.png"
            logoAlt="Capital One"
            title="Automating weeks of manual work for corporate card admins and simplifying card users expense process"
            summary="This created a direct route for cardholders to attach expense information to transactions and have it immediately available to Card Program admins for reconciliation."
            results="Cut out weeks of time from program admin's jobs and increased tax compliance by tying receipts directly to expenses and removing the need to keep and store a massive amount of paper receipts and expense reports."
            cta="View Case Study"
            href="/expense-management"
            image="/images/expense-management/CapitalOneHero.png"
            imageAlt="Capital One expense management screens"
            bg="bg-cream"
          />

          <CaseStudyCard
            logo="/images/logos/CHRlogo.png"
            logoAlt="C.H. Robinson"
            title="Building a new logistics platform to prevent shipping exceptions and millions of dollars of lost shipments"
            summary="Navisphere Vision is a SaaS product that gives supply chain managers real-time visibility into shipment data across regions and transportation methods, using data analytics to help identify shipping exceptions before they occur."
            results="Bringing in predictive analytics and real-time updates, Vision gave an all inclusive view of a company's supply chain that previously did not exist and aimed to help minimize the amount of delayed shipments to decrease exceptions by showing weather, traffic and other possible shipment delays."
            cta="View Case Study"
            href="/navispherevision"
            image="/images/navisphere/Vision-SplitView.png"
            imageAlt="Navisphere Vision dashboard"
            bg="bg-light-gray"
          />
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import {
  Package,
  MapTrifold,
  ListBullets,
  ChartLine,
  MagnifyingGlass,
  Warning,
  ArrowLeft,
  CheckCircle,
  Rows,
  Eye,
  CalendarDots,
  NavigationArrow,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function NavisphereVisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-charcoal transition-colors mb-8"
          >
            <ArrowLeft size={16} weight="bold" />
            Back to all projects
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/images/logos/CHRlogo.png"
              alt="C.H. Robinson"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <span className="text-sm font-medium text-muted">
              C.H. Robinson
            </span>
          </div>

          <h1 className="heading-xl mb-6 max-w-3xl">
            Navisphere Vision
          </h1>
          <p className="body-lg max-w-2xl mb-10">
            Building a new logistics platform to prevent shipping exceptions and{" "}
            <span className="highlight">millions of dollars of lost shipments</span>.
          </p>

          <div className="img-rounded">
            <Image
              src="/images/navisphere/Vision-2-0.png"
              alt="Navisphere Vision 2.0 platform interface"
              width={1440}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream">
        <div className="container-site case-study-section">
          <h2 className="heading-lg mb-8">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="body-lg">
                Navisphere Vision is a SaaS logistics platform providing
                real-time shipment visibility through predictive analytics. It
                identifies exceptions before they occur by aggregating
                third-party tracking data alongside weather, traffic, and
                geopolitical signals.
              </p>
            </div>
            <div>
              <h3 className="heading-md mb-4">My Responsibilities</h3>
              <ul className="space-y-3">
                {[
                  { icon: ChartLine, text: "Feature prioritization and product strategy" },
                  { icon: Rows, text: "Collaboration with engineers and data scientists" },
                  { icon: Eye, text: "Unified UX across fragmented platform tools" },
                  { icon: MagnifyingGlass, text: "User research and design validation" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="p-2 bg-white rounded-lg shrink-0">
                      <item.icon
                        size={20}
                        weight="duotone"
                        className="text-chr-blue"
                      />
                    </div>
                    <span className="body-md">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-cream">
        <div className="container-site case-study-section">
          <div className="flex items-center gap-3 mb-2">
            <Warning size={24} weight="duotone" className="text-chr-blue" />
            <span className="text-sm font-semibold uppercase tracking-wider text-chr-blue">
              The Problem
            </span>
          </div>
          <h2 className="heading-lg mb-6">
            Legacy platform challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="body-lg mb-4">
                Logistics managers were forced to juggle multiple platforms and
                lacked comprehensive digital tracking of their shipments. Without
                a unified view, exceptions went undetected until it was too
                late -- resulting in costly delays and lost cargo.
              </p>
              <p className="body-lg mb-6">
                Navisphere Vision was built to aggregate third-party tracking
                data, weather forecasts, traffic conditions, and geopolitical
                monitoring into a single real-time platform -- giving supply
                chain managers the visibility they need to act before problems
                escalate.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="metric-card">
                  <p className="metric-value">3+</p>
                  <p className="metric-label">Platforms juggled daily</p>
                </div>
                <div className="metric-card">
                  <p className="metric-value">0</p>
                  <p className="metric-label">Predictive exception alerts</p>
                </div>
              </div>
            </div>
            <div className="img-rounded">
              <Image
                src="/images/navisphere/Vision-Synthesis.png"
                alt="Navisphere Vision data synthesis diagram"
                width={720}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Finding #1 */}
      <section className="bg-cream">
        <div className="container-site case-study-section">
          <div className="flex items-center gap-3 mb-2">
            <MagnifyingGlass
              size={24}
              weight="duotone"
              className="text-chr-blue"
            />
            <span className="text-sm font-semibold uppercase tracking-wider text-chr-blue">
              Research Finding #1
            </span>
          </div>
          <h2 className="heading-lg mb-6">
            Shipments Appear Missing
          </h2>
          <div className="bg-white rounded-xl p-8 mb-8">
            <blockquote className="text-lg italic text-charcoal leading-relaxed border-l-4 border-chr-blue pl-6">
              &ldquo;I don&apos;t use Vision because my shipments don&apos;t
              show up when I search for them.&rdquo;
            </blockquote>
            <p className="text-sm text-muted mt-3">
              -- Navisphere Vision user research participant
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="p-2 bg-cream rounded-lg inline-flex mb-3">
                <MapTrifold
                  size={24}
                  weight="duotone"
                  className="text-chr-blue"
                />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">
                Map vs. list view confusion
              </h3>
              <p className="body-md">
                The split between map and list views created confusion. Users
                couldn&apos;t understand why shipments visible on the map
                weren&apos;t appearing in their list.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="p-2 bg-cream rounded-lg inline-flex mb-3">
                <ListBullets
                  size={24}
                  weight="duotone"
                  className="text-chr-blue"
                />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">
                List view button hidden by filters
              </h3>
              <p className="body-md">
                The toggle to switch to list-only view was buried beneath active
                filters, making it nearly invisible to most users during their
                daily workflows.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="p-2 bg-cream rounded-lg inline-flex mb-3">
                <Package
                  size={24}
                  weight="duotone"
                  className="text-chr-blue"
                />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">
                Map not needed for daily tasks
              </h3>
              <p className="body-md">
                Most users didn&apos;t need the map for their daily shipment
                management tasks. They wanted a simple, scannable list of their
                shipments with status and ETA information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Finding #2 */}
      <section className="bg-cream">
        <div className="container-site case-study-section">
          <div className="flex items-center gap-3 mb-2">
            <MagnifyingGlass
              size={24}
              weight="duotone"
              className="text-chr-blue"
            />
            <span className="text-sm font-semibold uppercase tracking-wider text-chr-blue">
              Research Finding #2
            </span>
          </div>
          <h2 className="heading-lg mb-6">
            Shipment Cards & Detail Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hard to navigate orders on multiple loads",
                description:
                  "Users managing orders spread across several loads struggled to track individual shipments within nested, collapsed card structures.",
              },
              {
                title: "Tracking buried at bottom",
                description:
                  "The most critical information -- live tracking data -- was pushed to the bottom of detail pages, requiring excessive scrolling.",
              },
              {
                title: "No data hierarchy",
                description:
                  "All information was displayed with equal visual weight, making it impossible to quickly scan for the most urgent data points.",
              },
              {
                title: "Overcrowded layout",
                description:
                  "Detail pages tried to show everything at once, creating dense, overwhelming screens that slowed decision-making.",
              },
            ].map((finding, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-chr-blue">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">
                  {finding.title}
                </h3>
                <p className="body-md">{finding.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution #1 */}
      <section className="bg-cream">
        <div className="container-site case-study-section">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle
              size={24}
              weight="duotone"
              className="text-chr-blue"
            />
            <span className="text-sm font-semibold uppercase tracking-wider text-chr-blue">
              Solution for Problem #1
            </span>
          </div>
          <h2 className="heading-lg mb-4">
            Redesigned Shipments Page
          </h2>
          <p className="body-lg max-w-2xl mb-10">
            We reimagined the shipments page as a single, unified interface with
            flexible view options. The map was repositioned as a filter rather
            than the primary navigation -- letting users choose the view that
            best fits their workflow.
          </p>

          <div className="space-y-10">
            {/* Map Only View */}
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cream rounded-lg">
                  <MapTrifold
                    size={24}
                    weight="duotone"
                    className="text-chr-blue"
                  />
                </div>
                <h3 className="heading-md">Map Only View</h3>
              </div>
              <p className="body-md mb-6 max-w-xl">
                Full-screen map for geographic monitoring. Ideal for exception
                tracking across regions and identifying weather-related risks at
                a glance.
              </p>
              <div className="img-rounded">
                <Image
                  src="/images/navisphere/Vision-MapOnly.png"
                  alt="Navisphere Vision map only view"
                  width={1200}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Split View */}
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cream rounded-lg">
                  <Rows
                    size={24}
                    weight="duotone"
                    className="text-chr-blue"
                  />
                </div>
                <h3 className="heading-md">Split View</h3>
              </div>
              <p className="body-md mb-6 max-w-xl">
                Side-by-side map and list for users who need geographic context
                alongside shipment details. Clicking a list item highlights it
                on the map.
              </p>
              <div className="img-rounded">
                <Image
                  src="/images/navisphere/Vision-SplitView.png"
                  alt="Navisphere Vision split view"
                  width={1200}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* List View */}
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cream rounded-lg">
                  <ListBullets
                    size={24}
                    weight="duotone"
                    className="text-chr-blue"
                  />
                </div>
                <h3 className="heading-md">List Only View</h3>
              </div>
              <p className="body-md mb-6 max-w-xl">
                The default view for daily task management. A clean, scannable
                table of shipments with status, ETA, and exception flags --
                optimized for the most common user workflow.
              </p>
              <div className="img-rounded">
                <Image
                  src="/images/navisphere/Vision-ListOnly.png"
                  alt="Navisphere Vision list only view"
                  width={1200}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution #2 */}
      <section className="bg-cream">
        <div className="container-site case-study-section">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle
              size={24}
              weight="duotone"
              className="text-chr-blue"
            />
            <span className="text-sm font-semibold uppercase tracking-wider text-chr-blue">
              Solution for Problem #2
            </span>
          </div>
          <h2 className="heading-lg mb-4">
            Redesigned Shipment Cards & Tracking
          </h2>
          <p className="body-lg max-w-2xl mb-10">
            We restructured shipment detail pages to surface the most critical
            information first and provide clear navigation for complex,
            multi-load orders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: Package,
                  title: "Expandable cards for multiple loads",
                  desc: "Orders with multiple loads now use expandable card structures, letting users drill into individual load details without losing context of the full order.",
                },
                {
                  icon: NavigationArrow,
                  title: "Separate tracking tab",
                  desc: "Live tracking information was elevated to its own dedicated tab, making it immediately accessible instead of buried at the bottom of the page.",
                },
                {
                  icon: CalendarDots,
                  title: "Multiple date fields",
                  desc: "Added distinct date fields for scheduled pickup, estimated delivery, and actual delivery -- giving users a complete timeline at a glance.",
                },
                {
                  icon: Eye,
                  title: "Clarified ETA sources",
                  desc: "ETA estimates now clearly indicate their data source (carrier, GPS, predictive model) so users can gauge confidence in delivery projections.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-lg shrink-0 border border-sand">
                    <item.icon
                      size={22}
                      weight="duotone"
                      className="text-chr-blue"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      {item.title}
                    </h3>
                    <p className="body-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="img-rounded">
              <Image
                src="/images/navisphere/Vision-shipmenttracker.png"
                alt="Navisphere Vision shipment tracker redesign"
                width={720}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-cream">
        <div className="container-site case-study-section">
          <div className="flex items-center gap-3 mb-2">
            <ChartLine
              size={24}
              weight="duotone"
              className="text-chr-blue"
            />
            <span className="text-sm font-semibold uppercase tracking-wider text-chr-blue">
              Outcomes
            </span>
          </div>
          <h2 className="heading-lg mb-8">
            Impact & Results
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                value: "1",
                label: "Unified navigation shell",
              },
              {
                value: "100%",
                label: "Consistent UI across platform",
              },
              {
                value: "Mobile",
                label: "Responsive design delivered",
              },
            ].map((metric, i) => (
              <div key={i} className="metric-card">
                <p className="metric-value">{metric.value}</p>
                <p className="metric-label">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8">
            <h3 className="heading-md mb-6">What was delivered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              {[
                "New navigation shell unifying all platform tools",
                "Unified UI and component library across the application",
                "Responsive mobile-optimized design",
                "Comprehensive style guide for the design team",
                "Foundation for future features: ports, facilities, and collaboration tools",
                "Scalable architecture supporting predictive analytics expansion",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    weight="fill"
                    className="text-chr-blue shrink-0 mt-0.5"
                  />
                  <p className="body-md">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back to projects */}
      <section className="bg-cream pb-16">
        <div className="container-site text-center">
          <Link
            href="/#work"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} weight="bold" />
            Back to all projects
          </Link>
        </div>
      </section>
    </>
  );
}

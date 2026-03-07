import {
  CalendarDots,
  Compass,
  Strategy,
  ShoppingCart,
  Receipt,
  Package,
} from "@phosphor-icons/react/dist/ssr";
import CaseStudyCard from "@/components/CaseStudyCard";
import { getProjects, getHomePage } from "@/lib/content";

const calloutIcons = [ShoppingCart, Receipt, Package];

export default function Home() {
  const projects = getProjects();
  const home = getHomePage();

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
            {/* Left - headline and description */}
            <div>
              <p className="text-sm text-muted mb-4">{home.greeting}</p>
              <h1 className="heading-hero mb-8">{home.headline}</h1>
              <p className="body-lg text-muted max-w-2xl">
                {home.description}
              </p>
            </div>

            {/* Right - result callouts stacked */}
            <div className="flex flex-col gap-4">
              {home.callouts.map((callout, i) => {
                const Icon = calloutIcons[i] ?? ShoppingCart;
                return (
                  <div
                    key={callout.company}
                    className="border border-gray-200 rounded-lg p-5 flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 text-muted">
                      <Icon size={16} weight="duotone" />
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        {callout.company}
                      </span>
                    </div>
                    <p className="text-2xl font-extrabold text-charcoal tracking-tight">
                      {callout.metric}
                    </p>
                    <p className="text-sm text-muted leading-snug">
                      {callout.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted mt-12">
            {home.traits.map((trait) => (
              <div key={trait} className="flex items-center gap-2">
                {trait.includes("years") && (
                  <CalendarDots size={18} weight="regular" />
                )}
                {trait.includes("commerce") && (
                  <Compass size={18} weight="regular" />
                )}
                {trait.includes("Strategy") && (
                  <Strategy size={18} weight="regular" />
                )}
                <span>{trait}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="container-site space-y-10">
          {projects.map((project) => (
            <CaseStudyCard
              key={project.slug}
              logo={project.logo}
              logoAlt={project.logoAlt}
              logoWidth={project.logoWidth}
              title={project.title}
              summary={project.summary}
              results={project.results}
              cta={project.cta}
              href={`/${project.slug}`}
              image={project.image}
              imageAlt={project.imageAlt}
              bg={project.bg}
              darkText={project.darkText}
            />
          ))}
        </div>
      </section>
    </>
  );
}

import {
  ShoppingCart,
  Receipt,
  Package,
} from "@phosphor-icons/react/dist/ssr";
import CaseStudyCard from "@/components/CaseStudyCard";
import TraitPills from "@/components/TraitPills";
import { getProjects, getHomePage } from "@/lib/content";

const calloutIcons = [ShoppingCart, Receipt, Package];

export default function Home() {
  const projects = getProjects();
  const home = getHomePage();

  return (
    <>
      <div className="relative overflow-x-clip">

      {/* Hero */}
      <section className="pt-32 pb-36 md:pt-44 md:pb-52 relative">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
            {/* Left - headline and description */}
            <div>
              <p className="text-sm text-muted mb-4">{home.greeting}</p>
              <h1 className="heading-hero mb-8">{home.headline}</h1>
              <p
                className="body-lg text-muted max-w-2xl"
                dangerouslySetInnerHTML={{
                  __html: home.description.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="text-charcoal font-semibold">$1</strong>'
                  ),
                }}
              />

            </div>

            {/* Right - result callouts stacked */}
            <div className="flex flex-col gap-4">
              {home.callouts.map((callout, i) => {
                const Icon = calloutIcons[i] ?? ShoppingCart;
                const colors = [
                  { border: "hsl(214, 100%, 50%)", bg: "hsl(214, 100%, 97%)" },
                  { border: "hsl(249, 80%, 60%)", bg: "hsl(249, 80%, 97%)" },
                  { border: "#F37B1F", bg: "hsl(25, 100%, 97%)" },
                ];
                const color = colors[i] ?? colors[0];
                return (
                  <div
                    key={callout.company}
                    className="rounded-lg p-5 flex flex-col gap-2 border-l-4 bg-white"
                    style={{ borderLeftColor: color.border }}
                  >
                    <div className="flex items-center gap-2" style={{ color: color.border }}>
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

          <TraitPills traits={home.traits} />
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-16 md:pb-24">
        <div className="container-site space-y-10">
          {projects.map((project) => (
            <CaseStudyCard
              key={project.slug}
              logo={project.logo}
              logoAlt={project.logoAlt}
              logoWidth={project.logoWidth}
              logoHeight={project.logoHeight}
              title={project.title}
              summary={project.summary}
              results={project.results}
              keyResults={project.keyResults}
              cta={project.cta}
              href={`/${project.slug}`}
              image={project.image}
              imageAlt={project.imageAlt}
              bg={project.bg}
              darkText={project.darkText}
              featured={project.featured}
              tags={project.tags}
              accent={project.accent}
              lightAccent={project.lightAccent}
            />
          ))}
        </div>
      </section>
      </div>
    </>
  );
}

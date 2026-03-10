import {
  CalendarDots,
  Compass,
  Strategy,
} from "@phosphor-icons/react/dist/ssr";
import CaseStudyCard from "@/components/CaseStudyCard";
import HeroText from "@/components/HeroText";
import { getProjects, getHomePage } from "@/lib/content";


export default function Home() {
  const projects = getProjects();
  const home = getHomePage();

  return (
    <>
      <div className="relative overflow-x-clip">

      {/* Hero */}
      <section className="pt-20 pb-36 md:pt-28 md:pb-52 relative">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-24 items-center">
            {/* Left - headline and description */}
            <div>
              <p className="text-lg text-muted mb-4">👋🏻 {home.greeting}</p>
              <HeroText description={home.description} />

            </div>

            {/* Right - trait callouts */}
            <div className="flex flex-col gap-4">
              {home.traits.map((trait, i) => {
                const icons = [CalendarDots, Compass, Strategy];
                const Icon = icons[i] ?? CalendarDots;
                const details = home.traitDetails;
                return (
                  <div
                    key={trait}
                    className="rounded-xl p-5 flex items-start gap-4 bg-white/80 backdrop-blur-sm border"
                    style={{ borderColor: "hsl(249, 60%, 88%)" }}
                  >
                    <div
                      className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "hsl(249, 80%, 95%)" }}
                    >
                      <Icon size={20} weight="duotone" style={{ color: "hsl(249, 80%, 60%)" }} />
                    </div>
                    <div>
                      <p className="text-base font-bold text-charcoal">{trait}</p>
                      <p className="text-sm text-muted mt-0.5">{details[i]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

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

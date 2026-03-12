import {
  CalendarDots,
  Compass,
  Strategy,
  TreeStructure,
  Wrench,
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
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 relative">
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
            <div className="flex flex-col gap-6">
              {home.traits.map((trait, i) => {
                const icons = [CalendarDots, Compass, Strategy];
                const Icon = icons[i] ?? CalendarDots;
                const details = home.traitDetails;
                return (
                  <div
                    key={trait}
                    className="flex items-start gap-4"
                  >
                    <Icon size={20} weight="duotone" className="shrink-0 mt-0.5" style={{ color: "hsl(249, 80%, 60%)" }} />
                    <div>
                      <p className="text-base font-bold text-charcoal">{trait}</p>
                      <p className="text-sm text-muted mt-0.5">{details[i]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How I Work */}
          <div className="mt-16 md:mt-24">
            <div className="border bg-white p-10 md:p-14" style={{ borderColor: "hsl(249, 60%, 88%)" }}>
              <p className="text-sm font-bold uppercase tracking-wider text-center mb-4" style={{ color: "hsl(249, 80%, 60%)" }}>
                How I work
              </p>
              <h2 className="heading-md text-center text-charcoal max-w-4xl mx-auto mb-16">
                {home.howIWorkHeadline}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {home.howIWork.map((item, i) => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const iconMap: Record<string, any> = { Strategy, TreeStructure, Wrench };
                  const Icon = iconMap[item.icon] ?? Strategy;
                  const colors = [
                    { icon: "hsl(249, 80%, 60%)", bg: "hsl(249, 80%, 95%)", hover: "linear-gradient(135deg, hsla(249, 80%, 60%, 0.06), hsla(214, 100%, 50%, 0.04))" },
                    { icon: "hsl(214, 100%, 50%)", bg: "hsl(214, 100%, 95%)", hover: "linear-gradient(135deg, hsla(214, 100%, 50%, 0.06), hsla(67, 100%, 50%, 0.04))" },
                    { icon: "hsl(74, 68%, 35%)", bg: "hsl(74, 68%, 92%)", hover: "linear-gradient(135deg, hsla(74, 68%, 35%, 0.06), hsla(26, 90%, 54%, 0.04))" },
                  ];
                  const color = colors[i] ?? colors[0];
                  return (
                    <div key={item.title} className="relative group">
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: color.hover }}
                      />
                      <div className="relative p-8">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                          style={{ backgroundColor: color.bg }}
                        >
                          <Icon size={28} weight="duotone" style={{ color: color.icon }} />
                        </div>
                        <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-16 md:pb-24">
        <div className="container-site space-y-10 max-md:!px-0">
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

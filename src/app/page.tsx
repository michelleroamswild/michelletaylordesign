import {
  CalendarDots,
  Compass,
  Strategy,
} from "@phosphor-icons/react/dist/ssr";
import CaseStudyCard from "@/components/CaseStudyCard";
import { getProjects } from "@/lib/content";

export default function Home() {
  const projects = getProjects();

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

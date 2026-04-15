import Image from "next/image";
import {
  Envelope,
  Mountains,
  LinkedinLogo,
  Strategy,
  CirclesThreePlus,
  UsersThree,
  MagnifyingGlass,
  Rocket,
  CalendarDots,
  ShoppingCart,
  CurrencyCircleDollar,
  Buildings,
  Eye,
  NumberEight,
  Fire,
  FilmStrip,
  GlobeHemisphereWest,
  Wrench,
  AirplaneTilt,
  Car,
  Handshake,
  Compass,
  Lightning,
  TreeStructure,
  Flask,
  Target,
  UserCircle,
  Camera,
  Funnel,
  PencilLine,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { getPageContent } from "@/lib/content";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  Strategy,
  MagnifyingGlass,
  UsersThree,
  CirclesThreePlus,
  Rocket,
  Mountains,
  CalendarDots,
  ShoppingCart,
  CurrencyCircleDollar,
  Buildings,
  Eye,
  NumberEight,
  Fire,
  FilmStrip,
  GlobeHemisphereWest,
  Wrench,
  AirplaneTilt,
  Car,
  Handshake,
  Compass,
  Lightning,
  TreeStructure,
  Flask,
  Target,
  UserCircle,
  Camera,
  Funnel,
  PencilLine,
  Sparkle,
};

export function generateMetadata() {
  const content = getPageContent("about");
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default function AboutPage() {
  const content = getPageContent("about");

  const timeline = content.timeline as Array<{
    company: string;
    companyUrl: string;
    dates: string;
    role: string;
    domain: string;
    achievements: string[];
  }>;

  const personalCards = content.personalCards as Array<{
    icon: string;
    text: string;
  }>;
  const professionalBadges = content.professionalBadges as Array<{
    label: string;
    icon: string;
    color: string;
  }>;
  const workingStyles = content.workingStyles as Array<{
    icon: string;
    title: string;
    description: string;
    signal: string;
  }>;
  const skillsBuckets = content.skillsBuckets as Array<{
    title: string;
    icon: string;
    items: string[];
  }>;
  const designPhilosophy = (content.designPhilosophy ?? []) as Array<{
    title: string;
    icon: string;
    body: string;
  }>;

  // Parse **highlighted** segments from headline
  const heroHeadline = content.heroHeadline as string;
  const heroParts: { text: string; highlighted: boolean }[] = [];
  const boldPattern = /\*\*(.*?)\*\*/g;
  let lastIdx = 0;
  let m;
  while ((m = boldPattern.exec(heroHeadline)) !== null) {
    if (m.index > lastIdx) {
      heroParts.push({ text: heroHeadline.slice(lastIdx, m.index), highlighted: false });
    }
    heroParts.push({ text: m[1], highlighted: true });
    lastIdx = m.index + m[0].length;
  }
  if (lastIdx < heroHeadline.length) {
    heroParts.push({ text: heroHeadline.slice(lastIdx), highlighted: false });
  }

  return (
    <>
      {/* Hero Intro */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-purple-light)" }}>
        <div className="container-site">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted mb-4">About Me</p>
            <h1 className="heading-lg mb-20" style={{ fontSize: "clamp(1.4rem, 5vw, 3.25rem)" }}>
              {heroParts.map((part, i) =>
                part.highlighted ? (
                  <span key={i} className="highlight">{part.text}</span>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </h1>
          </div>
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-center" style={{ maxWidth: "64rem" }}>
            <div
              className="overflow-hidden relative aspect-[4/5] about-hero-photo"
              style={{
                transform: "rotate(-3deg)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Image
                src={content.heroImage.src}
                alt={content.heroImage.alt}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <p className="body-lg max-w-xl">
                {content.heroDescription}
              </p>
              <div className="mt-8">
                <p className="text-sm font-bold uppercase tracking-wider text-muted mb-3">{content.heroCtaTitle}</p>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${content.contactEmail}`}
                    className="btn-primary"
                    style={{ backgroundColor: "var(--color-purple)" }}
                  >
                    <Envelope size={18} weight="duotone" />
                    {content.contactEmail}
                  </a>
                  <a
                    href={content.contactLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ backgroundColor: "var(--color-purple)" }}
                  >
                    <LinkedinLogo size={18} weight="duotone" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="heading-lg mb-6">{content.professionalSummaryTitle}</h2>
            <p className="body-lg">
              {content.professionalSummaryDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {professionalBadges.map((badge) => {
                const BadgeIcon = iconMap[badge.icon];
                return (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${badge.color} 12%, white)`,
                      color: `color-mix(in srgb, ${badge.color} 70%, black)`,
                    }}
                  >
                    {BadgeIcon && <BadgeIcon size={16} weight="duotone" />}
                    {badge.label}
                  </span>
                );
              })}
            </div>
          </div>

          {designPhilosophy.length > 0 && (
            <div className="mt-16 md:mt-20" style={{ maxWidth: "72rem", marginInline: "auto" }}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted text-center mb-8">
                {content.designPhilosophyTitle as string}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {designPhilosophy.map((card) => {
                  const CardIcon = iconMap[card.icon];
                  return (
                    <div
                      key={card.title}
                      className="rounded-xl p-6"
                      style={{ backgroundColor: "var(--color-purple-light)" }}
                    >
                      <h4 className="text-base font-bold text-charcoal mb-3 flex items-center gap-2">
                        {CardIcon && <CardIcon size={18} weight="duotone" style={{ color: "var(--color-purple)" }} />}
                        {card.title}
                      </h4>
                      <p className="text-sm text-muted leading-relaxed">{card.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-purple-light)" }}>
        <div className="container-site" style={{ maxWidth: "72rem" }}>
          <h2 className="heading-lg mb-12 text-center">{content.skillsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsBuckets.map((bucket) => {
              const BucketIcon = iconMap[bucket.icon];
              return (
                <div key={bucket.title} className="bg-white rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "color-mix(in srgb, var(--color-purple) 12%, white)" }}
                    >
                      {BucketIcon && <BucketIcon size={20} weight="duotone" style={{ color: "var(--color-purple)" }} />}
                    </div>
                    <h3 className="text-base font-bold text-charcoal">{bucket.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {bucket.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          className="mt-[0.55rem] w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "var(--color-purple)" }}
                        />
                        <span className="text-sm text-muted leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How I'm Wired — hidden for now, data still in about.md */}

      {/* Experience Timeline */}
      <section className="section-spacing bg-white">
        <div className="container-site" style={{ maxWidth: "72rem" }}>
          <h2 className="heading-lg mb-10">{content.experienceTitle}</h2>
          <div className="space-y-0">
            {timeline.map((job, i) => (
              <div
                key={job.company}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 py-10"
                style={i < timeline.length - 1 ? { borderBottom: "1px solid var(--color-sand)" } : {}}
              >
                <div>
                  <h3 className="text-xl font-bold text-charcoal underline underline-offset-4 decoration-2">
                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">{job.company}</a>
                  </h3>
                  <p className="text-base font-semibold text-charcoal mt-3">{job.role}</p>
                  <p className="text-sm text-muted mt-2">{job.domain}</p>
                  <p className="text-sm text-muted mt-1">{job.dates}</p>
                </div>
                <ul className="space-y-4">
                  {job.achievements.map((item) => (
                    <li
                      key={item}
                      className="body-md flex items-start gap-3"
                    >
                      <span className="text-charcoal mt-[0.65rem] shrink-0 w-1.5 h-1.5 rounded-full bg-charcoal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 py-10"
            style={{ borderTop: "1px solid var(--color-sand)" }}
          >
            <div>
              <h3 className="text-xl font-bold text-charcoal">{content.educationTitle}</h3>
            </div>
            <div>
              <p className="text-base font-semibold text-charcoal">{content.educationSchool}</p>
              <p className="body-md mt-2">{content.educationDegree}</p>
              <p className="body-md mt-1">{content.educationMinor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-purple-light)" }}>
        <div className="container-site" style={{ maxWidth: "72rem" }}>
          <h2 className="heading-md mb-10 text-center">{content.personalTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {personalCards.map((card) => {
              const CardIcon = iconMap[card.icon];
              return (
                <div
                  key={card.text}
                  className="rounded-lg px-4 py-3 flex items-center gap-3 bg-white"
                >
                  {CardIcon && <CardIcon size={20} weight="duotone" className="shrink-0" style={{ color: "var(--color-purple)" }} />}
                  <p className="text-sm font-medium text-charcoal">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="heading-lg mb-4">{content.contactTitle}</h2>
            <p className="body-lg mb-8">
              {content.contactDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${content.contactEmail}`}
                className="btn-primary"
                style={{ backgroundColor: "var(--color-purple)" }}
              >
                <Envelope size={20} weight="duotone" />
                {content.contactEmail}
              </a>
              <a
                href={content.contactLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ backgroundColor: "var(--color-purple)" }}
              >
                <LinkedinLogo size={20} weight="duotone" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

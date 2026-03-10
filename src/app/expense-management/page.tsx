import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  UsersFour,
  Lightbulb,
  MagnifyingGlass,
  Quotes,
  ListChecks,
  Receipt,
  ClockCounterClockwise,
  FileText,
  Sliders,
  Layout,
} from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ScrollReveal";
import { getPageContent } from "@/lib/content";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = {
  UsersFour,
  Lightbulb,
  MagnifyingGlass,
  ListChecks,
  Receipt,
  ClockCounterClockwise,
  FileText,
  Sliders,
  Layout,
};

export function generateMetadata() {
  const c = getPageContent("expense-management");
  return {
    title: c.meta_title,
    description: c.meta_description,
  };
}

export default function ExpenseManagementPage() {
  const content = getPageContent("expense-management");

  const roleItems = content.overview_role_items as Array<{ icon: string; text: string }>;
  const problemMetrics = content.problem_metrics as Array<{ value: string; label: string }>;
  const pilotMetrics = content.pilot_metrics as Array<{ value: string; label: string }>;
  const insightsCards = content.insights_cards as Array<{ icon: string; title: string; description: string }>;
  const solution1Steps = content.solution1_steps as Array<{ label: string; text: string }>;
  const solution1Images = content.solution1_images as Array<{ src: string; alt: string; width: number; height: number }>;
  const solution1Highlights = content.solution1_description_highlights as Array<string>;
  const solution2Improvements = content.solution2_improvements as Array<{ icon: string; title: string; description: string }>;
  const solution2DetailImages = content.solution2_detail_images as Array<{ label: string; src: string; alt: string }>;
  const outcomeMetrics = content.outcome_metrics as Array<{ value: string; label: string }>;

  // Build the solution1 description with highlights
  const renderSolution1Description = () => {
    let desc = content.solution1_description as string;
    const parts: React.ReactNode[] = [];
    let remaining = desc;
    let key = 0;

    for (const highlight of solution1Highlights) {
      const idx = remaining.indexOf(highlight);
      if (idx !== -1) {
        if (idx > 0) {
          parts.push(remaining.slice(0, idx));
        }
        parts.push(
          <span key={key++} className="highlight">
            {highlight}
          </span>
        );
        remaining = remaining.slice(idx + highlight.length);
      }
    }
    if (remaining) {
      parts.push(remaining);
    }
    return parts;
  };

  return (
    <>
      {/* Back Navigation */}
      <div className="bg-cream border-b border-sand/50">
        <div className="container-site py-3">
          <Link
            href={content.back_link_href}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-charcoal transition-colors"
          >
            <ArrowLeft size={16} weight="bold" />
            {content.back_link_text}
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src={content.hero_logo_src}
              alt={content.hero_logo_alt}
              width={160}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div className="max-w-3xl mb-10">
            <h1 className="heading-xl mb-6">{content.hero_title}</h1>
            <p className="body-lg">
              {content.hero_description}
            </p>
          </div>
          <div className="img-rounded">
            <Image
              src={content.hero_image_src}
              alt={content.hero_image_alt}
              width={1440}
              height={810}
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
                  {content.overview_label}
                </p>
                <h2 className="heading-lg mb-6">{content.overview_title}</h2>
                <p className="body-lg mb-6">
                  {content.overview_description}
                </p>
                <p className="body-md">
                  {content.overview_body}
                </p>
              </div>
              <div className="bg-white rounded-xl p-8">
                <h3 className="heading-md mb-4">{content.overview_role_title}</h3>
                <ul className="space-y-3">
                  {roleItems.map((item, i) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <li key={i} className="flex items-start gap-3">
                        {Icon && (
                          <Icon
                            size={22}
                            weight="duotone"
                            className="text-c1-blue mt-1 shrink-0"
                          />
                        )}
                        <span className="body-md">
                          {item.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              {content.problem_label}
            </p>
            <h2 className="heading-lg mb-8">
              {content.problem_title}
            </h2>
            <div className="max-w-3xl mb-10">
              <div className="bg-cream rounded-xl p-8 mb-8">
                <Quotes
                  size={32}
                  weight="fill"
                  className="text-c1-blue mb-4"
                />
                <blockquote className="text-xl font-medium text-charcoal leading-relaxed mb-4">
                  &ldquo;{content.problem_quote}&rdquo;
                </blockquote>
                <p className="body-md">
                  &mdash; {content.problem_quote_attribution}
                </p>
              </div>
              <p className="body-lg mb-6">
                {content.problem_description_1}
              </p>
              <p className="body-lg">
                {content.problem_description_2}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {problemMetrics.map((metric, i) => (
                <div key={i} className="metric-card">
                  <p className="metric-value text-c1-blue">{metric.value}</p>
                  <p className="metric-label">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Program */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              {content.pilot_label}
            </p>
            <h2 className="heading-lg mb-6">{content.pilot_title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="body-lg mb-6">
                  {(() => {
                    const text = content.pilot_description_1 as string;
                    const bold = content.pilot_description_1_bold as string;
                    const idx = text.indexOf(bold);
                    if (idx === -1) return text;
                    return (
                      <>
                        {text.slice(0, idx)}
                        <strong className="text-charcoal">{bold}</strong>
                        {text.slice(idx + bold.length)}
                      </>
                    );
                  })()}
                </p>
                <p className="body-lg mb-6">
                  {content.pilot_description_2}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {pilotMetrics.map((metric, i) => (
                    <div key={i} className="metric-card">
                      <p className="metric-value text-c1-blue">{metric.value}</p>
                      <p className="metric-label">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <ScrollReveal className="img-rounded">
                <Image
                  src={content.pilot_image_src}
                  alt={content.pilot_image_alt}
                  width={720}
                  height={480}
                  className="w-full"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Research Findings */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              {content.insights_label}
            </p>
            <h2 className="heading-lg mb-4">{content.insights_title}</h2>
            <p className="body-lg max-w-3xl mb-10">
              {content.insights_description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insightsCards.map((card, i) => {
                const Icon = iconMap[card.icon];
                return (
                  <div key={i} className="bg-cream rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-white rounded-lg">
                        {Icon && (
                          <Icon
                            size={28}
                            weight="duotone"
                            className="text-c1-blue"
                          />
                        )}
                      </div>
                      <h3 className="heading-md">{card.title}</h3>
                    </div>
                    <p className="body-md">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Solution #1 - Custom Fields */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              {content.solution1_label}
            </p>
            <h2 className="heading-lg mb-4">{content.solution1_title}</h2>
            <p className="body-lg max-w-3xl mb-10">
              {renderSolution1Description()}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white rounded-lg">
                {iconMap[content.solution1_how_it_works_icon] && (() => {
                  const Icon = iconMap[content.solution1_how_it_works_icon];
                  return (
                    <Icon
                      size={24}
                      weight="duotone"
                      className="text-c1-blue"
                    />
                  );
                })()}
              </div>
              <h3 className="heading-md">{content.solution1_how_it_works_title}</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              {solution1Steps.map((step, i) => (
                <div key={i} className="bg-white rounded-xl p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-2">
                    {step.label}
                  </p>
                  <p className="body-md">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <ScrollReveal className="img-rounded">
                <Image
                  src={solution1Images[0].src}
                  alt={solution1Images[0].alt}
                  width={solution1Images[0].width}
                  height={solution1Images[0].height}
                  className="w-full"
                />
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solution1Images.slice(1).map((img, i) => (
                  <ScrollReveal key={i} className="img-rounded">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="w-full"
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution #2 - Transaction Details Redesign */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              {content.solution2_label}
            </p>
            <h2 className="heading-lg mb-4">{content.solution2_title}</h2>
            <p className="body-lg max-w-3xl mb-10">
              {content.solution2_description}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cream rounded-lg">
                {iconMap[content.solution2_improvements_icon] && (() => {
                  const Icon = iconMap[content.solution2_improvements_icon];
                  return (
                    <Icon
                      size={24}
                      weight="duotone"
                      className="text-c1-blue"
                    />
                  );
                })()}
              </div>
              <h3 className="heading-md">{content.solution2_improvements_title}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {solution2Improvements.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={i} className="metric-card">
                    {Icon && (
                      <Icon
                        size={32}
                        weight="duotone"
                        className="text-c1-blue mx-auto mb-2"
                      />
                    )}
                    <p className="font-semibold text-charcoal">{item.title}</p>
                    <p className="metric-label">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Before / After */}
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                {content.solution2_before_label}
              </p>
              <ScrollReveal className="img-rounded border border-sand">
                <Image
                  src={content.solution2_before_image_src}
                  alt={content.solution2_before_image_alt}
                  width={1440}
                  height={810}
                  className="w-full"
                />
              </ScrollReveal>
            </div>

            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-4">
                {content.solution2_after_label}
              </p>
              <ScrollReveal className="img-rounded">
                <Image
                  src={content.solution2_after_image_src}
                  alt={content.solution2_after_image_alt}
                  width={1440}
                  height={810}
                  className="w-full"
                />
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solution2DetailImages.map((img, i) => (
                <div key={i}>
                  <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-4">
                    {img.label}
                  </p>
                  <ScrollReveal className="img-rounded">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={720}
                      height={480}
                      className="w-full"
                    />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results / Closing */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              {content.outcome_label}
            </p>
            <h2 className="heading-lg mb-6">{content.outcome_title}</h2>
            <p className="body-lg max-w-3xl mb-10">
              {content.outcome_description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {outcomeMetrics.map((metric, i) => (
                <div key={i} className="metric-card">
                  <p className="metric-value text-c1-blue">{metric.value}</p>
                  <p className="metric-label">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <ScrollReveal className="img-rounded">
              <Image
                src={content.outcome_image_src}
                alt={content.outcome_image_alt}
                width={1440}
                height={810}
                className="w-full"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="relative overflow-hidden p-10 md:p-16" style={{ backgroundColor: "hsl(74, 68%, 35%)" }}>
            <div className="hidden lg:block absolute top-0 bottom-0 w-px bg-white/15" style={{ left: "55%" }} />
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-c1-blue mb-3">
                Thank you for reading
              </p>
              <h2 className="heading-md text-white mb-4">
                Want to see more of my work?
              </h2>
              <p className="body-lg !text-white/70 mb-8">
                Check out my other case studies or head back to the portfolio.
              </p>
              <Link
                href="/"
                className="btn-primary inline-flex items-center gap-2 hover:opacity-85 hover:-translate-y-0.5 transition-all"
                style={{ backgroundColor: "hsl(249, 80%, 60%)" }}
              >
                <ArrowLeft size={18} weight="bold" />
                Back to Portfolio
              </Link>
            </div>

            <Link href="/roamswild" className="group block">
              <h2 className="heading-xl text-white mb-6">
                Next Project
              </h2>
              <div className="mb-4">
                <Image
                  src="/images/roamswild/mockup.png"
                  alt="RoamsWild app mockup"
                  width={600}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-white font-semibold group-hover:text-white/80 transition-colors">
                An AI-assisted exploration tool for finding better campsites, routes, and light
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-white/50 group-hover:text-white/70 transition-colors mt-2">
                View Project <ArrowRight size={14} weight="bold" />
              </span>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

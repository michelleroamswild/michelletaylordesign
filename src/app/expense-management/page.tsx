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
  Code,
  WarningCircle,
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
  Code,
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
  const pilotSteps = content.pilot_steps as string[];
  const researchPhotos = content.research_photos as Array<{ src: string; alt: string; caption: string }>;
  const insightsCards = content.insights_cards as Array<{ number: string; icon: string; title: string; description: string }>;
  const solution1Insights = content.solution1_insights as string[];
  const solution1Details = content.solution1_details as string[];
  const solution1Images = content.solution1_images as Array<{ src: string; alt: string }>;
  const solution2Insights = content.solution2_insights as string[];
  const solution3UserPerceptions = content.solution3_user_perceptions as string[];
  const solution3Scenarios = content.solution3_scenarios as Array<{ title: string; description: string }>;
  const solution3Images = content.solution3_images as Array<{ src: string; alt: string }>;

  // Parse **bold** segments
  const renderBold = (text: string) => {
    const parts: React.ReactNode[] = [];
    const pattern = /\*\*(.*?)\*\*/g;
    let lastIdx = 0;
    let match;
    let key = 0;
    while ((match = pattern.exec(text)) !== null) {
      if (match.index > lastIdx) parts.push(text.slice(lastIdx, match.index));
      parts.push(<strong key={key++} className="text-charcoal">{match[1]}</strong>);
      lastIdx = match.index + match[0].length;
    }
    if (lastIdx < text.length) parts.push(text.slice(lastIdx));
    return parts;
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#003857" }}>
        <div className="container-site h-full flex items-center py-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-center w-full">
            <div>
              <div className="mb-8">
                <Image
                  src={content.hero_logo_src}
                  alt={content.hero_logo_alt}
                  width={160}
                  height={40}
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <h1 className="heading-hero !text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
                Automating admin workflows and simplifying expense reporting
              </h1>
              <p className="body-lg text-white/75">
                {content.hero_description}
              </p>
            </div>
            <div className="relative lg:-mr-[50%]">
              <Image
                src={content.hero_image_src}
                alt={content.hero_image_alt}
                width={1440}
                height={810}
                className="w-full h-auto scale-90"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F7F7F8] overflow-hidden" style={{ paddingTop: "clamp(4rem, 10vw, 8rem)", paddingBottom: 0 }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-14">
              <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
                {content.overview_label}
              </p>
              <h2 className="heading-lg mb-6">{content.overview_title}</h2>
              <p className="body-lg mb-10">{content.overview_description}</p>
              <div className="relative overflow-hidden rounded-t-xl" style={{ maxHeight: "400px", boxShadow: "0 -4px 40px rgba(0, 0, 0, 0.12)" }}>
                <Image
                  src="/images/expense-management/Home.png"
                  alt="Commercial Card Platform home dashboard"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="heading-md mb-3">{content.overview_role_title}</h3>
              <p className="body-md mb-6">{content.overview_role_description}</p>
              <ul className="space-y-3">
                {roleItems.map((item, i) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <li key={i} className="flex items-start gap-3">
                      {Icon && <Icon size={22} weight="duotone" className="text-c1-blue mt-1 shrink-0" />}
                      <span className="body-md">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="case-study-spacing bg-white">
        <div className="container-site" style={{ maxWidth: "72rem" }}>
          <div className="text-center mb-20">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              {content.problem_label}
            </p>
            <h2 className="heading-lg">{content.problem_title}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="body-lg mb-6">{content.problem_description_1}</p>
              <p className="body-lg">{content.problem_description_2}</p>
            </div>
            <div className="bg-[#F7F7F8] rounded-xl p-8">
              <Quotes size={32} weight="fill" className="text-c1-blue mb-4" />
              <blockquote className="text-xl font-medium text-charcoal leading-relaxed mb-4">
                &ldquo;{content.problem_quote}&rdquo;
              </blockquote>
              <p className="body-md">&mdash; {content.problem_quote_attribution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Program */}
      <section className="case-study-spacing bg-[#F7F7F8]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
                {content.pilot_label}
              </p>
              <h2 className="heading-lg mb-6">{content.pilot_title}</h2>
              <p className="body-lg mb-8">{renderBold(content.pilot_description_1 as string)}</p>
              <ul className="space-y-4">
                {pilotSteps.map((step, i) => (
                  <li key={i} className="body-md flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-c1-blue text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <ScrollReveal className="img-rounded">
              <Image
                src={content.pilot_image_src}
                alt={content.pilot_image_alt}
                width={720}
                height={480}
                className="w-full"
              />
              <p className="text-xs text-muted mt-3 text-center">{content.pilot_image_alt}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Supporting Research */}
      <section className="case-study-spacing bg-white">
        <div className="container-site">
          <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
            {content.research_label}
          </p>
          <h2 className="heading-lg mb-10">{content.research_title}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#F7F7F8] rounded-xl p-8">
              <h3 className="heading-md mb-3">{content.research_proxy_title}</h3>
              <p className="body-md">{content.research_proxy_description}</p>
            </div>
            <div className="bg-[#F7F7F8] rounded-xl p-8">
              <h3 className="heading-md mb-3">{content.research_market_title}</h3>
              <p className="body-md">{content.research_market_description}</p>
            </div>
            <div className="bg-[#F7F7F8] rounded-xl p-8">
              <h3 className="heading-md mb-3">{content.research_segment_title}</h3>
              <p className="body-md">{content.research_segment_description}</p>
            </div>
          </div>

          {/* Research Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchPhotos.map((photo, i) => (
              <ScrollReveal key={i} className="img-rounded">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={720}
                  height={480}
                  className="w-full"
                />
                <p className="text-xs text-muted mt-3 text-center">{photo.caption}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="case-study-spacing bg-[#F7F7F8]">
        <div className="container-site">
          <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
            {content.insights_label}
          </p>
          <h2 className="heading-lg mb-4">{content.insights_title}</h2>
          <p className="body-lg max-w-3xl mb-10">{content.insights_description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insightsCards.map((card, i) => {
              const Icon = iconMap[card.icon];
              return (
                <div key={i} className="bg-white rounded-xl p-8 relative">
                  {Icon && <Icon size={28} weight="duotone" className="text-c1-blue absolute top-8 right-8 opacity-40" />}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-c1-blue text-white text-sm font-bold flex items-center justify-center shrink-0">
                      {card.number}
                    </div>
                    <h3 className="heading-md">{card.title}</h3>
                  </div>
                  <p className="body-md">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution #1 - Custom Fields */}
      <section className="case-study-spacing bg-white">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              {content.solution1_label}
            </p>
            <h2 className="heading-lg">{content.solution1_title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-36 max-w-5xl mx-auto">
            <div className="bg-[#F7F7F8] rounded-xl p-8">
              <h3 className="text-base font-bold text-charcoal mb-3">Problem</h3>
              <p className="body-md">{content.solution1_problem}</p>
            </div>
            <div className="bg-[#F7F7F8] rounded-xl p-8">
              <h3 className="text-base font-bold text-charcoal mb-3">Insights</h3>
              <ul className="space-y-3">
                {solution1Insights.map((insight, i) => (
                  <li key={i} className="body-md flex items-start gap-3">
                    <Lightbulb size={18} weight="duotone" className="text-c1-blue shrink-0 mt-0.5" />
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution + Scrollable Images */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-start mt-20">
            <div className="lg:sticky lg:top-28">
              <h3 className="heading-lg mb-4">Solution</h3>
              <p className="body-lg mb-6">{content.solution1_solution}</p>
              <ul className="space-y-3">
                {solution1Details.map((detail, i) => (
                  <li key={i} className="body-md flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-c1-blue mt-[0.65rem]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              {(() => {
                const reversed = [...solution1Images].reverse();
                const panelPair = reversed.filter(img => img.src.includes("CreateField") || img.src.includes("AddCodes"));
                const rest = reversed.filter(img => !img.src.includes("CreateField") && !img.src.includes("AddCodes"));
                return (
                  <>
                    {rest.map((img, i) => (
                      <Image
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        width={720}
                        height={480}
                        className="w-full"
                        style={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)" }}
                      />
                    ))}
                    {panelPair.length === 2 && (
                      <div className="grid grid-cols-2 gap-4">
                        {panelPair.map((img, i) => (
                          <Image
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            width={360}
                            height={480}
                            className="w-full img-rounded"
                          />
                        ))}
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>

          <div className="mt-16 rounded-xl overflow-hidden flex items-center justify-center py-16" style={{ backgroundColor: "#003857" }}>
            <Image
              src="/images/expense-management/ExpenseManagementMobile.png"
              alt="Mobile expense management screens showing transaction details with and without expense data"
              width={1440}
              height={810}
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Solution #2 - Transaction Details Redesign */}
      <section className="case-study-spacing bg-[#F7F7F8]">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              {content.solution2_label}
            </p>
            <h2 className="heading-lg">{content.solution2_title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-36 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-base font-bold text-charcoal mb-3">Problem</h3>
              <p className="body-md">{content.solution2_problem}</p>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-base font-bold text-charcoal mb-3">Insights</h3>
              <ul className="space-y-3">
                {solution2Insights.map((insight, i) => (
                  <li key={i} className="body-md flex items-start gap-3">
                    <Lightbulb size={18} weight="duotone" className="text-c1-blue shrink-0 mt-0.5" />
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-start">
            <div className="lg:sticky lg:top-28">
              <h3 className="heading-lg mb-4">Solution</h3>
              <p className="body-md text-muted mb-6">{content.solution2_pilot_note}</p>
              <p className="body-lg">{content.solution2_solution}</p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                  {content.solution2_before_label}
                </p>
                <Image
                  src={content.solution2_before_image_src}
                  alt={content.solution2_before_image_alt}
                  width={720}
                  height={480}
                  className="w-full"
                  style={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)" }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-4">
                  {content.solution2_after_label}
                </p>
                <Image
                  src={content.solution2_after_image_src}
                  alt={content.solution2_after_image_alt}
                  width={720}
                  height={480}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution #3 - Pending Transaction Data */}
      <section className="case-study-spacing bg-white">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              {content.solution3_label}
            </p>
            <h2 className="heading-lg">{content.solution3_title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-36 max-w-5xl mx-auto">
            <div className="bg-[#F7F7F8] rounded-xl p-8">
              <h3 className="text-base font-bold text-charcoal mb-3">Problem</h3>
              <p className="body-md mb-4">{content.solution3_problem}</p>
              <p className="body-md">{content.solution3_description}</p>
            </div>
            <div className="bg-[#F7F7F8] rounded-xl p-8">
              <h3 className="text-base font-bold text-charcoal mb-3">User Perceptions</h3>
              <ul className="space-y-3">
                {solution3UserPerceptions.map((perception, i) => (
                  <li key={i} className="body-md flex items-start gap-3">
                    <WarningCircle size={18} weight="duotone" className="text-c1-blue shrink-0 mt-0.5" />
                    &ldquo;{perception}&rdquo;
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-start">
            <div className="lg:sticky lg:top-28">
              <h3 className="heading-lg mb-4">Solution</h3>
              <p className="body-lg mb-6">{content.solution3_solution}</p>
              <div className="space-y-4">
                {solution3Scenarios.map((scenario, i) => (
                  <div key={i} className="bg-[#F7F7F8] rounded-xl p-6">
                    <h4 className="font-semibold text-charcoal mb-2">{scenario.title}</h4>
                    <p className="body-md">{scenario.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {solution3Images.map((img, i) => (
                <Image
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  width={1440}
                  height={810}
                  className="w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution #4 - Expense Reports */}
      <section className="case-study-spacing bg-[#F7F7F8]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
                {content.solution4_label}
              </p>
              <h2 className="heading-lg mb-6">{content.solution4_title}</h2>
              <p className="body-lg">{content.solution4_description}</p>
            </div>
            <ScrollReveal className="img-rounded">
              <Image
                src={content.solution4_image_src}
                alt={content.solution4_image_alt}
                width={400}
                height={800}
                className="w-full max-w-sm mx-auto"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="case-study-spacing bg-white">
        <div className="container-site">
          <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
            {content.outcome_label}
          </p>
          <h2 className="heading-lg mb-6">{content.outcome_title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="body-lg mb-6">{content.outcome_description}</p>
              <p className="body-md text-muted">{content.outcome_note}</p>
            </div>
            <div className="bg-[#F7F7F8] rounded-xl p-8">
              <Quotes size={32} weight="fill" className="text-c1-blue mb-4" />
              <blockquote className="text-lg font-medium text-charcoal leading-relaxed mb-4">
                &ldquo;{content.outcome_quote}&rdquo;
              </blockquote>
              <p className="body-md">&mdash; {content.outcome_quote_attribution}</p>
            </div>
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
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="relative overflow-hidden p-10 md:p-16" style={{ backgroundColor: "var(--color-rw-forest-dark)" }}>
            <div className="hidden lg:block absolute top-0 bottom-0 w-px bg-white/15" style={{ left: "55%" }} />
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
              <div className="max-w-xl order-2 lg:order-1">
                <h2 className="heading-md text-white mb-6">{content.footerCtaTitle}</h2>
                <div className="space-y-12">
                  <div>
                    <Link
                      href={content.footerCtaButtonHref}
                      className="btn-primary inline-flex items-center gap-2 hover:opacity-85 hover:-translate-y-0.5 transition-all"
                      style={{ backgroundColor: "var(--color-purple)" }}
                    >
                      <ArrowLeft size={18} weight="bold" />
                      {content.footerCtaButtonText}
                    </Link>
                  </div>
                  <div>
                    <h2 className="heading-md text-white mb-3">{content.footerAboutText}</h2>
                    <Link
                      href={content.footerAboutHref}
                      className="btn-primary inline-flex items-center gap-2 hover:opacity-85 hover:-translate-y-0.5 transition-all"
                      style={{ backgroundColor: "var(--color-purple)" }}
                    >
                      {content.footerAboutButtonText}
                      <ArrowRight size={14} weight="bold" />
                    </Link>
                  </div>
                </div>
              </div>

              <Link href={content.nextProjectHref} className="group block order-1 lg:order-2">
                <h2 className="heading-xl text-white mb-6 text-center">{content.nextProjectTitle}</h2>
                <div className="mb-4">
                  <Image
                    src={content.nextProjectImage}
                    alt={content.nextProjectImageAlt}
                    width={600}
                    height={400}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-white font-semibold group-hover:text-white/80 transition-colors">
                  {content.nextProjectDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm text-white/50 group-hover:text-white/70 transition-colors mt-2">
                  {content.nextProjectLinkText} <ArrowRight size={14} weight="bold" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

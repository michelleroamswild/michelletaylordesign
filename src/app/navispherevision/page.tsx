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
import { getPageContent } from "@/lib/content";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  ChartLine,
  Rows,
  Eye,
  MagnifyingGlass,
  MapTrifold,
  ListBullets,
  Package,
  NavigationArrow,
  CalendarDots,
};

export default function NavisphereVisionPage() {
  const content = getPageContent("navispherevision");

  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <Link
            href={content.hero_backLinkHref}
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-charcoal transition-colors mb-8"
          >
            <ArrowLeft size={16} weight="bold" />
            {content.hero_backLink}
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <Image
              src={content.hero_logo}
              alt={content.hero_logoAlt}
              width={48}
              height={48}
              className="rounded-lg"
            />
            <span className="text-sm font-medium text-muted">
              {content.hero_company}
            </span>
          </div>

          <h1 className="heading-xl mb-6 max-w-3xl">
            {content.hero_title}
          </h1>
          <p className="body-lg max-w-2xl mb-10">
            {(content.hero_description as string).split(content.hero_highlight as string)[0]}
            <span className="highlight">{content.hero_highlight}</span>
            {(content.hero_description as string).split(content.hero_highlight as string)[1]}
          </p>

          <div className="img-rounded">
            <Image
              src={content.hero_image}
              alt={content.hero_imageAlt}
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
          <h2 className="heading-lg mb-8">{content.overview_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="body-lg">
                {content.overview_description}
              </p>
            </div>
            <div>
              <h3 className="heading-md mb-4">{content.overview_responsibilitiesTitle}</h3>
              <ul className="space-y-3">
                {(content.overview_responsibilities as Array<{ icon: string; text: string }>).map((item, i) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <div className="p-2 bg-white rounded-lg shrink-0">
                        {Icon && (
                          <Icon
                            size={20}
                            weight="duotone"
                            className="text-chr-blue"
                          />
                        )}
                      </div>
                      <span className="body-md">{item.text}</span>
                    </li>
                  );
                })}
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
              {content.problem_label}
            </span>
          </div>
          <h2 className="heading-lg mb-6">
            {content.problem_title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="body-lg mb-4">
                {content.problem_description1}
              </p>
              <p className="body-lg mb-6">
                {content.problem_description2}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {(content.problem_metrics as Array<{ value: string; label: string }>).map((metric, i) => (
                  <div key={i} className="metric-card">
                    <p className="metric-value">{metric.value}</p>
                    <p className="metric-label">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-rounded">
              <Image
                src={content.problem_image}
                alt={content.problem_imageAlt}
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
              {content.finding1_label}
            </span>
          </div>
          <h2 className="heading-lg mb-6">
            {content.finding1_title}
          </h2>
          <div className="bg-white rounded-xl p-8 mb-8">
            <blockquote className="text-lg italic text-charcoal leading-relaxed border-l-4 border-chr-blue pl-6">
              &ldquo;{(content.finding1_quote as string).replace(/^"|"$/g, "")}&rdquo;
            </blockquote>
            <p className="text-sm text-muted mt-3">
              {content.finding1_quoteAttribution}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(content.finding1_cards as Array<{ icon: string; title: string; description: string }>).map((card, i) => {
              const Icon = iconMap[card.icon];
              return (
                <div key={i} className="bg-white rounded-xl p-6">
                  <div className="p-2 bg-cream rounded-lg inline-flex mb-3">
                    {Icon && (
                      <Icon
                        size={24}
                        weight="duotone"
                        className="text-chr-blue"
                      />
                    )}
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">
                    {card.title}
                  </h3>
                  <p className="body-md">
                    {card.description}
                  </p>
                </div>
              );
            })}
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
              {content.finding2_label}
            </span>
          </div>
          <h2 className="heading-lg mb-6">
            {content.finding2_title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(content.finding2_cards as Array<{ title: string; description: string }>).map((finding, i) => (
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
              {content.solution1_label}
            </span>
          </div>
          <h2 className="heading-lg mb-4">
            {content.solution1_title}
          </h2>
          <p className="body-lg max-w-2xl mb-10">
            {content.solution1_description}
          </p>

          <div className="space-y-10">
            {(content.solution1_views as Array<{ icon: string; title: string; description: string; image: string; imageAlt: string }>).map((view, i) => {
              const Icon = iconMap[view.icon];
              return (
                <div key={i} className="bg-white rounded-xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cream rounded-lg">
                      {Icon && (
                        <Icon
                          size={24}
                          weight="duotone"
                          className="text-chr-blue"
                        />
                      )}
                    </div>
                    <h3 className="heading-md">{view.title}</h3>
                  </div>
                  <p className="body-md mb-6 max-w-xl">
                    {view.description}
                  </p>
                  <div className="img-rounded">
                    <Image
                      src={view.image}
                      alt={view.imageAlt}
                      width={1200}
                      height={700}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              );
            })}
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
              {content.solution2_label}
            </span>
          </div>
          <h2 className="heading-lg mb-4">
            {content.solution2_title}
          </h2>
          <p className="body-lg max-w-2xl mb-10">
            {content.solution2_description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              {(content.solution2_items as Array<{ icon: string; title: string; description: string }>).map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg shrink-0 border border-sand">
                      {Icon && (
                        <Icon
                          size={22}
                          weight="duotone"
                          className="text-chr-blue"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">
                        {item.title}
                      </h3>
                      <p className="body-md">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="img-rounded">
              <Image
                src={content.solution2_image}
                alt={content.solution2_imageAlt}
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
              {content.outcomes_label}
            </span>
          </div>
          <h2 className="heading-lg mb-8">
            {content.outcomes_title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {(content.outcomes_metrics as Array<{ value: string; label: string }>).map((metric, i) => (
              <div key={i} className="metric-card">
                <p className="metric-value">{metric.value}</p>
                <p className="metric-label">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8">
            <h3 className="heading-md mb-6">{content.outcomes_deliveredTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              {(content.outcomes_delivered as string[]).map((item, i) => (
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
            href={content.backLinkHref}
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} weight="bold" />
            {content.backLink}
          </Link>
        </div>
      </section>
    </>
  );
}

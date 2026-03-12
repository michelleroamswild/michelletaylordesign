import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import {
  ListChecks,
  Lightning,
  UserMinus,
  ChartLineUp,
  CurrencyDollar,
  TrendUp,
  ClockCountdown,
  Receipt,
  ShieldCheck,
  Eye,
  Warning,
  Globe,
  Mountains,
  Brain,
  MapTrifold,
  Sparkle,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  ListChecks,
  Lightning,
  UserMinus,
  ChartLineUp,
  CurrencyDollar,
  TrendUp,
  ClockCountdown,
  Receipt,
  ShieldCheck,
  Eye,
  Warning,
  Globe,
  Mountains,
  Brain,
  MapTrifold,
};

interface KeyResult {
  icon: string;
  value: string;
  label: string;
}

interface CaseStudyCardProps {
  logo: string;
  logoAlt: string;
  logoWidth?: number;
  logoHeight?: number;
  title: string;
  summary: string;
  results: string;
  keyResults?: KeyResult[];
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  bg?: string;
  darkText?: boolean;
  featured?: boolean;
  tags?: string[];
  accent?: string;
  lightAccent?: boolean;
}

export default function CaseStudyCard({
  logo,
  logoAlt,
  logoWidth = 100,
  logoHeight = 32,
  title,
  summary,
  results,
  keyResults,
  cta,
  href,
  image,
  imageAlt,
  bg = "bg-cream",
  darkText = true,
  featured = false,
  tags,
  accent,
  lightAccent = false,
}: CaseStudyCardProps) {
  const textColor = darkText ? "text-charcoal" : "text-white";
  const mutedColor = darkText ? "text-muted-light" : "text-white/70";
  const labelColor = darkText ? "text-muted" : "text-white/80";
  const btnClass = accent
    ? "btn-case-study"
    : darkText
      ? "btn-case-study"
      : "btn-case-study !bg-white !text-charcoal";

  return (
    <div className={`card ${bg} relative`}>
      {tags && tags.length > 0 && (
        <div className="hidden md:flex absolute top-12 lg:top-16 right-12 lg:right-16 z-10 flex-wrap gap-2 justify-end">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[0.65rem] font-bold uppercase tracking-wider px-4 py-2 rounded-full border inline-flex items-center gap-1.5"
              style={{
                backgroundColor: accent
                  ? lightAccent ? `color-mix(in srgb, ${accent} 8%, white)` : `color-mix(in srgb, ${accent} 15%, white)`
                  : darkText ? "hsl(249, 80%, 92%)" : "rgba(255,255,255,0.15)",
                color: lightAccent ? "#1a1a1a" : accent || (darkText ? "hsl(249, 80%, 60%)" : "rgba(255,255,255,0.8)"),
                borderColor: accent || (darkText ? "hsl(249, 80%, 60%)" : "rgba(255,255,255,0.3)"),
              }}
            >
              {t}
            </span>
          ))}
        </div>
      )}
      <div className="grid md:grid-cols-[2fr_3fr] gap-0 items-center">
        {/* Text side - always left */}
        <div className="p-10 md:p-12 lg:p-16 flex flex-col gap-5">
          <Image
            src={logo}
            alt={logoAlt}
            width={logoWidth}
            height={logoHeight}
            className="object-contain object-left mb-3"
            style={{ width: `${logoWidth}px`, height: "auto" }}
          />
          {tags && tags.length > 0 && (
            <div className="flex md:hidden flex-wrap gap-1.5 -mt-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-[0.55rem] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border inline-flex items-center gap-1"
                  style={{
                    backgroundColor: accent
                      ? lightAccent ? `color-mix(in srgb, ${accent} 8%, white)` : `color-mix(in srgb, ${accent} 15%, white)`
                      : darkText ? "hsl(249, 80%, 92%)" : "rgba(255,255,255,0.15)",
                    color: lightAccent ? "#1a1a1a" : accent || (darkText ? "hsl(249, 80%, 60%)" : "rgba(255,255,255,0.8)"),
                    borderColor: accent || (darkText ? "hsl(249, 80%, 60%)" : "rgba(255,255,255,0.3)"),
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          <h3 className={`heading-lg ${textColor} mb-4`}>{title}</h3>
          <div className="space-y-4">
            <div>
              <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${labelColor}`}>
                Summary
              </p>
              <p className={`body-md ${mutedColor}`}>{summary}</p>
            </div>
            <div>
              <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${labelColor}`}>
                Results
              </p>
              <p className={`body-md ${mutedColor}`}>{results}</p>
            </div>
            {keyResults && keyResults.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-6">
                {keyResults.map((kr) => {
                  const Icon = iconMap[kr.icon];
                  return (
                    <div
                      key={kr.label}
                      className="rounded-lg p-3 text-center flex flex-col items-center justify-center"
                      style={{ backgroundColor: darkText ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)" }}
                    >
                      {Icon && (
                        <Icon
                          size={20}
                          weight="duotone"
                          style={accent ? { color: accent } : undefined}
                          className={`mx-auto mb-1 ${!accent ? (darkText ? "text-charcoal" : "text-white") : ""}`}
                        />
                      )}
                      <p className={`text-lg font-bold ${textColor}`} style={accent ? { color: accent } : undefined}>{kr.value}</p>
                      <p className={`text-xs ${mutedColor}`}>{kr.label}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="mt-10">
            <Link
              href={href}
              className={accent ? "btn-accent" : btnClass}
              style={accent ? { backgroundColor: accent, ...(lightAccent ? { color: "#1a1a1a" } : {}) } : undefined}
            >
              {cta} <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>

        {/* Image side - always right */}
        <ScrollReveal className="relative min-h-[350px] md:min-h-[800px] p-6 md:p-10 flex items-center justify-center">
          {image.endsWith(".gif") ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={imageAlt}
              className="max-w-full max-h-full object-contain rounded-xl drop-shadow-lg"
            />
          ) : (
            <div className="relative w-full h-full min-h-[330px] md:min-h-[760px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
}

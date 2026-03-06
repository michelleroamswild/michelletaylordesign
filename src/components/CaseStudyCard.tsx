import Image from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
  logo: string;
  logoAlt: string;
  logoWidth?: number;
  logoHeight?: number;
  title: string;
  summary: string;
  results: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  bg?: string;
  darkText?: boolean;
}

export default function CaseStudyCard({
  logo,
  logoAlt,
  logoWidth = 100,
  logoHeight = 32,
  title,
  summary,
  results,
  cta,
  href,
  image,
  imageAlt,
  bg = "bg-cream",
  darkText = true,
}: CaseStudyCardProps) {
  const textColor = darkText ? "text-charcoal" : "text-white";
  const mutedColor = darkText ? "text-muted" : "text-white/90";
  const labelColor = darkText ? "text-charcoal" : "text-white";
  const btnClass = darkText
    ? "btn-case-study"
    : "btn-case-study !bg-white !text-charcoal";

  return (
    <div className={`card ${bg}`}>
      <div className="grid md:grid-cols-[2fr_3fr] gap-0 items-center">
        {/* Text side - always left */}
        <div className="p-10 md:p-12 lg:p-16 flex flex-col gap-5">
          <Image
            src={logo}
            alt={logoAlt}
            width={logoWidth}
            height={logoHeight}
            className="h-6 w-auto object-contain object-left"
          />
          <h3 className={`heading-lg ${textColor}`}>{title}</h3>
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
          </div>
          <div className="mt-2">
            <Link href={href} className={btnClass}>
              {cta}
            </Link>
          </div>
        </div>

        {/* Image side - always right */}
        <div className="relative min-h-[350px] md:min-h-[800px] p-6 md:p-10">
          <div className="relative w-full h-full min-h-[330px] md:min-h-[760px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

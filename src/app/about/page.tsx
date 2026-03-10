import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Envelope,
  Camera,
  Mountains,
  LinkedinLogo,
  Strategy,
  CirclesThreePlus,
  UsersThree,
  MagnifyingGlass,
  Cube,
  Rocket,
  Robot,
} from "@phosphor-icons/react/dist/ssr";

const expertise = [
  {
    icon: Strategy,
    title: "Product Strategy & Problem Framing",
    description: "B2B and B2B2C product thinking rooted in business context",
  },
  {
    icon: Cube,
    title: "Platform & Systems Design",
    description: "Multi-surface products with cohesive architecture",
  },
  {
    icon: MagnifyingGlass,
    title: "User Research to Action",
    description: "Translating research insights into actionable design decisions",
  },
  {
    icon: UsersThree,
    title: "Cross-Functional Collaboration",
    description: "Partnering with engineering, product, and stakeholders",
  },
  {
    icon: CirclesThreePlus,
    title: "Design Systems & Scalability",
    description: "Building reusable components and shared design language",
  },
  {
    icon: Rocket,
    title: "End-to-End Product Design",
    description: "From discovery and definition through delivery and iteration",
  },
  {
    icon: Robot,
    title: "AI & Agentic Coding Tools",
    description: "Leveraging AI-powered tools for rapid prototyping and exploration",
  },
];

const timeline = [
  {
    company: "Bolt",
    dates: "April 2022 - June 2024",
    role: "Sr. Product Designer",
    domain: "E-commerce, B2B & Consumer Platforms",
    achievements: [
      "Reduced merchant onboarding from 70+ days to minutes",
      "Designed abandoned cart recovery flows contributing to $18M in recovered revenue",
      "Shipped a net-new product from concept to launch in 60 days",
      "Built and scaled design system components across product surfaces",
    ],
  },
  {
    company: "Capital One",
    dates: "Mar 2019 - Nov 2021",
    role: "Principal Experience Designer",
    domain: "Commercial Banking",
    achievements: [
      "Led design of a unified expense management platform for corporate cardholders",
      "Conducted 50+ research sessions with admins, cardholders, and stakeholders",
      "Created a mobile-first design system for the commercial banking suite",
      "Developed SSO and cross-product navigation vision",
    ],
  },
  {
    company: "C.H. Robinson",
    dates: "Nov 2017 - Feb 2019",
    role: "Lead UX Designer",
    domain: "Transportation & Logistics",
    achievements: [
      "Led enterprise-wide user research to inform platform strategy",
      "Established design standards across product teams",
    ],
  },
  {
    company: "Clockwork",
    dates: "Oct 2012 - Jul 2017",
    role: "Interactive Designer",
    domain: "Agency",
    achievements: [
      "Designed for government, non-profit, and retail clients",
      "Championed WCAG 2.0 accessibility compliance across projects",
    ],
  },
];

export const metadata = {
  title: "About Michelle Taylor — Product Designer",
  description:
    "Michelle Taylor is a product designer with 10+ years of experience in e-commerce, fintech, and enterprise SaaS, specializing in strategy-led design for B2B and B2B2C products.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Intro */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">
              Curious by nature, my design process is grounded in{" "}
              <span className="highlight">systems thinking</span> — designing
              digital products that simplify complexity, aligning user insight,
              technical reality, and business goals into experiences that
              actually work.
            </h1>
            <p className="body-lg mt-8">
              I&apos;m a builder at heart — drawn to design not because I wanted
              to make things pretty, but because I wanted to understand how
              things work. I focus on spotting what&apos;s broken and making
              things better through thoughtful iteration. That curiosity is what
              keeps me digging deeper, asking harder questions, and designing
              with more intention.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cream rounded-lg">
                <Briefcase
                  size={28}
                  weight="duotone"
                  className="text-charcoal"
                />
              </div>
              <h2 className="heading-lg">Professional Summary</h2>
            </div>
            <p className="body-lg">
              Lead Product Designer with 10+ years of experience in complex B2B
              and B2B2C products spanning e-commerce, fintech, and enterprise.
              Known for translating business problems into scalable design
              solutions that drive revenue growth, operational efficiency, and
              customer adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <h2 className="heading-lg mb-10">Areas of Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 flex items-start gap-4"
              >
                <div className="p-2 bg-cream rounded-lg shrink-0">
                  <item.icon
                    size={28}
                    weight="duotone"
                    className="text-charcoal"
                  />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{item.title}</p>
                  <p className="body-md mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-cream rounded-lg">
              <Briefcase
                size={28}
                weight="duotone"
                className="text-charcoal"
              />
            </div>
            <h2 className="heading-lg">Experience</h2>
          </div>

          <div className="relative ml-4 border-l-2 border-sand pl-8 space-y-12">
            {timeline.map((job) => (
              <div key={job.company} className="relative">
                <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 bg-charcoal rounded-full" />
                <p className="text-sm text-muted font-medium">{job.dates}</p>
                <h3 className="heading-md mt-1">{job.company}</h3>
                <p className="body-lg mt-1">
                  {job.role} — {job.domain}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.achievements.map((item) => (
                    <li
                      key={item}
                      className="body-md flex items-start gap-2"
                    >
                      <span className="text-accent mt-1.5 shrink-0">
                        &bull;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cream-dark rounded-lg">
                <GraduationCap
                  size={28}
                  weight="duotone"
                  className="text-charcoal"
                />
              </div>
              <h2 className="heading-lg">Education</h2>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="heading-md">University of Washington</h3>
              <p className="body-lg mt-2">
                B.A. in Design Studies with a focus in Interaction Design
              </p>
              <p className="body-md mt-1">Minor in Cultural Geography</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cream rounded-lg">
                <Heart
                  size={28}
                  weight="duotone"
                  className="text-charcoal"
                />
              </div>
              <h2 className="heading-lg">A Little More About Me</h2>
            </div>
            <p className="body-lg mb-6">
              I&apos;m an Enneagram 8 and an Aries — so yes, I have opinions and
              I&apos;m not afraid to share them. I value honesty and
              transparency above almost everything else, and I bring that same
              directness to my work.
            </p>
            <p className="body-lg mb-8">
              Outside of design, you&apos;ll find me hiking, shooting 35mm film
              photography, nerding out about geography, and building things.
              I&apos;m a solo traveler who recently took a sabbatical to travel
              the country — it was the kind of reset that sharpens your
              perspective in ways a desk never could.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: Mountains, label: "Hiking" },
                { icon: Camera, label: "35mm Film Photography" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 bg-cream rounded-full px-4 py-2 text-sm font-medium text-charcoal"
                >
                  <tag.icon size={18} weight="duotone" />
                  {tag.label}
                </span>
              ))}
              <span className="inline-flex items-center gap-2 bg-cream rounded-full px-4 py-2 text-sm font-medium text-charcoal">
                Geography
              </span>
              <span className="inline-flex items-center gap-2 bg-cream rounded-full px-4 py-2 text-sm font-medium text-charcoal">
                Solo Travel
              </span>
              <span className="inline-flex items-center gap-2 bg-cream rounded-full px-4 py-2 text-sm font-medium text-charcoal">
                Building Things
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Photos */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <h2 className="heading-lg mb-8">On the Road</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="img-rounded relative aspect-[4/3]">
              <Image
                src="/images/about/DJI_0879.jpg"
                alt="Drone landscape photograph"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="img-rounded relative aspect-[4/3]">
              <Image
                src="/images/about/DSC09190.jpg"
                alt="Landscape photograph"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="img-rounded relative aspect-[4/3]">
              <Image
                src="/images/about/DSC09645.jpg"
                alt="Landscape photograph"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Let&apos;s Connect</h2>
            <p className="body-lg mb-8">
              I&apos;m always open to conversations about product design,
              interesting problems, or what&apos;s next.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:mictaylo@gmail.com"
                className="btn-primary"
              >
                <Envelope size={20} weight="duotone" />
                mictaylo@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/michelletaylordesign"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
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

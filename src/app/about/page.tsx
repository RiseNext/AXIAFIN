import type { Metadata } from "next";
import Image from "next/image";
import {
  Briefcase,
  Globe2,
  Scale,
  Wallet,
  ClipboardCheck,
  ShieldCheck,
  Zap,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BrandDivider } from "@/components/ui/BrandDivider";
import { FadeIn } from "@/components/ui/FadeIn";
import { LinkButton } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AXIAFIN, a unit of SRASHTA FIN SERVICES PRIVATE LIMITED — a premier Hyderabad-based professional services firm delivering International Taxation, Virtual CFO, Legal Representation, and end-to-end financial compliance.",
  alternates: { canonical: "/about" },
};

type Person = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  icon: LucideIcon;
};

const leadership: Person[] = [
  {
    name: "CA Nalla Sandeep Kumar",
    role: "Founder & Senior Consultant",
    bio: "With over eight years of distinguished experience in the profession, Sandeep leads the firm's strategic vision. His profound expertise spans Statutory Auditing, the Income Tax Act, the GST Act, the Companies Act, and adept legal representation. Known for his exceptional track record in securing GST refunds, Sandeep has built deep, lasting trust with clients through his commitment to value-driven, reliable service.",
    initials: "SN",
    icon: ShieldCheck,
  },
  {
    name: "Srujan Neela",
    role: "Director",
    bio: "Bringing five years of hands-on experience in Income Tax and GST compliance, Srujan is an integral part of the firm's operational leadership. His technical acumen and dedication ensure the meticulous execution of client mandates.",
    initials: "SN",
    icon: ClipboardCheck,
  },
  {
    name: "Bhanuprakash S",
    role: "Director",
    bio: "Bhanuprakash brings six years of robust business management experience to the board. His strategic oversight and operational expertise ensure that our firm delivers efficient, scalable, and client-centric solutions across all service verticals.",
    initials: "BS",
    icon: Briefcase,
  },
];

const advisors: Person[] = [
  {
    name: "CA S Karan",
    role: "Senior Advisor — International Tax & Litigation",
    bio: "A highly accomplished Chartered Accountant with over a decade of experience, including five years at a Big 4 consulting firm. Karan specializes in tax litigation, transaction advisory, corporate and international taxation, GST, Transfer Pricing, MLI, and BEPS. He frequently advises multinational corporations, startups, and HNIs on corporate structuring and Advance Pricing Agreements (APA). A respected voice in the industry, Karan regularly represents clients before Tax Tribunals, Commissioners (Appeals), and Dispute Resolution Panels. He actively contributes to the ICAI's Board of Studies and frequently authors publications on international tax developments.",
    initials: "SK",
    icon: Globe2,
  },
  {
    name: "Advocate Raghu Ram",
    role: "Senior Counsel — Direct Tax Litigation",
    bio: "With two decades of formidable experience in Direct Tax litigation, Raghu Ram represents clients before the High Court and ITAT. He possesses an exceptional track record of resolving highly complex, high-stakes tax disputes, consistently delivering outstanding legal outcomes for our clients.",
    initials: "RR",
    icon: Scale,
  },
  {
    name: "Advocate Ravi Kumar",
    role: "Senior Counsel — Indirect Tax Litigation",
    bio: "Bringing 20 years of specialized expertise in indirect tax litigation, Ravi Kumar has successfully defended a diverse portfolio of clients. His deep procedural knowledge and strategic legal foresight have consistently yielded exceptional results in complex indirect tax matters.",
    initials: "RK",
    icon: Scale,
  },
  {
    name: "CA G Srinivas",
    role: "Senior Advisor — vCFO Services",
    bio: "Srinivas carries 15 years of rich corporate finance experience, specializing in end-to-end vCFO services. He has been instrumental in guiding Global Capability Centers (GCCs) and Indian subsidiaries of foreign multinationals. His expertise in delivering real-time MIS reporting and granular budget analysis empowers businesses to make agile, informed financial decisions.",
    initials: "GS",
    icon: Wallet,
  },
  {
    name: "CA Bharath Ch",
    role: "Senior Advisor — Audit & Taxation",
    bio: "With 12 years in the profession, Bharath brings extensive cross-industry experience in Internal Auditing, GST, and Income Tax compliance, ensuring rigorous financial governance for a highly diversified client base.",
    initials: "BC",
    icon: ShieldCheck,
  },
  {
    name: "CA Suresh Reddy",
    role: "Senior Advisor — Taxation & vCFO",
    bio: "Leveraging seven years of versatile practice, Suresh provides comprehensive advisory in routine tax compliance alongside strategic vCFO services, catering to a wide spectrum of corporate clients.",
    initials: "SR",
    icon: Wallet,
  },
  {
    name: "CA Murali",
    role: "Senior Advisor — Assurance & Reporting",
    bio: "Murali, with three years of rich corporate experience, possesses deep, diversified expertise in financial reporting, internal auditing, and statutory corporate audits, ensuring absolute transparency and regulatory compliance for our corporate clientele.",
    initials: "M",
    icon: ClipboardCheck,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-36 pb-16 md:pb-20 bg-mist overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-lime/10 rounded-full blur-[120px]"
        />
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn className="space-y-6 lg:space-y-8" direction="right">
              <div className="inline-block px-4 py-1 border-l-2 border-lime bg-lime/5">
                <Eyebrow>About the Firm</Eyebrow>
              </div>
              <BrandDivider />
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink font-bold leading-[1.05] text-balance">
                Welcome to{" "}
                <span className="text-lime italic font-medium">AXIAFIN</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold text-ink">
                  SRASHTA FIN SERVICES PRIVATE LIMITED
                </span>{" "}
                — a premier entity for professional services, headquartered in{" "}
                <span className="font-semibold text-ink">
                  Hi-Tech City, HYDERABAD
                </span>
                , with a branch in Kothapet, Hyderabad and a Communication
                Branch in Ahmedabad, Gujarat. We specialize in delivering
                comprehensive financial, taxation, and corporate legal
                solutions.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our core philosophy is built on{" "}
                <span className="font-semibold text-ink">
                  uncompromising accuracy
                </span>
                ,{" "}
                <span className="font-semibold text-ink">
                  exceptional promptness
                </span>
                , and delivering{" "}
                <span className="font-semibold text-ink">
                  true value for your time and money
                </span>
                .
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <LinkButton href="/services" size="lg">
                  Explore Services
                </LinkButton>
                <LinkButton href="/contact" variant="outline-light" size="lg">
                  Book Consultation
                </LinkButton>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.1} className="relative">
              <div className="aspect-[16/10] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1740"
                  alt="The firm's senior partners in a strategy meeting"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-6 sm:-bottom-10 right-2 sm:-left-10 sm:right-auto bg-white p-5 sm:p-8 rounded-2xl shadow-2xl border border-lime/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-lime/10 rounded-xl">
                    <Building2
                      className="w-7 h-7 sm:w-8 sm:h-8 text-lime"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-display font-bold text-ink leading-tight">
                      3 Locations
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">
                      Hyderabad · Kothapet · Ahmedabad
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* DUAL-SERVICE MODEL */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <FadeIn className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-4">
            <Eyebrow>How We Serve</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink font-bold leading-tight text-balance">
              A{" "}
              <span className="text-lime italic font-medium">
                Dual-Service Model
              </span>
            </h2>
            <BrandDivider align="center" />
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We recognize that different facets of your business require
              distinct approaches. That is why we operate on a dual-service
              model — bespoke advisory for the complex, frictionless automation
              for the routine.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <FadeIn direction="right" className="group h-full">
              <article className="h-full bg-ink text-white p-6 sm:p-8 lg:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
                <div
                  aria-hidden="true"
                  className="absolute -top-20 -right-20 w-56 h-56 bg-lime/15 rounded-full blur-3xl"
                />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-lime/20 border border-lime/30 flex items-center justify-center mb-6">
                    <Scale className="w-7 h-7 text-lime" aria-hidden="true" />
                  </div>
                  <Eyebrow tone="lime">Service Pillar 01</Eyebrow>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2 mb-4 leading-tight">
                    Bespoke Advisory & Representation
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    For complex mandates involving{" "}
                    <span className="text-white font-semibold">
                      International Taxation
                    </span>
                    ,{" "}
                    <span className="text-white font-semibold">
                      Virtual CFO (vCFO) services
                    </span>
                    , and rigorous{" "}
                    <span className="text-white font-semibold">
                      Legal Representation
                    </span>{" "}
                    (Assessments, Appeals, and ITAT) — we offer dedicated,
                    highly customized consulting to safeguard your corporate
                    interests.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-200">
                    {[
                      "International Taxation — DTAA & PE Audit",
                      "Virtual CFO Services",
                      "Assessments, CIT(A) & ITAT Representation",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-lime mt-1">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>

            <FadeIn direction="left" delay={0.1} className="group h-full">
              <article className="h-full bg-pearl p-6 sm:p-8 lg:p-10 rounded-3xl border border-lime/10 relative overflow-hidden shadow-sm">
                <div
                  aria-hidden="true"
                  className="absolute -top-20 -right-20 w-56 h-56 bg-indigo/8 rounded-full blur-3xl"
                />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-indigo/10 border border-indigo/15 flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7 text-indigo" aria-hidden="true" />
                  </div>
                  <Eyebrow>Service Pillar 02</Eyebrow>
                  <h3 className="font-display text-2xl sm:text-3xl text-ink font-bold mt-2 mb-4 leading-tight">
                    Frictionless Compliance
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    For routine{" "}
                    <span className="font-semibold text-ink">
                      Income Tax Return (ITR)
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-ink">GST filings</span>,
                    we leverage cutting-edge automation to provide a seamless,
                    hassle-free, and swift experience.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "ITR filing — all categories",
                      "GST monthly, quarterly & annual returns",
                      "TDS · ROC · Payroll compliance",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-indigo mt-1">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-16 md:py-20 bg-pearl">
        <Container>
          <FadeIn className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
            <Eyebrow>Our Leadership Team</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink font-bold leading-tight text-balance">
              Led by Partners with{" "}
              <span className="text-lime italic font-medium">
                Decades of Experience
              </span>
            </h2>
            <BrandDivider align="center" />
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              The founders and directors who set the firm&apos;s strategic
              direction and stand behind every client engagement.
            </p>
          </FadeIn>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {leadership.map((p) => (
              <StaggerItem key={p.name}>
                <article className="h-full bg-white p-6 sm:p-8 rounded-2xl border border-lime/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-full bg-ink text-lime-soft flex items-center justify-center font-display font-bold text-lg shadow-md shrink-0"
                      aria-hidden="true"
                    >
                      {p.initials}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-lime/10 flex items-center justify-center shrink-0">
                      <p.icon className="w-5 h-5 text-lime" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-ink font-bold mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-lime mb-4">
                    {p.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {p.bio}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* STRATEGIC ADVISORY BOARD */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <FadeIn className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
            <Eyebrow>Strategic Advisory Board</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink font-bold leading-tight text-balance">
              An Elite Panel of{" "}
              <span className="text-lime italic font-medium">
                Senior CAs & Advocates
              </span>
            </h2>
            <BrandDivider align="center" />
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              To provide comprehensive and uncompromising service, AXIAFIN
              retains an elite panel of senior Chartered Accountants and
              Advocates. This retained advisory board ensures that your most
              complex tax, legal, and financial matters are handled with the
              highest level of specialized expertise. Independent in their
              capacity, they bring the highest standard of professional service
              to the organisation.
            </p>
          </FadeIn>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {advisors.map((p) => (
              <StaggerItem key={p.name}>
                <article className="h-full bg-pearl p-6 sm:p-8 rounded-2xl border border-lime/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-ink flex items-center justify-center text-lime-soft shrink-0 shadow-md">
                      <p.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span
                      className="font-display text-xl font-bold text-lime/70"
                      aria-hidden="true"
                    >
                      {p.initials}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-ink font-bold mb-1 leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-lime mb-4">
                    {p.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {p.bio}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 md:py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <Container className="relative z-10 max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-10 leading-tight text-balance">
            Ready to Work with{" "}
            <span className="text-lime italic font-medium">Our Partners?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto">
            Whether you need bespoke advisory for a complex mandate or
            frictionless compliance for routine filings — book a consultation
            and a senior partner will respond the same business day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LinkButton
              href="/contact"
              variant="lime"
              size="lg"
              className="uppercase tracking-[0.2em] text-xs"
            >
              Book Consultation
            </LinkButton>
            <LinkButton
              href={`tel:${siteConfig.contact.phoneE164}`}
              variant="outline-light"
              size="lg"
              className="uppercase tracking-[0.2em] text-xs"
            >
              Call {siteConfig.contact.phoneDisplay}
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}

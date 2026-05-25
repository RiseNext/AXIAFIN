import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const heroPoints = [
  "Senior-CA led engagements",
  "Fixed fee · no surprise billing",
  "48-hour GST registrations",
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-mist">
      {/* Brand ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-indigo/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-lime/15 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,16,36,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(14,16,36,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10 py-28 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
        <FadeIn direction="right" className="space-y-8">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] md:leading-[1.02] font-bold text-balance">
            Empowering Your{" "}
            <span className="text-gradient-brand italic font-medium">
              Financial Compliance
            </span>
          </h1>

          <div className="space-y-3">
            <p className="text-lg text-slate max-w-xl leading-relaxed">
              Welcome to AXIAFIN
            </p>
            <p className="text-base text-slate/80 max-w-xl leading-relaxed">
              Mission: Providing Best value to your time and money.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-1">
            {heroPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm text-ink font-medium"
              >
                <CheckCircle2
                  className="w-5 h-5 text-lime shrink-0"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 pt-3">
            <LinkButton href="/contact" size="lg">
              Get started now
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </LinkButton>
            <LinkButton href="/services" variant="secondary" size="lg">
              Explore Services
            </LinkButton>
          </div>
        </FadeIn>

        <FadeIn
          direction="left"
          delay={0.15}
          className="relative mt-4 md:mt-0"
        >
          {/* Floating decorative card behind */}
          <div
            aria-hidden="true"
            className="absolute -top-8 -right-6 w-40 h-40 rounded-3xl indigo-gradient rotate-6 shadow-[0_30px_60px_-20px_rgba(61,67,201,0.5)]"
          />
          <div className="relative glass-card rounded-3xl p-6 luxury-shadow">
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&q=80&w=1740"
                alt="Income tax book, calculator and financial documents on a CA's desk"
                fill
                priority
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/85 backdrop-blur-md px-4 py-3 flex items-center gap-3 border border-white/60 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-indigo/10 flex items-center justify-center">
                  <ShieldCheck
                    className="w-5 h-5 text-indigo"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[9px] uppercase tracking-[0.18em] font-bold text-slate/70">
                    Committed to security
                  </p>
                  <p className="text-sm font-bold text-ink leading-tight">
                    Your data is our top priority
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate/70 font-bold mb-1">
                  Data Security
                </p>
                <p className="font-display text-xl text-ink font-bold leading-tight">
                  Your data is <br />
                  our top priority
                </p>
              </div>
              <div className="text-right">
                <p className="font-display text-4xl text-gradient-brand font-bold leading-none">
                  99.8<span className="text-2xl">%</span>
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate/70 font-bold mt-1">
                  On-time
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

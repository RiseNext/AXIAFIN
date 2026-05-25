import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { industries } from "@/lib/industries";

export function Industries() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <FadeIn className="mb-16">
          <SectionHeading
            eyebrow="Products for everyone"
            title="Our Suite of Specialized Financial Services"
            description="We offer a comprehensive range of services to meet all your tax and financial needs. Our expert team is committed to providing personalized solutions tailored to your specific requirements."
            align="center"
          />
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 xl:gap-8 2xl:gap-10">
          {industries.map((ind) => (
            <StaggerItem key={ind.title}>
              <article className="group h-full bg-mist p-5 sm:p-6 lg:p-8 rounded-2xl border border-lime/10 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-ink flex items-center justify-center text-lime-soft mb-6 shadow-lg group-hover:scale-105 transition-transform">
                  <ind.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl text-ink font-bold mb-3">
                  {ind.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                  {ind.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {ind.points.map((p) => (
                    <li
                      key={p}
                      className="text-xs text-ink/80 flex items-start gap-2"
                    >
                      <span
                        aria-hidden="true"
                        className="text-lime mt-1.5 w-1 h-1 rounded-full bg-lime shrink-0"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-ink group-hover:text-lime transition-colors">
                  Talk to CA
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

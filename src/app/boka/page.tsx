import Link from "next/link";
import { CalendarEmbed } from "@/components/booking/CalendarEmbed";
import { ArrowLeft, Clock, Video, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Boka strategimöte — Bostadsvideo24",
  description:
    "Boka ett 30-minuters digitalt strategimöte. Vi går igenom hur Bostadsvideo24 kan stärka er synlighet.",
};

const calLink =
  process.env.NEXT_PUBLIC_CALCOM_LINK ?? "bostadsvideo24/strategimote";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-bone grain">
      {/* Slim header */}
      <header className="border-b border-ink/15">
        <div className="container-edit py-5 flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-1 text-ink">
            <span className="font-display text-[18px] tracking-tight font-medium">
              Bostads
              <span
                className="italic-display font-medium"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                video
              </span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-brass-deep pb-0.5">
              /24
            </span>
          </Link>
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-fog hover:text-ink transition-colors"
          >
            <ArrowLeft
              size={12}
              strokeWidth={1.5}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Tillbaka
          </Link>
        </div>
      </header>

      <div className="container-edit py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-16">
          {/* LEFT — Editorial header */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
                12 / Strategimöte
              </span>
              <span className="h-px w-12 bg-ink/30" />
            </div>

            <h1 className="font-display font-light text-[2.5rem] sm:text-[3rem] lg:text-[3.75rem] leading-[0.95] tracking-tight text-ink">
              Boka ett{" "}
              <span
                className="italic-display text-brass-deep"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                strategi
              </span>
              möte.
            </h1>

            <p className="mt-8 text-[16px] lg:text-[17px] leading-relaxed text-fog max-w-md">
              30 minuter digitalt. Vi tittar på ert nuvarande material,
              kanaler och målgrupp — och visar konkret hur Bostadsvideo24 kan
              stärka er synlighet.
            </p>

            {/* Meeting meta */}
            <ul className="mt-10 space-y-4 border-t border-ink/15 pt-7">
              {[
                { Icon: Clock, label: "30 minuter" },
                { Icon: Video, label: "Digitalt — länk skickas via mail" },
                { Icon: MessageCircle, label: "Inga säljpitches — bara råd" },
              ].map(({ Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 text-[14px] text-ink/85"
                >
                  <div className="w-8 h-8 border border-ink/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} strokeWidth={1.4} className="text-brass-deep" />
                  </div>
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            {/* Quote */}
            <div className="mt-12 pt-7 border-t border-ink/15">
              <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep mb-3">
                Föredrar du mail?
              </p>
              <a
                href="mailto:info@bostadsvideo24.se"
                className="font-display text-xl italic-display text-ink editorial-link"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                info@bostadsvideo24.se
              </a>
            </div>
          </aside>

          {/* RIGHT — Cal.com embed */}
          <section className="lg:col-span-7">
            <div className="bg-paper border border-ink/15 relative">
              <div className="absolute top-0 right-0 w-10 h-10 bg-brass z-10" />
              <div className="p-2 sm:p-4 min-h-[640px]">
                <CalendarEmbed calLink={calLink} />
              </div>
            </div>

            <p className="mt-5 font-mono text-[10px] tracking-widest uppercase text-fog text-center">
              Powered by Cal.com · Synkroniseras med Google Calendar
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

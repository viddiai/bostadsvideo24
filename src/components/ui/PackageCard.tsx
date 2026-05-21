import { Button } from "./Button";

type PackageCardProps = {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
  index: number;
  packageId: string;
};

export function PackageCard({
  name,
  price,
  features,
  cta,
  popular = false,
  index,
  packageId,
}: PackageCardProps) {
  return (
    <article
      className={`group relative flex flex-col h-full border transition-all duration-500 ease-out ${
        popular
          ? "bg-ink text-ivory border-ink lg:-translate-y-4"
          : "bg-paper border-ink/12 hover:border-ink/30"
      } hover:-translate-y-1`}
    >
      {popular && (
        <div className="absolute -top-3 left-7 bg-brass text-ink px-3 py-1 font-mono text-[10px] tracking-[0.22em] uppercase">
          Mest valda
        </div>
      )}

      {/* Header */}
      <div
        className={`p-7 border-b ${
          popular ? "border-ivory/15" : "border-ink/10"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <span
            className={`font-mono text-[11px] tracking-widest uppercase ${
              popular ? "text-brass-light" : "text-fog"
            }`}
          >
            {String(index + 1).padStart(2, "0")} / Paket
          </span>
        </div>
        <h3
          className={`font-display text-2xl md:text-[28px] leading-tight ${
            popular ? "text-ivory" : "text-ink"
          }`}
        >
          {name}
        </h3>
        <div className="mt-5 flex items-baseline gap-2">
          <span
            className={`font-display text-4xl md:text-5xl font-medium tracking-tight ${
              popular ? "text-ivory" : "text-ink"
            }`}
          >
            {price}
          </span>
        </div>
        <p
          className={`mt-1 font-mono text-[10px] tracking-widest uppercase ${
            popular ? "text-ivory/50" : "text-fog"
          }`}
        >
          exkl. moms
        </p>
      </div>

      {/* Features */}
      <ul className="p-7 space-y-3 flex-1">
        {features.map((feature) => (
          <li
            key={feature}
            className={`flex items-start gap-3 text-[14px] leading-relaxed ${
              popular ? "text-ivory/85" : "text-fog"
            }`}
          >
            <span
              className={`mt-2 h-px w-3 flex-shrink-0 ${
                popular ? "bg-brass-light" : "bg-brass"
              }`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="p-7 pt-0">
        <Button
          href={`/bestall/${packageId}`}
          variant={popular ? "inverse" : "secondary"}
          className="w-full"
        >
          {cta}
        </Button>
      </div>
    </article>
  );
}

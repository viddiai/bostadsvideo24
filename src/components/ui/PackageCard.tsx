import { Card } from "./Card";
import { Button } from "./Button";

type PackageCardProps = {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export function PackageCard({
  name,
  price,
  features,
  cta,
  popular = false,
}: PackageCardProps) {
  return (
    <Card
      className={`relative flex flex-col ${
        popular
          ? "ring-2 ring-gold scale-[1.02] shadow-lg"
          : ""
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-sora font-semibold px-4 py-1 rounded-full">
          Mest populär
        </span>
      )}
      <h3 className="font-sora font-semibold text-lg text-navy">{name}</h3>
      <p className="text-2xl font-sora font-bold text-navy mt-2">
        {price}{" "}
        <span className="text-sm font-normal text-slate">exkl. moms</span>
      </p>
      <ul className="mt-4 space-y-2 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-slate">
            <span className="text-gold mt-0.5">&#10003;</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button href="#kontakt" className="mt-6 w-full">
        {cta}
      </Button>
    </Card>
  );
}

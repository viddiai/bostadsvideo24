import { footer } from "@/lib/data";

export function Footer() {
  return (
    <footer id="kontakt" className="bg-navy py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-sora font-bold text-xl text-white">
              Bostadsvideo<span className="text-gold">24</span>
            </p>
            <p className="mt-2 text-sm text-white/60">{footer.tagline}</p>
          </div>

          <div>
            <ul className="space-y-2">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm text-white/60">{footer.location}</p>
            <a
              href={`mailto:${footer.email}`}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {footer.email}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-white/40 text-center">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Separator } from "@/components/ui/separator";
import { Code2, Mail, MapPin, Phone } from "lucide-react";

const QUICK_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

const currentYear = new Date().getFullYear();
const hostname = typeof window !== "undefined" ? window.location.hostname : "";

export function Footer() {
  return (
    <footer data-ocid="footer" className="bg-card border-t border-border">
      {/* Contact Bar */}
      <div className="bg-primary/5 border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="tel:01728065402"
              data-ocid="footer.phone_link"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-smooth">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Phone
                </p>
                <p className="text-sm font-semibold text-foreground">
                  01728065402
                </p>
              </div>
            </a>

            <a
              href="mailto:akashislammeta@gmail.com"
              data-ocid="footer.email_link"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-smooth">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Email
                </p>
                <p className="text-sm font-semibold text-foreground truncate">
                  akashislammeta@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Location
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Kushtia District, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-card">
                <Code2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                SKY <span className="text-gradient">NA</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
              SKY NA delivers cutting-edge web and mobile applications tailored
              to your unique goals. Your vision, our code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid={`footer.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-smooth" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a
                  href="tel:01728065402"
                  className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                >
                  01728065402
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a
                  href="mailto:akashislammeta@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-smooth break-all"
                >
                  akashislammeta@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <address className="text-sm text-muted-foreground not-italic leading-relaxed">
                  Baher Madi Bazar,
                  <br />
                  Daulatpur Thana,
                  <br />
                  Kushtia District, Bangladesh
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Bar */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {currentYear} SKY NA. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-smooth font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import { Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "মূল্য তালিকা", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname === href;

  return (
    <header
      data-ocid="header"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-card"
          : "bg-card border-b border-border",
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            data-ocid="header.logo_link"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-card group-hover:shadow-elevated transition-smooth">
              <Code2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground">
              SKY <span className="text-gradient">NA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`header.nav_${link.label.toLowerCase()}_link`}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-smooth",
                  isActive(link.href)
                    ? "text-primary bg-primary/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a href="/contact" className="hidden md:block">
              <Button
                data-ocid="header.get_started_button"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-card transition-smooth"
              >
                Get Started
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open navigation menu"
                  data-ocid="header.mobile_menu_button"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 bg-card"
                data-ocid="header.mobile_menu_sheet"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                      <Code2 className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                    <span className="font-display font-bold text-lg text-foreground">
                      SKY <span className="text-gradient">NA</span>
                    </span>
                  </div>
                </div>
                <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      data-ocid={`header.mobile_nav_${link.label.toLowerCase()}_link`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-sm font-medium transition-smooth",
                        isActive(link.href)
                          ? "text-primary bg-primary/8 font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                      )}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="pt-4 mt-4 border-t border-border">
                    <a href="/contact" onClick={() => setOpen(false)}>
                      <Button
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                        data-ocid="header.mobile_get_started_button"
                      >
                        Get Started
                      </Button>
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

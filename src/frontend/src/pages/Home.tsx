import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Code2,
  Globe,
  Layers,
  Shield,
  Smartphone,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const SERVICES = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android, built for performance and user delight.",
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive web applications and progressive web apps that work seamlessly across all devices.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Layers,
    title: "Enterprise Solutions",
    description:
      "Scalable enterprise software that streamlines your operations and drives business growth.",
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Bespoke software solutions engineered precisely for your unique business requirements.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "API & Integrations",
    description:
      "Robust APIs and third-party integrations to connect your systems and power your workflows.",
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "Ongoing technical support, updates, and performance optimizations to keep your app at its best.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

const FEATURES = [
  "Agile development methodology",
  "Clean, maintainable code",
  "On-time delivery guarantee",
  "Post-launch support included",
  "Transparent communication",
  "Competitive pricing",
];

const PRICING_TIERS = [
  {
    name: "বেসিক",
    price: "৳৫,০০০ – ৳১৫,০০০",
    subtitle: "ছোট অ্যাপ ও ওয়েবসাইটের জন্য",
    popular: false,
    features: [
      "সিম্পল ডিজাইন",
      "রেসপন্সিভ লেআউট",
      "৩ পেজ পর্যন্ত",
      "বেসিক ফিচার",
      "১ মাস সাপোর্ট",
    ],
    accent: false,
  },
  {
    name: "স্ট্যান্ডার্ড",
    price: "৳২০,০০০ – ৳৫০,০০০",
    subtitle: "মধ্যমানের অ্যাপের জন্য",
    popular: true,
    features: [
      "প্রফেশনাল ডিজাইন",
      "ফুল রেসপন্সিভ",
      "আনলিমিটেড পেজ",
      "অ্যাডভান্সড ফিচার",
      "ডাটাবেস ইন্টিগ্রেশন",
      "৩ মাস সাপোর্ট",
    ],
    accent: true,
  },
  {
    name: "প্রিমিয়াম",
    price: "৳৮০,০০০+",
    subtitle: "জটিল ও এন্টারপ্রাইজ অ্যাপের জন্য",
    popular: false,
    features: [
      "কাস্টম ডিজাইন",
      "সব প্ল্যাটফর্ম সাপোর্ট",
      "সব ফিচার",
      "লাইভ সাপোর্ট",
      "১ বছর সাপোর্ট",
      "ফ্রি মেইনটেন্যান্স",
    ],
    accent: false,
  },
];

const FAQS = [
  {
    question: "SKY NA কী ধরনের অ্যাপ তৈরি করে?",
    answer:
      "আমরা সব ধরনের অ্যাপ তৈরি করি — মোবাইল অ্যাপ, ওয়েব অ্যাপ, কাস্টম সফটওয়্যার, ব্যবসায়িক সমাধান, এবং যেকোনো ডিজিটাল প্ল্যাটফর্ম।",
  },
  {
    question: "প্রজেক্ট শেষ হতে কত সময় লাগে?",
    answer:
      "প্রজেক্টের জটিলতার উপর নির্ভর করে। সাধারণত ছোট প্রজেক্ট ২-৪ সপ্তাহে, মাঝারি প্রজেক্ট ১-৩ মাসে, এবং বড় প্রজেক্ট ৩-৬ মাসে সম্পন্ন হয়।",
  },
  {
    question: "পেমেন্ট কীভাবে করতে হয়?",
    answer:
      "আমরা মিলস্টোন-ভিত্তিক পেমেন্ট গ্রহণ করি। প্রজেক্ট শুরুতে ৫০%, মাঝপথে ২৫%, এবং প্রজেক্ট সম্পন্নের পর বাকি ২৫%।",
  },
  {
    question: "প্রজেক্টের পরে সাপোর্ট পাওয়া যাবে?",
    answer:
      "হ্যাঁ, প্রতিটি প্যাকেজে নির্দিষ্ট সময়ের বিনামূল্যে সাপোর্ট অন্তর্ভুক্ত আছে। এর পরেও আমরা সাশ্রয়ী মূল্যে রক্ষণাবেক্ষণ সেবা প্রদান করি।",
  },
  {
    question: "আমি কীভাবে যোগাযোগ করতে পারি?",
    answer:
      "আপনি আমাদের যোগাযোগ ফর্ম পূরণ করতে পারেন, অথবা সরাসরি ফোন করুন: 01728065402, ইমেইল: akashislammeta@gmail.com।",
  },
];

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      data-ocid={`home.faq.${index + 1}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="border border-border rounded-xl overflow-hidden bg-card"
    >
      <button
        type="button"
        onClick={onToggle}
        data-ocid={`home.faq_toggle.${index + 1}`}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-secondary/60 transition-smooth"
      >
        <span className="font-display font-semibold text-foreground text-sm sm:text-base">
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-smooth ${isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
        >
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/60 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div data-ocid="home.page">
      {/* Hero */}
      <section
        data-ocid="home.hero_section"
        className="relative min-h-[calc(100vh-4rem)] flex items-center bg-background overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 via-accent/5 to-transparent" />
          <div className="absolute right-16 top-16 w-80 h-80 rounded-full bg-accent/8 blur-3xl" />
          <div className="absolute right-40 bottom-32 w-56 h-56 rounded-full bg-primary/8 blur-2xl" />
          <svg
            className="absolute right-0 top-0 h-full w-auto opacity-10"
            viewBox="0 0 400 600"
            fill="none"
            aria-hidden="true"
          >
            <polygon
              points="200,0 400,300 200,600 0,300"
              fill="url(#heroGrad)"
            />
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.45 0.15 255)" />
                <stop offset="100%" stopColor="oklch(0.6 0.18 140)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                className="mb-6 bg-accent/12 text-accent border-accent/25 font-medium px-3 py-1"
                data-ocid="home.hero_badge"
              >
                <Zap className="w-3 h-3 mr-1.5" />
                All Types of Apps — One Expert Team
              </Badge>
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              Innovative Software
              <br />
              <span className="text-gradient">Solutions</span> to
              <br />
              Elevate Your Business
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              SKY NA delivers cutting-edge web and mobile applications tailored
              to your unique goals. Partner with our expert team for scalable,
              high-performance digital products.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="/contact">
                <Button
                  size="lg"
                  data-ocid="home.hero_cta_primary"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated transition-smooth gap-2"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  data-ocid="home.hero_cta_secondary"
                  className="font-semibold border-border hover:bg-secondary transition-smooth gap-2"
                >
                  Explore Services
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        data-ocid="home.stats_section"
        className="bg-primary py-10 border-y border-primary/20"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-display text-3xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        data-ocid="home.services_section"
        className="py-20 bg-muted/30"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-accent/12 text-accent border-accent/25">
              Our Services
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              All Types of Apps, Built Right
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From mobile to enterprise, we build every kind of digital product
              with precision and care.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="home.services_list"
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                data-ocid={`home.service.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full bg-card border-border hover:shadow-elevated transition-smooth group cursor-pointer">
                  <CardContent className="p-6">
                    <div
                      className={`w-11 h-11 rounded-xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}
                    >
                      <service.icon className={`w-5 h-5 ${service.color}`} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <a
                      href="/contact"
                      className={`text-sm font-medium ${service.color} flex items-center gap-1.5 hover:gap-2.5 transition-smooth`}
                      data-ocid={`home.service_learn_more_link.${i + 1}`}
                    >
                      Learn More
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Us */}
      <section
        id="about"
        data-ocid="home.about_section"
        className="py-20 bg-background"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Why Choose SKY NA
              </Badge>
              <h2 className="font-display text-4xl font-bold text-foreground mb-5 leading-tight">
                Your Vision, Executed with Precision
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We are a dedicated app development company based in Kushtia,
                Bangladesh. We combine technical excellence with a deep
                understanding of your business needs to deliver products that
                truly make a difference.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-foreground font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a href="/contact">
                <Button
                  data-ocid="home.about_cta_button"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-smooth gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="relative bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl p-8 shadow-elevated overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <div className="relative grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Users,
                      label: "Expert Team",
                      sub: "Skilled developers",
                    },
                    {
                      icon: Zap,
                      label: "Fast Delivery",
                      sub: "On-time, every time",
                    },
                    {
                      icon: Shield,
                      label: "Secure Code",
                      sub: "Best practices built-in",
                    },
                    {
                      icon: Star,
                      label: "Top Quality",
                      sub: "Pixel-perfect results",
                    },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div
                      key={label}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15"
                    >
                      <Icon className="w-6 h-6 text-white mb-2" />
                      <div className="font-display font-semibold text-white text-sm">
                        {label}
                      </div>
                      <div className="text-white/70 text-xs mt-0.5">{sub}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="font-display font-bold text-3xl text-white mb-1">
                    SKY NA
                  </div>
                  <div className="text-white/70 text-sm">
                    App Development Company
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section
        id="portfolio"
        data-ocid="home.portfolio_section"
        className="py-20 bg-muted/30"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-accent/12 text-accent border-accent/25">
              Portfolio
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Projects We're Proud Of
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              We build across industries — from startups to established
              businesses. Our portfolio speaks for itself.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mb-10">
              {[
                {
                  title: "E-Commerce Platform",
                  category: "Mobile App + Web",
                  description:
                    "Full-stack shopping app with real-time inventory, payments, and analytics dashboard.",
                },
                {
                  title: "Hospital Management",
                  category: "Enterprise Software",
                  description:
                    "Comprehensive patient records, appointment scheduling, and billing system.",
                },
                {
                  title: "Learning Management",
                  category: "Education App",
                  description:
                    "Interactive e-learning platform with video lessons, quizzes, and progress tracking.",
                },
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  data-ocid={`home.portfolio.${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full bg-card border-border hover:shadow-elevated transition-smooth">
                    <CardContent className="p-6">
                      <div className="w-full h-32 rounded-lg bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 mb-4 flex items-center justify-center">
                        <Code2 className="w-8 h-8 text-primary/40" />
                      </div>
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {project.category}
                      </Badge>
                      <h3 className="font-display font-semibold text-base text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <a href="/contact">
              <Button
                variant="outline"
                data-ocid="home.portfolio_contact_button"
                className="border-border font-semibold transition-smooth gap-2"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        data-ocid="home.pricing_section"
        className="py-20 bg-background"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              মূল্য তালিকা
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              আমাদের মূল্য তালিকা
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              সাশ্রয়ী মূল্যে সেরা মানের অ্যাপ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {PRICING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                data-ocid={`home.pricing.${i + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={tier.popular ? "md:-mt-4" : ""}
              >
                <Card
                  className={`relative overflow-hidden border transition-smooth hover:shadow-elevated ${
                    tier.popular
                      ? "border-primary/40 shadow-elevated bg-card"
                      : "border-border bg-card"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {tier.name}
                      </h3>
                      {tier.popular && (
                        <Badge
                          className="bg-primary/10 text-primary border-primary/25 text-xs font-semibold"
                          data-ocid={`home.pricing_popular_badge.${i + 1}`}
                        >
                          জনপ্রিয়
                        </Badge>
                      )}
                    </div>

                    <div className="mb-2">
                      <span className="font-display text-2xl font-bold text-foreground">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      {tier.subtitle}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-sm text-foreground"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 ${tier.popular ? "text-primary" : "text-accent"}`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a href="/contact">
                      <Button
                        data-ocid={`home.pricing_cta_button.${i + 1}`}
                        className={`w-full font-semibold transition-smooth gap-2 ${
                          tier.popular
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-card"
                            : "bg-secondary hover:bg-secondary/80 text-foreground border border-border"
                        }`}
                      >
                        যোগাযোগ করুন
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-sm text-muted-foreground mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            * মূল্য প্রজেক্টের জটিলতা ও প্রয়োজনীয়তার উপর নির্ভর করে পরিবর্তন হতে পারে।
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        data-ocid="home.faq_section"
        className="py-20 bg-muted/30"
      >
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-accent/12 text-accent border-accent/25">
              FAQ
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              সাধারণ প্রশ্নাবলী
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              আপনার মনে যে প্রশ্নগুলো আসতে পারে
            </p>
          </motion.div>

          <div className="flex flex-col gap-3" data-ocid="home.faq_list">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                index={i}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-muted-foreground mb-4 text-sm">
              আরও প্রশ্ন আছে? আমরা সাহায্য করতে প্রস্তুত।
            </p>
            <a href="/contact">
              <Button
                variant="outline"
                data-ocid="home.faq_contact_button"
                className="border-border font-semibold transition-smooth gap-2"
              >
                আমাদের জিজ্ঞেস করুন
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section data-ocid="home.cta_section" className="py-20 bg-primary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-primary-foreground mb-4">
              Ready to Build Your App?
            </h2>
            <p className="text-primary-foreground/75 max-w-md mx-auto mb-8 text-lg">
              Contact us today and let's turn your idea into a powerful digital
              product.
            </p>
            <a href="/contact">
              <Button
                size="lg"
                data-ocid="home.cta_contact_button"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated transition-smooth gap-2"
              >
                Get a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

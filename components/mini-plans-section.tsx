"use client";

import { useRef, useState, useEffect } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { ParticleField } from "@/components/particle-field";

const categories = [
  {
    id: "chatbots",
    title: "Chatbots Automatizados",
    description: "Setup + mensualidad. Soporte y escalamiento.",
    plans: [
      {
        name: "STARTER",
        price: "$747.000",
        priceNote: "$147.000/mes",
        includes: [
          "3 flujos conversacionales",
          "Integración WhatsApp",
          "1h capacitación",
        ],
        highlighted: false,
      },
      {
        name: "BUSINESS",
        price: "$1.497.000",
        priceNote: "$247.000/mes",
        includes: [
          "6 flujos",
          "WhatsApp + Web",
          "CRM básico",
          "2h capacitación",
        ],
        highlighted: true,
      },
      {
        name: "ENTERPRISE",
        price: "$2.497.000",
        priceNote: "$397.000/mes",
        includes: [
          "Flujos ilimitados",
          "Multi-canal",
          "Reportes + BI",
          "Soporte prioritario",
        ],
        highlighted: false,
      },
    ],
  },
  {
    id: "web",
    title: "Desarrollo Web",
    description: "Sitios, tiendas y blogs con CMS y SEO.",
    plans: [
      {
        name: "BÁSICO",
        price: "$497.000",
        priceNote: "Landing",
        includes: ["1 página", "Formulario", "Animaciones básicas"],
        highlighted: false,
      },
      {
        name: "ESTÁNDAR",
        price: "$747.000",
        priceNote: "Portafolio",
        includes: ["CMS editable", "SEO básico", "Galería de proyectos"],
        highlighted: true,
      },
      {
        name: "PREMIUM",
        price: "$1.247.000",
        priceNote: "Blog / Tienda pequeña",
        includes: ["Multi-idioma opcional", "SEO avanzado", "CMS completo"],
        highlighted: false,
      },
    ],
  },
  {
    id: "cm",
    title: "Community Management",
    description: "Gestión mensual de redes, contenido y comunidad.",
    plans: [
      {
        name: "STARTER",
        price: "$497.000/mes",
        priceNote: "Presencia básica",
        includes: ["1 plataforma", "8 posts", "8 stories"],
        highlighted: false,
      },
      {
        name: "GROWTH",
        price: "$827.000/mes",
        priceNote: "Crecimiento",
        includes: ["2 plataformas", "12 posts", "4 reels"],
        highlighted: true,
      },
      {
        name: "SCALE",
        price: "$1.377.000/mes",
        priceNote: "Estrategia completa",
        includes: ["3 plataformas", "20 posts", "Ads básicos"],
        highlighted: false,
      },
    ],
  },
  {
    id: "foto",
    title: "Fotografía de Producto",
    description: "Sesiones, edición y formatos para e‑commerce.",
    plans: [
      {
        name: "ESENCIAL",
        price: "$247.000",
        priceNote: "Hasta 5 productos",
        includes: ["10 fotos web", "Edición color + luz"],
        highlighted: false,
      },
      {
        name: "PROFESIONAL",
        price: "$497.000",
        priceNote: "Hasta 12 productos",
        includes: ["25 fotos", "Retoque básico"],
        highlighted: true,
      },
      {
        name: "CATÁLOGO",
        price: "$827.000",
        priceNote: "Hasta 25 productos",
        includes: ["50 fotos", "RAW + alta resolución"],
        highlighted: false,
      },
    ],
  },
  {
    id: "video",
    title: "Producción de Video",
    description: "Reels, TikToks y contenido corto con edición profesional.",
    plans: [
      {
        name: "BÁSICO",
        price: "$247.000",
        priceNote: "3 videos",
        includes: ["Edición básica", "Subtítulos"],
        highlighted: false,
      },
      {
        name: "CREADOR",
        price: "$547.000",
        priceNote: "6 videos",
        includes: ["Edición dinámica", "Música stock"],
        highlighted: true,
      },
      {
        name: "VIRAL",
        price: "$1.047.000",
        priceNote: "12 videos",
        includes: ["Guión incluido", "Edición premium"],
        highlighted: false,
      },
    ],
  },
];

export function MiniPlansSection() {
  const [selected, setSelected] = useState(categories[0].id);
  const [activeIndex, setActiveIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Slider efecto y scroll al plan destacado
  useEffect(() => {
    if (carouselRef.current) {
      const popularIndex = 4; // Segundo set, segundo elemento
      const cardWidth = carouselRef.current.scrollWidth / 9;
      carouselRef.current.scrollLeft =
        cardWidth * popularIndex - window.innerWidth * 0.075;
    }
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            const actualIndex = index % 3;
            setActiveIndex(actualIndex);
          }
        });
      },
      {
        root: carouselRef.current,
        threshold: 0.6,
      }
    );
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll("[data-index]");
      cards.forEach((card) => observer.observe(card));
    }
    return () => observer.disconnect();
  }, [selected]);

  return (
    <section
      id="mini-plans"
      className="relative py-24 border-b border-border/50 overflow-hidden"
    >
      <ParticleField variant="mixed" density="medium" speed="medium" />
      <Container className="relative z-10">
        {/* Section Header */}
        <AnimatedSection>
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Planes por Servicio
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Personaliza
            </span>{" "}
            tu estrategia digital
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-pretty text-lg text-muted-foreground">
            Elige el servicio que necesitas y el plan que mejor se ajuste a tu
            negocio. Todos incluyen soporte y capacitación.
          </p>
        </AnimatedSection>

        {/* Category buttons */}
        <div className="mb-8">
          {" "}
          <div className="flex gap-3 overflow-auto scrollbar-hide py-2 justify-center">
            {" "}
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelected(cat.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selected === cat.id
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                    : "bg-card/40 text-muted-foreground hover:bg-card/60"
                }`}
                aria-pressed={selected === cat.id}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Slider móvil y grilla desktop */}
        {categories
          .filter((c) => c.id === selected)
          .map((cat, cIndex) => (
            <AnimatedSection key={cat.id} delay={cIndex * 40}>
              <div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    {cat.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {cat.description}
                  </p>
                </div>

                {/* Mobile slider */}
                <div className="lg:hidden relative pt-2">
                  <div
                    ref={carouselRef}
                    className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
                  >
                    <div className="flex gap-6 px-4">
                      {[...cat.plans, ...cat.plans, ...cat.plans].map(
                        (p, index) => (
                          <div
                            key={`${p.name}-${index}`}
                            data-index={index}
                            className="snap-center shrink-0 w-[85vw] max-w-sm"
                          >
                            <Card
                              className={`group relative flex h-full flex-col transition-all duration-300 mt-4 ${
                                p.highlighted
                                  ? "border-accent bg-card shadow-lg shadow-accent/20"
                                  : "border-border/50 bg-card/50"
                              }`}
                            >
                              {p.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-white shadow-lg whitespace-nowrap z-10">
                                  Más Popular
                                </div>
                              )}
                              <CardHeader>
                                <CardTitle className="text-foreground">
                                  {p.name}
                                </CardTitle>
                                <CardDescription className="text-muted-foreground">
                                  {p.priceNote}
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="flex-1">
                                <div className="mb-6">
                                  <span className="text-3xl font-bold text-foreground">
                                    {p.price}
                                  </span>
                                </div>
                                <ul className="space-y-3">
                                  {p.includes.map((inc, i) => (
                                    <li
                                      key={inc + i}
                                      className="flex items-start gap-3"
                                    >
                                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                      <span className="text-sm text-muted-foreground">
                                        {inc}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                              <CardFooter>
                                <Button
                                  className="w-full"
                                  variant={
                                    p.highlighted ? "gradient" : "default"
                                  }
                                  asChild
                                >
                                  <a
                                    href="https://wa.me/+573116839099"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Contactar
                                  </a>
                                </Button>
                              </CardFooter>
                            </Card>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  {/* Scroll Indicator */}
                  <div className="flex justify-center gap-2 mt-2">
                    {cat.plans.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (carouselRef.current) {
                            const cardWidth =
                              carouselRef.current.scrollWidth / 9;
                            const targetIndex = index + 3;
                            carouselRef.current.scrollTo({
                              left:
                                cardWidth * targetIndex -
                                window.innerWidth * 0.075,
                              behavior: "smooth",
                            });
                          }
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeIndex === index
                            ? "w-8 bg-gradient-to-r from-primary to-accent"
                            : "w-2 bg-muted hover:bg-muted-foreground"
                        }`}
                        aria-label={`Ir a ${cat.plans[index].name}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Desktop grid */}
                <div className="hidden lg:grid gap-6 lg:grid-cols-3">
                  {cat.plans.map((p) => (
                    <Card
                      key={p.name}
                      className={`group relative flex h-full flex-col hover-lift transition-all duration-300 ${
                        p.highlighted
                          ? "border-accent bg-card shadow-lg shadow-accent/20 hover:shadow-accent/30"
                          : "border-border/50 bg-card/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
                      }`}
                    >
                      {p.highlighted && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-medium text-white shadow-lg">
                          Más Popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-foreground">
                          {p.name}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {p.priceNote}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-foreground">
                            {p.price}
                          </span>
                        </div>
                        <ul className="space-y-3">
                          {p.includes.map((inc) => (
                            <li key={inc} className="flex items-start gap-3">
                              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                              <span className="text-sm text-muted-foreground">
                                {inc}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full"
                          variant={p.highlighted ? "gradient" : "default"}
                          asChild
                        >
                          <a
                            href="https://wa.me/+573116839099"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Contactar
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
      </Container>
    </section>
  );
}

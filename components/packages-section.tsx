"use client";

import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { ParticleField } from "@/components/particle-field";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/container";

const packages = [
  {
    name: "Lanzamiento Digital",
    description:
      "Para negocios que arrancan de cero y necesitan presencia básica.",
    price: "$785.575",
    priceNote: "Ahorro de $261.858 (25%)",
    features: [
      "Landing Page Estándar (1 página)",
      "Sesión de fotos Esencial (10 fotos)",
      "10 posts diseñados para redes",
      "1 Reel/TikTok de obsequio 🎁",
      "Dominio + Hosting por 1 año",
      "Formulario de contacto",
      "Capacitación de 2 horas",
      "Entrega en 2-3 semanas",
    ],
    highlighted: false,
  },
  {
    name: "Presencia Completa",
    description: "Todo lo que necesitas: web + redes + automatización.",
    price: "$2.436.980",
    priceNote: "Ahorro de $1.312.220 (35%)",
    features: [
      "Web Portafolio Profesional (3-5 páginas)",
      "ChatBot Business (setup + 3 meses)",
      "Community Management Growth (1 mes)",
      "Sesión de fotos Profesional (25 fotos)",
      "Pack Videos Creador (6 videos)",
      "Dominio + Hosting premium por 1 año",
      "Calendario editorial incluido",
      "Capacitación completa",
      "Entrega en 4-6 semanas",
    ],
    highlighted: true,
  },
  {
    name: "Transformación Total",
    description: "Todo incluido para máximo impacto y escalamiento.",
    price: "$5.174.400",
    priceNote: "Ahorro de $4.233.600 (45%)",
    features: [
      "Tienda Online Estándar (hasta 100 productos)",
      "ChatBot Enterprise (setup + 3 meses)",
      "Community Management Scale (3 meses)",
      "Sesión de fotos Catálogo (50 fotos)",
      "Pack Videos Viral (12 videos)",
      "Dominio + Hosting premium por 1 año",
      "Reportes y BI completo",
      "Soporte prioritario",
      "Entrega en 6-8 semanas",
    ],
    highlighted: false,
  },
];

export function PackagesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1); // Comienza en el plan más popular (index 1)

  useEffect(() => {
    // Scroll inicial al plan más popular (segundo elemento = index 4 en el array triplicado)
    if (carouselRef.current) {
      const popularIndex = 4; // Segundo set, segundo elemento (Presencia Completa)
      const cardWidth = carouselRef.current.scrollWidth / 9; // 3 paquetes x 3 repeticiones
      carouselRef.current.scrollLeft =
        cardWidth * popularIndex - window.innerWidth * 0.075;
    }

    // Intersection Observer para detectar tarjeta visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            const actualIndex = index % 3; // Mapear al índice real (0-2)
            setActiveIndex(actualIndex);
          }
        });
      },
      {
        root: carouselRef.current,
        threshold: 0.6,
      }
    );

    // Observar todas las tarjetas
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll("[data-index]");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="packages"
      className="relative py-24 sm:py-32 overflow-hidden border-b border-border/50"
    >
      <ParticleField variant="mixed" density="high" speed="medium" />
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Paquetes Integrales
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ahorra hasta 45%
            </span>{" "}
            combinando servicios
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-pretty text-lg text-muted-foreground">
            Todo incluido: desarrollo, contenido, capacitación y soporte. Un
            solo proveedor, comunicación directa, precios transparentes.
          </p>
        </AnimatedSection>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative pt-4">
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              if (carouselRef.current) {
                const cardWidth = carouselRef.current.scrollWidth / 9;
                const currentScroll = carouselRef.current.scrollLeft;
                carouselRef.current.scrollTo({
                  left: currentScroll - cardWidth,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full p-2 shadow-lg hover:bg-card transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>
          <button
            onClick={() => {
              if (carouselRef.current) {
                const cardWidth = carouselRef.current.scrollWidth / 9;
                const currentScroll = carouselRef.current.scrollLeft;
                carouselRef.current.scrollTo({
                  left: currentScroll + cardWidth,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full p-2 shadow-lg hover:bg-card transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          <div
            ref={carouselRef}
            className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          >
            <div className="flex gap-6 px-4">
              {/* Duplicar paquetes para efecto infinito */}
              {[...packages, ...packages, ...packages].map((pkg, index) => (
                <div
                  key={`${pkg.name}-${index}`}
                  data-index={index}
                  className="snap-center shrink-0 w-[85vw] max-w-sm"
                >
                  <Card
                    className={`group relative flex h-full flex-col transition-all duration-300 mt-4 ${
                      pkg.highlighted
                        ? "border-accent bg-card shadow-lg shadow-accent/20"
                        : "border-border/50 bg-card/50"
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-white shadow-lg whitespace-nowrap z-10">
                        Más Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-foreground">
                        {pkg.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {pkg.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <span className="text-3xl font-bold text-foreground">
                          {pkg.price}
                        </span>
                        <div className="mt-2 text-xs font-medium text-accent">
                          {pkg.priceNote}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li
                            key={`${feature}-${featureIndex}`}
                            className="flex items-start gap-3"
                          >
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        variant={pkg.highlighted ? "gradient" : "outline"}
                        asChild
                      >
                        <a
                          href="https://wa.me/+573116839099"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Contactar
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-2">
            {packages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (carouselRef.current) {
                    const cardWidth = carouselRef.current.scrollWidth / 9;
                    const targetIndex = index + 3; // Usar el segundo set de tarjetas
                    carouselRef.current.scrollTo({
                      left: cardWidth * targetIndex - window.innerWidth * 0.075,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-gradient-to-r from-primary to-accent"
                    : "w-2 bg-muted hover:bg-muted-foreground"
                }`}
                aria-label={`Ir a ${packages[index].name}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <AnimatedSection key={pkg.name} delay={index * 100}>
              <Card
                className={`group relative flex h-full flex-col hover-lift transition-all duration-300 ${
                  pkg.highlighted
                    ? "border-accent bg-card shadow-lg shadow-accent/20 hover:shadow-accent/30"
                    : "border-border/50 bg-card/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-white shadow-lg">
                    Más Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-foreground">{pkg.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">
                      {pkg.price}
                    </span>
                    <div className="mt-2 text-xs font-medium text-accent">
                      {pkg.priceNote}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={pkg.highlighted ? "gradient" : "default"}
                    asChild
                  >
                    <a
                      href="https://wa.me/+573116839099"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contactar
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

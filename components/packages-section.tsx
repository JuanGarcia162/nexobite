"use client";

import { Check } from "lucide-react";
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

const packages = [
  {
    name: "Primera Huella Digital",
    description:
      "Para emprendedores que están empezando y necesitan presencia básica.",
    price: "$747.000",
    priceNote: "Ahorro de $705.000",
    features: [
      "Landing Page profesional (1 página)",
      "10 fotos de producto profesionales",
      "15 diseños para redes sociales",
      "Setup básico Instagram Business",
      "Link en bio personalizado",
      "Capacitación de 2 horas",
      "Entrega en 2-3 semanas",
    ],
    highlighted: false,
  },
  {
    name: "Despegue Digital",
    description: "Para negocios pequeños que quieren profesionalizarse.",
    price: "$1.697.000",
    priceNote: "Ahorro de $705.000",
    features: [
      "Web Portafolio completa (5 páginas)",
      "ChatBot WhatsApp Starter + 1 mes",
      "Sesión fotográfica (15 fotos)",
      "20 diseños para redes sociales",
      "3 videos Reels/TikTok",
      "Dominio .com + Hosting 1 año",
      "Capacitación de 4 horas",
      "Entrega en 3-4 semanas",
    ],
    highlighted: true,
  },
  {
    name: "Presencia Completa",
    description: "Todo lo que necesitas: web + redes + automatización.",
    price: "$3.747.000",
    priceNote: "Ahorro de $1.609.000",
    features: [
      "Web Profesional (hasta 8 páginas)",
      "ChatBot Business + 3 meses",
      "Community Management (1 mes)",
      "Sesión fotográfica (25 fotos)",
      "6 videos Reels/TikTok",
      "Dominio + Hosting por 1 año",
      "Calendario editorial primer mes",
      "Capacitación completa (6 horas)",
      "Entrega en 4-6 semanas",
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
      const popularIndex = 4; // Segundo set, segundo elemento (Despegue Digital)
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
    <section id="packages" className="relative py-24 sm:py-32 overflow-hidden">
      <ParticleField variant="mixed" density="high" speed="medium" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Paquetes Integrales
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ahorra hasta 30%
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
                        className={`w-full transition-all duration-300 ${
                          pkg.highlighted
                            ? "bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-accent/50 border-0"
                            : "hover:border-accent hover:text-accent"
                        }`}
                        variant={pkg.highlighted ? "default" : "outline"}
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
                    className={`w-full transition-all duration-300 ${
                      pkg.highlighted
                        ? "bg-gradient-to-r from-primary to-accent"
                        : "bg-primary"
                    } text-white hover:bg-accent hover:shadow-lg hover:shadow-accent/50 border-0`}
                    variant={pkg.highlighted ? "default" : "outline"}
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
      </div>
    </section>
  );
}

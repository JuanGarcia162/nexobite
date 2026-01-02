"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detectar sección activa
      const sections = ["services", "how-it-works", "packages"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // Si está en el top, no hay sección activa
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    handleScroll(); // Ejecutar al montar
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      {/* Backdrop adicional para asegurar que nada se vea por encima */}
      <div className="absolute inset-0 -z-10 backdrop-blur-sm" />

      <div
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          isScrolled
            ? "bg-card backdrop-blur-xl shadow-lg shadow-primary/5 border border-border/50"
            : "bg-card/95 backdrop-blur-lg border border-border/30"
        } rounded-2xl`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-110">
              <span className="text-sm font-bold text-white">N</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              nexobite
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="#services"
              className={`group relative text-sm font-medium transition-colors ${
                activeSection === "services"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>Servicios</span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  activeSection === "services"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
            <Link
              href="#how-it-works"
              className={`group relative text-sm font-medium transition-colors ${
                activeSection === "how-it-works"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>Cómo Funciona</span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  activeSection === "how-it-works"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
            <Link
              href="#packages"
              className={`group relative text-sm font-medium transition-colors ${
                activeSection === "packages"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>Paquetes</span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  activeSection === "packages"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 border-0"
            >
              <a
                href="https://wa.me/+573116839099"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Contáctanos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </a>
            </Button>
          </div>

          <button
            className="relative text-foreground md:hidden hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border/50 bg-card/50 backdrop-blur-sm md:hidden rounded-b-2xl">
            <nav className="flex flex-col gap-4 p-4">
              <Link
                href="#services"
                className={`text-sm font-medium transition-colors py-2 ${
                  activeSection === "services"
                    ? "text-accent font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#how-it-works"
                className={`text-sm font-medium transition-colors py-2 ${
                  activeSection === "how-it-works"
                    ? "text-accent font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Cómo Funciona
              </Link>
              <Link
                href="#packages"
                className={`text-sm font-medium transition-colors py-2 ${
                  activeSection === "packages"
                    ? "text-accent font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Paquetes
              </Link>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary to-accent border-0"
              >
                <a
                  href="https://wa.me/+573116839099"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

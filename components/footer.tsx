import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-md overflow-hidden">
              <Image
                src="/nexobite-logo.png"
                alt="Nexobite Logo"
                width={32}
                height={32}
              />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NEXOBITE
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/nexobite"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/+573116839099"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NexoBite. Todos los derechos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}

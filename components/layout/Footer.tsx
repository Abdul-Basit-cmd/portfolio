// components/layout/Footer.tsx
import Link from "next/link";
import { site, footer, social } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-muted-foreground">{footer.note}</p>
        <div className="flex items-center gap-6">
          {social.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{footer.builtIn}</p>
      </Container>
    </footer>
  );
}
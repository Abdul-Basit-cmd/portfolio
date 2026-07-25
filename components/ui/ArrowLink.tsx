// components/ui/ArrowLink.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ArrowLink({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
} & React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-foreground text-background hover:scale-[1.02]"
          : "border border-border text-foreground hover:bg-foreground/5",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
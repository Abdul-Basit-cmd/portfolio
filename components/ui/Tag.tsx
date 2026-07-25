// components/ui/Tag.tsx
import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground transition-colors duration-300 hover:border-foreground/20 hover:text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
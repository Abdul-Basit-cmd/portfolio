// components/ui/SectionHeading.tsx
import { AnimatedHeading } from "@/components/animations/AnimatedHeading";

export function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        ({index})
      </span>
      <AnimatedHeading
        as="h2"
        by="lines"
        className="max-w-3xl text-balance text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.05] tracking-[-0.02em]"
      >
        {title}
      </AnimatedHeading>
    </div>
  );
}
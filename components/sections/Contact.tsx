// components/sections/Contact.tsx
"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contact } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { AnimatedHeading } from "@/components/animations/AnimatedHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Tooltip } from "@/components/ui/Tooltip";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const success = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Errors = {};
    if (!state.name.trim()) newErrors.name = "Name is required";
    if (!state.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) newErrors.email = "Invalid email format";
    if (!state.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.text === "OK") {
        setStatus("success");
        setState({ name: "", email: "", subject: "", message: "" });
        gsap.fromTo(
          success.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }
        );
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-28 md:py-40">
      <Container className="grid gap-16 md:grid-cols-2">
        <div>
          <Reveal>
            <AnimatedHeading
              as="h2"
              by="words"
              className="text-balance text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-0.03em]"
            >
              {contact.heading}
            </AnimatedHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              {contact.paragraph}
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <Tooltip content="Copy to clipboard">
              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-2 text-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="border-b border-dashed border-border pb-1">
                  {contact.email}
                </span>
                <span className="text-xs opacity-50 transition-opacity group-hover:opacity-100">
                  ⧉
                </span>
              </button>
            </Tooltip>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="relative rounded-2xl border border-border/60 bg-card p-8 md:p-10">
            {status === "success" ? (
              <div ref={success} className="flex h-full min-h-[400px] flex-col items-center justify-center text-center opacity-0">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-2xl text-emerald-500">
                  ✓
                </div>
                <h3 className="text-xl font-medium">Message sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    label="Name"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={state.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>
                <FormField
                  label="Subject"
                  name="subject"
                  value={state.subject}
                  onChange={handleChange}
                  error={errors.subject}
                />
                <FormField
                  label="Message"
                  name="message"
                  textarea
                  value={state.message}
                  onChange={handleChange}
                  error={errors.message}
                />

                <Magnetic strength={0.2} className="inline-block">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={cn(
                      "flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all md:w-auto",
                      status === "loading"
                        ? "cursor-not-allowed bg-foreground/50 text-background"
                        : "bg-foreground text-background hover:scale-[1.02]"
                    )}
                  >
                    {status === "loading" ? (
                      <>
                        <span className="size-4 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                        Sending...
                      </>
                    ) : status === "error" ? (
                      "Failed. Try again."
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </Magnetic>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function FormField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  textarea = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          className={cn(
            "w-full resize-none rounded-lg border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-foreground/20",
            error ? "border-red-500/50" : "border-border/60"
          )}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={cn(
            "w-full rounded-lg border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-foreground/20",
            error ? "border-red-500/50" : "border-border/60"
          )}
        />
      )}
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
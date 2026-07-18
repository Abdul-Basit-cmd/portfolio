import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiArrowUpRight } from "react-icons/fi";
import { contact } from "../data/assets";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const STATUS = {
  IDLE: "idle",
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(STATUS.IDLE);
  const [configMissing, setConfigMissing] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setConfigMissing(true);
      setStatus(STATUS.ERROR);
      return;
    }

    setStatus(STATUS.SENDING);
    setConfigMissing(false);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          title: "Portfolio Contact Form",
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString("en-PK", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus(STATUS.SUCCESS);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus(STATUS.ERROR);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <p className="mb-5 font-mono text-[13px] tracking-wide text-muted">{contact.eyebrow}</p>
      <h2 className="max-w-2xl text-[1.9rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.3rem]">
        {contact.heading}
      </h2>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-body">{contact.description}</p>

      <form onSubmit={handleSubmit} className="mt-12 max-w-xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="font-mono text-[12px] tracking-wide text-muted">
              {contact.fields.name.label}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder={contact.fields.name.placeholder}
              className="focus-ring mt-2 w-full rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-[14.5px] text-ink placeholder:text-muted/70"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-mono text-[12px] tracking-wide text-muted">
              {contact.fields.email.label}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder={contact.fields.email.placeholder}
              className="focus-ring mt-2 w-full rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-[14.5px] text-ink placeholder:text-muted/70"
            />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="message" className="font-mono text-[12px] tracking-wide text-muted">
            {contact.fields.message.label}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder={contact.fields.message.placeholder}
            className="focus-ring mt-2 w-full resize-none rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-[14.5px] text-ink placeholder:text-muted/70"
          />
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === STATUS.SENDING}
            className="group focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-canvas 
             transition-all duration-300 ease-out 
             hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/20 
             active:scale-95 
             disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            {status === STATUS.SENDING ? contact.submittingLabel : contact.submitLabel}

            {status !== STATUS.SENDING && (
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <FiArrowUpRight />
              </span>
            )}
          </button>

          {status === STATUS.SUCCESS && (
            <p className="text-[14px] text-body">{contact.successMessage}</p>
          )}
          {status === STATUS.ERROR && (
            <p className="text-[14px] text-body">
              {configMissing
                ? "Contact form isn't configured yet — add your EmailJS keys to .env."
                : contact.errorMessage}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}

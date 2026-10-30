import type { Locale } from "@freemadeira/i18n";
import { buttonVariants } from "@freemadeira/ui/components/button";
import { cn } from "cn";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { SubmitEvent } from "react";

interface Props {
  labels: {
    email: string;
    error: string;
    submit: string;
    success: string;
  };
  locale: Locale;
  /** The footer's round arrow button, or the newsletter page's text button. */
  variant: "footer" | "page";
}

type Status = "idle" | "sending" | "success" | "error";

export default function NewsletterForm({ labels, locale, variant }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  async function subscribe(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email");
    setStatus("sending");
    let ok = false;
    try {
      const response = await fetch("/api/newsletter/subscribe", {
        body: JSON.stringify({ email, language: navigator.language, locale }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      ({ ok } = response);
    } catch {
      // Offline, or the request was blocked: shown as an error below.
    }
    if (ok) {
      form.reset();
    }
    setStatus(ok ? "success" : "error");
  }

  const footer = variant === "footer";

  return (
    <form className="relative" onSubmit={subscribe}>
      <div className="flex gap-2">
        <input
          aria-label={labels.email}
          autoComplete="email"
          className={cn(
            "text-dark placeholder:text-dark/40 min-w-0 rounded-full bg-white px-6 py-2.5 text-sm",
            footer
              ? "grow focus:outline-none"
              : "focus:outline-primary-400 border-dark border"
          )}
          name="email"
          placeholder={labels.email}
          required
          type="email"
        />
        {footer ? (
          <button
            className="border-dark hover:bg-dark inline-flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-[1.5px] p-2 transition duration-75 hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
            disabled={status === "sending"}
            type="submit"
          >
            <span className="sr-only">{labels.submit}</span>
            <ArrowRight aria-hidden="true" size={36} strokeWidth={1.5} />
          </button>
        ) : (
          <button
            className={buttonVariants({ variant: "fm" })}
            disabled={status === "sending"}
            type="submit"
          >
            {labels.submit}
          </button>
        )}
      </div>
      {/* Below the form, out of the flow, so the layout doesn't move. */}
      <p
        aria-live="polite"
        className="absolute inset-x-0 top-full mt-2 pl-6 text-sm"
      >
        {status === "success" && labels.success}
        {status === "error" && labels.error}
      </p>
    </form>
  );
}

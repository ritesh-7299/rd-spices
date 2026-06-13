"use client";

import { type FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputStyles =
  "w-full rounded-xl border border-[var(--color-forest)]/20 bg-white px-4 py-3 text-sm text-[var(--color-slate)] placeholder:text-[var(--color-slate)]/45 focus:border-[var(--color-forest-soft)] focus:ring-2 focus:ring-[var(--color-gold)]/30";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [startedAt, setStartedAt] = useState(() => Date.now().toString());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.formType = "contact";
    payload.startedAt = startedAt;

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message ?? "Unable to send message.");
      }

      setStatus("success");
      setStatusMessage(result.message ?? "Message sent successfully.");
      form.reset();
      setStartedAt(Date.now().toString());
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card-panel p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[var(--color-forest)]">
            Name
          </label>
          <input id="name" name="name" required className={inputStyles} />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-semibold text-[var(--color-forest)]">
            Company
          </label>
          <input id="company" name="company" required className={inputStyles} />
        </div>
        <div>
          <label htmlFor="country" className="mb-2 block text-sm font-semibold text-[var(--color-forest)]">
            Country
          </label>
          <input id="country" name="country" required className={inputStyles} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[var(--color-forest)]">
            Email
          </label>
          <input id="email" type="email" name="email" required className={inputStyles} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[var(--color-forest)]">
            Phone
          </label>
          <input id="phone" name="phone" required className={inputStyles} />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[var(--color-forest)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputStyles} resize-y`}
          placeholder="Tell us your requirement and target destination."
        />
      </div>

      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="startedAt" value={startedAt} />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--color-slate)]/70">
          We typically respond to qualified export inquiries within 24 business hours.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-[var(--color-forest)] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--color-forest-soft)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </div>

      {status !== "idle" && status !== "submitting" ? (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-emerald-700" : "text-rose-700"
          }`}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}

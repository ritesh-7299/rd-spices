"use client";

import { type FormEvent, useState } from "react";
import { productNameList } from "@/lib/products";

type ExportInquiryFormProps = {
  defaultProduct?: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputStyles =
  "w-full rounded-xl border border-[var(--color-forest)]/20 bg-white px-4 py-3 text-sm text-[var(--color-slate)] placeholder:text-[var(--color-slate)]/45 focus:border-[var(--color-forest-soft)] focus:ring-2 focus:ring-[var(--color-gold)]/30";

export function ExportInquiryForm({ defaultProduct }: ExportInquiryFormProps) {
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

    if (defaultProduct) {
      payload.productInterestedIn = defaultProduct;
    }

    payload.formType = "export-inquiry";
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
        throw new Error(result.message ?? "Unable to submit inquiry.");
      }

      setStatus("success");
      setStatusMessage(result.message ?? "Inquiry submitted successfully.");
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
          <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-[var(--color-forest)]">
            Full Name
          </label>
          <input id="fullName" name="fullName" required className={inputStyles} />
        </div>
        <div>
          <label
            htmlFor="companyName"
            className="mb-2 block text-sm font-semibold text-[var(--color-forest)]"
          >
            Company Name
          </label>
          <input id="companyName" name="companyName" required className={inputStyles} />
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
        <div>
          <label
            htmlFor="phoneNumber"
            className="mb-2 block text-sm font-semibold text-[var(--color-forest)]"
          >
            Phone Number
          </label>
          <input id="phoneNumber" name="phoneNumber" required className={inputStyles} />
        </div>
        <div>
          <label
            htmlFor="productInterestedIn"
            className="mb-2 block text-sm font-semibold text-[var(--color-forest)]"
          >
            Product Interested In
          </label>
          {defaultProduct ? (
            <input
              id="productInterestedIn"
              name="productInterestedIn"
              className={inputStyles}
              value={defaultProduct}
              readOnly
            />
          ) : (
            <select id="productInterestedIn" name="productInterestedIn" required className={inputStyles}>
              <option value="">Select product</option>
              {productNameList.map((productName) => (
                <option key={productName} value={productName}>
                  {productName}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div>
          <label
            htmlFor="quantityRequired"
            className="mb-2 block text-sm font-semibold text-[var(--color-forest)]"
          >
            Quantity Required
          </label>
          <input id="quantityRequired" name="quantityRequired" required className={inputStyles} />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[var(--color-forest)]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className={`${inputStyles} resize-y`}
            placeholder="Share product grade, destination port, and expected timeline."
          />
        </div>
      </div>

      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="startedAt" value={startedAt} />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--color-slate)]/70">
          By submitting, you agree to be contacted by RD Naturals export team.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-[var(--color-forest)] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--color-forest-soft)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? "Submitting..." : "Request Export Quote"}
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

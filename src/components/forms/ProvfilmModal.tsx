"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Modal } from "./Modal";
import { TextInput, TextArea, FormError } from "./Fields";
import { Button } from "@/components/ui/Button";
import { Check, Loader2 } from "lucide-react";

// ─────────────────────────────────────────────────────────
// Schema — keeps validation in one place, derives TS type
// ─────────────────────────────────────────────────────────

const schema = z.object({
  name: z.string().min(2, "Ange fullständigt namn"),
  email: z.string().email("Ogiltig e-postadress"),
  phone: z.string().min(6, "Ange telefonnummer"),
  company: z.string().min(2, "Ange företag eller mäklarkontor"),
  property: z
    .string()
    .min(3, "Ange ett objekt (adress eller områdesbeskrivning)"),
  materialLink: z
    .string()
    .url("Klistra in en länk till material (Drive / Dropbox / WeTransfer)"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

type Props = { open: boolean; onClose: () => void };

export function ProvfilmModal({ open, onClose }: Props) {
  const [submitState, setSubmitState] =
    useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitState("submitting");
    setErrorMessage(undefined);
    try {
      const res = await fetch("/api/provfilm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error ?? "Något gick fel. Försök igen.");
      }
      const data = (await res.json()) as { checkoutUrl?: string };
      if (data.checkoutUrl) {
        // Redirect to Stripe Checkout for the 1 900 kr provfilm.
        // Use .assign() (method) instead of `location.href = ...` (mutation)
        // so React Compiler's immutability rule is satisfied.
        window.location.assign(data.checkoutUrl);
        return;
      }
      setSubmitState("success");
      reset();
    } catch (e) {
      setSubmitState("error");
      setErrorMessage(e instanceof Error ? e.message : "Något gick fel.");
    }
  };

  const handleClose = () => {
    if (submitState === "submitting") return;
    onClose();
    setTimeout(() => setSubmitState("idle"), 350);
  };

  return (
    <Modal open={open} onClose={handleClose} size="lg">
      {submitState === "success" ? (
        <SuccessState onClose={handleClose} />
      ) : (
        <>
          {/* Header */}
          <div className="mb-8">
            <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
              Provfilm / 1 900 kr
            </span>
            <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl leading-[0.98] tracking-tight text-ink">
              Skicka material.
              <br />
              <span
                className="italic-display text-brass-deep"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                Vi
              </span>{" "}
              levererar inom 24 timmar.
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-fog max-w-md">
              Fyll i nedan så återkommer vi med uppladdningsinstruktioner och
              betallänk. Använd gärna ett redan sålt objekt — ingen risk.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            <FormError message={errorMessage} />

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
              <TextInput
                index={1}
                label="Namn"
                placeholder="Anna Andersson"
                autoComplete="name"
                {...register("name")}
                error={errors.name}
              />
              <TextInput
                index={2}
                label="Företag / Mäklarkontor"
                placeholder="Mäklarhuset"
                autoComplete="organization"
                {...register("company")}
                error={errors.company}
              />
              <TextInput
                index={3}
                label="E-post"
                type="email"
                placeholder="namn@maklarhuset.se"
                autoComplete="email"
                {...register("email")}
                error={errors.email}
              />
              <TextInput
                index={4}
                label="Telefon"
                type="tel"
                placeholder="+46 70 123 45 67"
                autoComplete="tel"
                {...register("phone")}
                error={errors.phone}
              />
            </div>

            <TextInput
              index={5}
              label="Objekt (adress eller beskrivning)"
              placeholder="Solrosgatan 14, Möllevången"
              {...register("property")}
              error={errors.property}
            />

            <TextInput
              index={6}
              label="Länk till material (Drive / Dropbox / WeTransfer)"
              placeholder="https://drive.google.com/..."
              {...register("materialLink")}
              error={errors.materialLink}
            />

            <TextArea
              index={7}
              label="Övrigt"
              optional
              placeholder="CTA-text, önskat fokus, deadline ..."
              {...register("notes")}
              error={errors.notes}
            />

            {/* Summary strip */}
            <div className="border-t border-ink/15 pt-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="block font-mono text-[10px] tracking-[0.24em] uppercase text-fog">
                  Att betala
                </span>
                <span className="font-display text-3xl text-ink leading-none mt-1 block">
                  1 900 kr
                </span>
                <span className="block font-mono text-[10px] tracking-widest uppercase text-fog mt-1">
                  exkl. moms · betalning via Stripe · Klarna / kort
                </span>
              </div>
              <Button
                type="submit"
                disabled={submitState === "submitting"}
                className="w-full sm:w-auto"
                showArrow={submitState !== "submitting"}
              >
                {submitState === "submitting" && (
                  <Loader2 size={14} className="animate-spin" />
                )}
                {submitState === "submitting" ? "Skickar..." : "Till betalning"}
              </Button>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────
// Success state — shown after successful submission
// ─────────────────────────────────────────────────────────

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="py-6">
      <div className="w-14 h-14 border border-brass flex items-center justify-center mb-6">
        <Check size={22} strokeWidth={1.5} className="text-brass-deep" />
      </div>
      <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass-deep">
        Tack
      </span>
      <h2 className="mt-3 font-display font-light text-3xl sm:text-4xl leading-tight tracking-tight text-ink">
        Vi har tagit emot{" "}
        <span
          className="italic-display text-brass-deep"
          style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
        >
          ditt material.
        </span>
      </h2>
      <p className="mt-5 text-[15px] leading-relaxed text-fog max-w-md">
        Vi återkommer inom kort med betallänk och uppladdningsinstruktioner.
        Räkna med leverans av provfilm inom 24 timmar från betalning.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-ink editorial-link"
      >
        Stäng
      </button>
    </div>
  );
}

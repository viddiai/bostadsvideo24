"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextInput, TextArea, FormError } from "./Fields";
import type { CatalogItem } from "@/lib/catalog";

const schema = z.object({
  name: z.string().min(2, "Ange fullständigt namn"),
  email: z.string().email("Ogiltig e-postadress"),
  phone: z.string().min(6, "Ange telefonnummer"),
  company: z.string().min(2, "Ange företag eller mäklarkontor"),
  orgNumber: z.string().optional(),
  property: z.string().optional(),
  materialLink: z
    .string()
    .url("Ange giltig länk")
    .optional()
    .or(z.literal("")),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function OrderForm({ item }: { item: CatalogItem }) {
  const [state, setState] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setState("submitting");
    setErrorMessage(undefined);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId: item.id, ...values }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error ?? "Något gick fel.");
      }
      const data = (await res.json()) as { checkoutUrl?: string };
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return;
      }
      throw new Error("Saknar betallänk.");
    } catch (e) {
      setState("error");
      setErrorMessage(e instanceof Error ? e.message : "Något gick fel.");
    }
  };

  const isObjectPackage =
    item.category === "objekt" || item.category === "provfilm";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7" noValidate>
      <FormError message={errorMessage} />

      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
        <TextInput
          index={1}
          label="Namn"
          autoComplete="name"
          placeholder="Anna Andersson"
          {...register("name")}
          error={errors.name}
        />
        <TextInput
          index={2}
          label="Företag"
          autoComplete="organization"
          placeholder="Mäklarhuset"
          {...register("company")}
          error={errors.company}
        />
        <TextInput
          index={3}
          label="E-post"
          type="email"
          autoComplete="email"
          placeholder="namn@maklarhuset.se"
          {...register("email")}
          error={errors.email}
        />
        <TextInput
          index={4}
          label="Telefon"
          type="tel"
          autoComplete="tel"
          placeholder="+46 70 123 45 67"
          {...register("phone")}
          error={errors.phone}
        />
      </div>

      <TextInput
        index={5}
        label="Organisationsnummer"
        optional
        placeholder="556677-8899"
        {...register("orgNumber")}
        error={errors.orgNumber}
      />

      {isObjectPackage && (
        <>
          <TextInput
            index={6}
            label="Objekt (adress eller beskrivning)"
            optional
            placeholder="Solrosgatan 14, Möllevången"
            {...register("property")}
            error={errors.property}
          />
          <TextInput
            index={7}
            label="Länk till material (Drive / Dropbox / WeTransfer)"
            optional
            placeholder="https://drive.google.com/..."
            {...register("materialLink")}
            error={errors.materialLink}
          />
        </>
      )}

      <TextArea
        index={isObjectPackage ? 8 : 6}
        label="Övrigt"
        optional
        placeholder="Önskat fokus, CTA-text, deadline, brandriktlinjer ..."
        {...register("notes")}
        error={errors.notes}
      />

      <div className="border-t border-ink/15 pt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
        <div>
          <span className="block font-mono text-[10px] tracking-[0.24em] uppercase text-fog">
            Att betala
          </span>
          <span className="font-display text-3xl lg:text-4xl text-ink leading-none mt-1 block">
            {item.displayPrice}
          </span>
          <span className="block font-mono text-[10px] tracking-widest uppercase text-fog mt-1">
            exkl. moms · {item.recurring ? "kort (månadsvis)" : "Klarna / kort"}
          </span>
        </div>
        <Button
          type="submit"
          disabled={state === "submitting"}
          className="w-full sm:w-auto"
          showArrow={state !== "submitting"}
        >
          {state === "submitting" && (
            <Loader2 size={14} className="animate-spin" />
          )}
          {state === "submitting" ? "Skickar..." : "Till betalning"}
        </Button>
      </div>
    </form>
  );
}

"use client";

import * as React from "react";
import type { FieldError } from "react-hook-form";

// Shared editorial field styling — hairline border bottom, no rounding,
// mono-label uppercase tracker above each input.

const labelClass =
  "block font-mono text-[10px] tracking-[0.22em] uppercase text-fog mb-2";

const inputClass =
  "w-full bg-transparent border-0 border-b border-ink/25 px-0 py-2.5 text-[15px] text-ink placeholder:text-fog/60 focus:outline-none focus:border-ink focus:ring-0 transition-colors duration-200 font-sans";

const errorClass = "mt-1.5 font-mono text-[10px] tracking-widest uppercase text-rust";

type FieldShellProps = {
  label: string;
  htmlFor: string;
  error?: FieldError;
  index?: number;
  optional?: boolean;
  children: React.ReactNode;
};

export function FieldShell({
  label,
  htmlFor,
  error,
  index,
  optional,
  children,
}: FieldShellProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {index !== undefined && (
          <span className="text-brass-deep mr-2">
            {String(index).padStart(2, "0")}
          </span>
        )}
        {label}
        {optional && (
          <span className="ml-2 text-fog/70 normal-case tracking-normal italic font-display">
            valfritt
          </span>
        )}
      </label>
      {children}
      {error?.message && <p className={errorClass}>{error.message}</p>}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: FieldError;
  index?: number;
  optional?: boolean;
};

export const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  function TextInput({ label, error, index, optional, id, ...rest }, ref) {
    const fieldId = id ?? rest.name;
    return (
      <FieldShell
        label={label}
        htmlFor={fieldId ?? ""}
        error={error}
        index={index}
        optional={optional}
      >
        <input ref={ref} id={fieldId} className={inputClass} {...rest} />
      </FieldShell>
    );
  }
);

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: FieldError;
  index?: number;
  optional?: boolean;
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function TextArea({ label, error, index, optional, id, ...rest }, ref) {
    const fieldId = id ?? rest.name;
    return (
      <FieldShell
        label={label}
        htmlFor={fieldId ?? ""}
        error={error}
        index={index}
        optional={optional}
      >
        <textarea
          ref={ref}
          id={fieldId}
          rows={3}
          className={inputClass + " resize-none py-3"}
          {...rest}
        />
      </FieldShell>
    );
  }
);

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: FieldError;
  index?: number;
  optional?: boolean;
  options: { value: string; label: string }[];
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { label, error, index, optional, options, id, ...rest },
    ref,
  ) {
    const fieldId = id ?? rest.name;
    return (
      <FieldShell
        label={label}
        htmlFor={fieldId ?? ""}
        error={error}
        index={index}
        optional={optional}
      >
        <select
          ref={ref}
          id={fieldId}
          className={inputClass + " appearance-none bg-bone pr-8"}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1.5L6 6.5L11 1.5' stroke='%230F1B2E' stroke-width='1.2'/></svg>\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 0 center",
          }}
          {...rest}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </FieldShell>
    );
  }
);

export function FormError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <div className="border border-rust/30 bg-rust/5 px-4 py-3">
      <p className="font-mono text-[11px] tracking-widest uppercase text-rust">
        {message}
      </p>
    </div>
  );
}

import React from "react";

/**
 * TextInput: small reusable input component with label and error display.
 * Props:
 *  - label, id, type, placeholder, register (from react-hook-form), error
 */
export default function TextInput({ label, id, type = "text", placeholder, register, error }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium mb-1">{label}</label>
      <input
        id={id}
        {...(register ? register(id) : {})}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 ${error ? "border-red-400" : "border-slate-200"}`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && <p id={`${id}-error`} className="mt-1 text-xs text-red-600">{error.message}</p>}
    </div>
  );
}

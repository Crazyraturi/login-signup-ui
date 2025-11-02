import React from "react";
import AuthLayout from "../components/AuthLayout";
import TextInput from "../components/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation/authSchema";

/**
 * Login page:
 * - Uses react-hook-form for performant forms
 * - Yup for schema validation (resolver)
 * - All validation messages shown inline
 */
export default function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    // For assignment: just log data.
    // In a real app, call your backend here.
    console.log("Login submit:", data);
    alert("Login submitted — check console");
  };

  return (
    <AuthLayout title="Welcome back">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextInput
          label="Email"
          id="email"
          type="email"
          placeholder="you@example.com"
          register={register}
          error={errors.email}
        />
        <TextInput
          label="Password"
          id="password"
          type="password"
          placeholder="••••••••"
          register={register}
          error={errors.password}
        />

        <div className="flex items-center justify-between mb-4">
          <label className="text-sm">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a className="text-sm text-blue-600 underline" href="#forgot">Forgot?</a>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </AuthLayout>
  );
}

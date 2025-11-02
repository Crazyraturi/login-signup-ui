import React from "react";
import AuthLayout from "../components/AuthLayout";
import TextInput from "../components/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../validation/authSchema";

/**
 * Signup page:
 * - extra field: full name
 * - confirm password validation
 */
export default function Signup() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    // remove confirmPassword before sending to backend
    const payload = { name: data.name, email: data.email, password: data.password };
    console.log("Signup payload:", payload);
    alert("Signup submitted — check console");
  };

  return (
    <AuthLayout title="Create an account">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextInput label="Full name" id="name" placeholder="Your full name" register={register} error={errors.name} />
        <TextInput label="Email" id="email" type="email" placeholder="you@example.com" register={register} error={errors.email} />
        <TextInput label="Password" id="password" type="password" placeholder="At least 8 characters" register={register} error={errors.password} />
        <TextInput label="Confirm password" id="confirmPassword" type="password" placeholder="Confirm password" register={register} error={errors.confirmPassword} />

        <button type="submit" disabled={isSubmitting} className="w-full py-2 mt-2 rounded-md bg-blue-600 text-white">
          {isSubmitting ? "Creating..." : "Create account"}
        </button>
      </form>
    </AuthLayout>
  );
}

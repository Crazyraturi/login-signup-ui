import * as yup from "yup";

/**
 * Common validation rules:
 * - email required + must be valid email
 * - password required + min 8 chars, must contain number
 */
export const loginSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().required("Password is required")
    .min(8, "Password must be at least 8 characters")
});

export const signupSchema = yup.object({
  name: yup.string().required("Full name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/\d/, "Password must contain a number"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password")
});

import React from "react";
import { Link } from "react-router-dom";

/**
 * AuthLayout: small centered card used by Login & Signup pages.
 * Accepts children where forms are rendered.
 */
export default function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-sm text-slate-500 mt-1">We’re happy to see you again. Let’s get started!</p>
        </header>
        {children}
        <footer className="mt-6 text-center text-sm text-slate-500">
          <Link to="/login" className="underline  hover:text-blue-500 mr-2">Login</Link>
          <Link to="/signup" className="underline hover:text-blue-500">Signup</Link>
        </footer>
      </div>
    </div>
  );
}

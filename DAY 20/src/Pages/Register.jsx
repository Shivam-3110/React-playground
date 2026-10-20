
import React, { useState } from "react";
import { Link } from "react-router";
import {
  ShoppingBag,
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Truck,
  Package,
} from "lucide-react";

import { useAuth } from "../hooks/AuthHooks";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    errors,
    isSubmitting,
    registerForm
  } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [serverError, setServerError] = useState("");


  const inputClass =
    "h-12 w-full rounded-xl border border-white/10 bg-[#191719] pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#FF6D29] focus:ring-2 focus:ring-[#FF6D29]/20";

  const labelClass =
    "mb-2 block text-sm font-medium text-gray-300";

  const errorClass = "mt-2 text-xs text-red-400";

  return (
    <div className="min-h-screen bg-[#111011] p-0 text-white md:p-5 lg:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1450px] overflow-hidden rounded-2xl border border-white/10 bg-[#0e0d0e] shadow-2xl lg:grid-cols-2">

        {/* LEFT PROMOTIONAL PANEL */}
        <section className="relative hidden overflow-hidden border-r border-orange-900/30 bg-gradient-to-br from-[#17100c] via-[#29170f] to-[#100d0c] p-10 md:p-12 lg:flex lg:flex-col">

          {/* Background decorations */}
          <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-orange-700/10 blur-3xl" />

          {/* Logo */}
          <Link
            to="/"
            className="relative z-10 flex w-fit items-center gap-2 text-2xl font-extrabold tracking-tight"
          >
            <ShoppingBag className="h-7 w-7 text-[#FF6D29]" />
            Swift<span className="text-[#FF6D29]">Cart</span>
          </Link>

          {/* Main content */}
          <div className="relative z-10 mt-16 max-w-lg">
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#FF6D29]">
              JOIN THE SWIFTCART COMMUNITY
            </p>

            <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight xl:text-6xl">
              Shopping
              <br />
              Made
              <br />
              <span className="text-[#FF6D29]">Simple.</span>
              <br />
              Life Made Better.
            </h1>

            <p className="mt-6 max-w-sm text-base leading-7 text-gray-400">
              Create your account and discover amazing products,
              exclusive deals, and a shopping experience you'll love.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-6">
              <Feature
                icon={<Truck />}
                title="Fast Delivery"
                description="Your favorites, delivered to your door"
              />

              <Feature
                icon={<ShieldCheck />}
                title="Secure Shopping"
                description="Shop confidently with secure authentication"
              />

              <Feature
                icon={<Package />}
                title="Exclusive Deals"
                description="Discover offers and products you'll love"
              />
            </div>
          </div>

          {/* Decorative card */}
          <div className="absolute bottom-20 right-10 hidden xl:block">
            <div className="flex h-44 w-44 rotate-6 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
              <ShoppingBag className="h-16 w-16 text-[#FF6D29]" />

              <p className="mt-4 text-sm font-semibold">
                Happy Shopping!
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Great deals await
              </p>
            </div>
          </div>

          {/* Decorative indicators */}
          <div className="absolute bottom-8 left-12 flex gap-2">
            <span className="h-1.5 w-8 rounded-full bg-[#FF6D29]" />
            <span className="h-1.5 w-5 rounded-full bg-white/20" />
            <span className="h-1.5 w-5 rounded-full bg-white/20" />
          </div>
        </section>

        {/* RIGHT REGISTRATION PANEL */}
        <section className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-10 md:min-h-0 lg:px-14 xl:px-20">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <Link
              to="/"
              className="mb-8 flex w-fit items-center gap-2 text-2xl font-extrabold lg:hidden"
            >
              <ShoppingBag className="h-7 w-7 text-[#FF6D29]" />
              Swift<span className="text-[#FF6D29]">Cart</span>
            </Link>

            {/* Heading */}
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#FF6D29]">
                GET STARTED
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Create Account
              </h2>

              <p className="mt-3 text-sm text-gray-400 sm:text-base">
                Join SwiftCart and start shopping today.
              </p>
            </div>

            {/* Registration form */}
            <form
              onSubmit={handleSubmit(registerForm)}
              noValidate
              className="space-y-4"
            >
              {/* Full name */}
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full name
                </label>

                <div className="relative">
                  <UserRound className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must contain at least 2 characters",
                      },
                    })}
                    className={`${inputClass} ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                </div>

                {errors.name && (
                  <p role="alert" className={errorClass}>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className={`${inputClass} ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                </div>

                {errors.email && (
                  <p role="alert" className={errorClass}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className={labelClass}>
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    aria-invalid={Boolean(errors.password)}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must contain at least 8 characters",
                      },
                    })}
                    className={`${inputClass} ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-[#FF6D29]"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {errors.password ? (
                  <p role="alert" className={errorClass}>
                    {errors.password.message}
                  </p>
                ) : (
                  <p className="mt-2 text-xs text-gray-500">
                    Use at least 8 characters.
                  </p>
                )}
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className={labelClass}
                >
                  Confirm password
                </label>

                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    aria-invalid={Boolean(errors.confirmPassword)}
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value, values) =>
                        value === values.password ||
                        "Passwords do not match",
                    })}
                    className={`${inputClass} ${
                      errors.confirmPassword ? "border-red-500" : ""
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-[#FF6D29]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p role="alert" className={errorClass}>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms and conditions */}
              <div>
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-gray-400">
                  <input
                    type="checkbox"
                    {...register("agreeToTerms", {
                      required: "Please accept the Terms and Conditions",
                    })}
                    className="mt-1 h-4 w-4 shrink-0 accent-[#FF6D29]"
                  />

                  <span>
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-[#FF6D29] hover:text-orange-400"
                    >
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-[#FF6D29] hover:text-orange-400"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                {errors.agreeToTerms && (
                  <p role="alert" className={errorClass}>
                    {errors.agreeToTerms.message}
                  </p>
                )}
              </div>

              {/* API error */}
              {serverError && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                >
                  {serverError}
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#FF6D29] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ff8247] hover:shadow-lg hover:shadow-orange-500/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}

                {!isSubmitting && (
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                )}
              </button>
            </form>

            {/* Login link */}
            <p className="mt-7 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#FF6D29] transition hover:text-orange-400"
              >
                Login
              </Link>
            </p>

            <p className="mt-6 text-center text-xs leading-6 text-gray-600">
              Your information is handled according to our privacy policy.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-[#FF6D29]">
        {React.cloneElement(icon, {
          size: 24,
          strokeWidth: 1.8,
        })}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="mt-1 text-xs text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default Register;


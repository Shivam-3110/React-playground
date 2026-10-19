
import React, { useState } from "react";
import { Link } from "react-router";
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  Package,
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";

import { useAuth } from "../hooks/AuthHooks";

function LoginPage() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
  } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  // React Hook Form validates the inputs before calling onSubmit.
  const onSubmit = async (data) => {
    setServerError("");

    try {
      // Connect your login API here.
      console.log("Login data:", data);

      // After successful login:
      // navigate("/");
    } catch (error) {
      setServerError(
        error.message || "Login failed. Please try again."
      );
    }
  };

  const inputClass =
    "h-14 w-full rounded-xl border border-white/10 bg-[#191719] pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#FF6D29] focus:ring-2 focus:ring-[#FF6D29]/20";

  const labelClass =
    "mb-2 block text-sm font-medium text-gray-300";

  const errorClass = "mt-2 text-xs text-red-400";

  return (
    <div className="min-h-screen bg-[#111011] p-0 text-white md:p-5 lg:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1450px] overflow-hidden rounded-2xl border border-white/10 bg-[#0e0d0e] shadow-2xl lg:grid-cols-2">

        {/* LEFT PROMOTIONAL SECTION */}
        <section className="relative hidden overflow-hidden border-r border-orange-900/30 bg-gradient-to-br from-[#17100c] via-[#29170f] to-[#100d0c] p-10 md:p-12 lg:flex lg:flex-col">

          {/* Background decorations */}
          <div className="absolute -right-32 top-44 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />

          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-orange-700/10 blur-3xl" />

          {/* Brand */}
          <Link
            to="/"
            className="relative z-10 flex w-fit items-center gap-2 text-2xl font-extrabold tracking-tight"
          >
            <ShoppingBag className="h-7 w-7 text-[#FF6D29]" />
            Swift<span className="text-[#FF6D29]">Cart</span>
          </Link>

          {/* Promotional content */}
          <div className="relative z-10 mt-20 max-w-lg">
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#FF6D29]">
              YOUR SHOPPING DESTINATION
            </p>

            <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight xl:text-6xl">
              Your Next
              <br />
              Favorite
              <br />
              <span className="text-[#FF6D29]">Product</span>
              <br />
              Is Here.
            </h1>

            <p className="mt-6 max-w-sm text-base leading-7 text-gray-400">
              Discover top brands, great deals and a seamless
              shopping experience — all in one place.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-6">
              <Feature
                icon={<Truck />}
                title="Fast Delivery"
                description="Get your orders quickly"
              />

              <Feature
                icon={<ShieldCheck />}
                title="Secure Payments"
                description="Shop with confidence"
              />

              <Feature
                icon={<Package />}
                title="Wide Selection"
                description="Everything you need"
              />
            </div>
          </div>

          {/* Decorative shopping card */}
          <div className="absolute bottom-20 right-10 hidden xl:block">
            <div className="flex h-44 w-44 rotate-6 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
              <ShoppingBag className="h-16 w-16 text-[#FF6D29]" />

              <p className="mt-4 text-sm font-semibold">
                Happy Shopping!
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Deals await you
              </p>
            </div>
          </div>

          {/* Slider indicators */}
          <div className="absolute bottom-8 left-12 flex gap-2">
            <span className="h-1.5 w-8 rounded-full bg-[#FF6D29]" />
            <span className="h-1.5 w-5 rounded-full bg-white/20" />
            <span className="h-1.5 w-5 rounded-full bg-white/20" />
          </div>
        </section>

        {/* RIGHT LOGIN SECTION */}
        <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 md:min-h-0 lg:px-14 xl:px-20">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <Link
              to="/"
              className="mb-12 flex w-fit items-center gap-2 text-2xl font-extrabold lg:hidden"
            >
              <ShoppingBag className="h-7 w-7 text-[#FF6D29]" />
              Swift<span className="text-[#FF6D29]">Cart</span>
            </Link>

            {/* Heading */}
            <div className="mb-10">
              <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#FF6D29]">
                WELCOME BACK
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Welcome Back
              </h2>

              <p className="mt-3 text-sm text-gray-400 sm:text-base">
                Login to your SwiftCart account
              </p>
            </div>

            {/* LOGIN FORM */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-6"
            >
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
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    aria-invalid={Boolean(errors.password)}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className={`${inputClass} ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-[#FF6D29]"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p role="alert" className={errorClass}>
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember me and forgot password */}
              <div className="flex items-center justify-between gap-3 text-sm">
                <label className="flex cursor-pointer items-center gap-2 text-gray-400">
                  <input
                    type="checkbox"
                    {...register("rememberMe")}
                    className="h-4 w-4 accent-[#FF6D29]"
                  />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-[#FF6D29] transition hover:text-orange-400"
                >
                  Forgot password?
                </Link>
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
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#FF6D29] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ff8247] hover:shadow-lg hover:shadow-orange-500/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Logging in..." : "Login"}

                {!isSubmitting && (
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs font-medium text-gray-500">
                OR
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Social login buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-medium transition hover:border-white/25 hover:bg-white/[0.07]"
              >
                <span className="text-lg font-bold text-blue-400">G</span>
                Google
              </button>

              <button
                type="button"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-medium transition hover:border-white/25 hover:bg-white/[0.07]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 1.99 3.09 1.35.1-.71.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.71.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.1 5.52.4.35.76 1.03.76 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
                GitHub
              </button>
            </div>

            {/* Sign up */}
            <p className="mt-9 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-[#FF6D29] transition hover:text-orange-400"
              >
                Sign up
              </Link>
            </p>

            {/* Terms */}
            <p className="mt-8 text-center text-xs leading-6 text-gray-600">
              By continuing, you agree to our{" "}
              <Link to="/terms" className="underline hover:text-gray-400">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="underline hover:text-gray-400">
                Privacy Policy
              </Link>
              .
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

export default LoginPage;


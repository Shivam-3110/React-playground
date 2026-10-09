
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Auth } from "../context/AuthContext";

function LoginPage() {

  const {registeredUsers, setloggedinUsers} = useContext(Auth)

  const [showPassword, setShowPassword] = useState(false);
         let {register,handleSubmit,reset,formState:{errors}} = useForm();
      let navigate = useNavigate();
      let formSubmit = (data) => {
      let user = registeredUsers.find(
        (val) => val.email === data.email && val.password === data.password);
      if(!user){
        toast.error("Invalid email or password")
        return
      }
        setloggedinUsers(user)
        toast.success("Logged in Successfully")
        localStorage.setItem("LoggedInUsers",JSON.stringify(user))
        reset()
      }
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center p-4">

      <div className="w-full max-w-5xl min-h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <div className="hidden md:flex relative overflow-hidden bg-gradient-to-br from-[#ff6d29] to-[#e94f16] p-12 text-white flex-col">

          {/* Logo */}
          <div className="flex items-center gap-3 text-2xl font-bold">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            MyApp
          </div>

          {/* Content */}
          <div className="relative z-10 mt-32 max-w-sm">
            <h1 className="text-5xl font-bold leading-tight">
              Welcome
              <br />
              Back!
            </h1>

            <p className="mt-6 text-white/85 leading-7">
              Login to your account and continue where you left off.
            </p>
          </div>

          {/* Decorative Circles */}
          <div className="absolute w-[350px] h-[350px] rounded-full border border-white/20 -right-40 -bottom-32"></div>

          <div className="absolute w-[250px] h-[250px] rounded-full border border-white/20 -right-28 -bottom-20"></div>

          <div className="absolute w-[150px] h-[150px] rounded-full border border-white/20 -right-16 -bottom-8"></div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center justify-center p-6 sm:p-10 md:p-14">

          <div className="w-full max-w-md">

            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-zinc-900">
                Sign in
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Enter your details to access your account
              </p>
            </div>

            <form 
            onSubmit={handleSubmit(formSubmit)}
            className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-zinc-700"
                >
                  Email address
                </label>

                <input
                 {...register("email",{
                    required:"email is required"
                 })}
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="
                    w-full h-12 px-4
                    border border-zinc-300
                    rounded-xl
                    outline-none
                    text-sm
                    transition
                    focus:border-[#ff6d29]
                    focus:ring-4
                    focus:ring-orange-100
                  "
                />
              </div>

              {/* Password */}
              <div>

                <div className="flex justify-between items-center mb-2">

                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-zinc-700"
                  >
                    Password
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-xs font-semibold text-[#ff6d29] hover:underline"
                  >
                    Forgot password?
                  </a>

                </div>

                <div className="relative">

                  <input
                   {...register("password",{
                    required:"password is required"
                 })}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="
                      w-full h-12 px-4 pr-16
                      border border-zinc-300
                      rounded-xl
                      outline-none
                      text-sm
                      transition
                      focus:border-[#ff6d29]
                      focus:ring-4
                      focus:ring-orange-100
                    "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      absolute right-3 top-1/2
                      -translate-y-1/2
                      text-xs font-semibold
                      text-[#ff6d29]
                      hover:text-orange-700
                    "
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">

                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 accent-[#ff6d29]"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-zinc-600 cursor-pointer"
                >
                  Remember me
                </label>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="
                  w-full h-12
                  bg-[#ff6d29]
                  hover:bg-[#e95718]
                  text-white
                  rounded-xl
                  font-semibold
                  text-sm
                  transition
                  duration-200
                  hover:-translate-y-0.5
                  shadow-lg
                  shadow-orange-200
                "
              >
                Sign in
              </button>

            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">

              <div className="h-px bg-zinc-200 flex-1"></div>

              <span className="text-xs text-zinc-400">
                OR
              </span>

              <div className="h-px bg-zinc-200 flex-1"></div>

            </div>

            {/* Google Login */}
            <button
              type="button"
              className="
                w-full h-12
                border border-zinc-300
                rounded-xl
                bg-white
                hover:bg-zinc-50
                flex items-center justify-center
                gap-3
                text-sm font-semibold
                text-zinc-700
                transition
              "
            >
              <span className="text-lg font-bold">
                G
              </span>

              Continue with Google
            </button>

            {/* Signup */}
            <p className="text-center text-sm text-zinc-500 mt-7">

              Don't have an account?

              <span
                 onClick={() => navigate("/register")}
                className="ml-1 font-semibold text-[#ff6d29] hover:underline"
              >
                Create account
              </span>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LoginPage;


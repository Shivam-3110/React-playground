
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import {useForm} from "react-hook-form"
import { toast } from "react-toastify";
import { Auth } from "../context/AuthContext";

function RegisterPage() {
 
  const {setRegisteredUsers, registeredUsers} = useContext(Auth)

  const [showPassword, setShowPassword] = useState(false);
  let {register,handleSubmit,reset,formState:{errors}} = useForm();
  let navigate = useNavigate();
  let formSubmit = (data) => {
    let arr = [...registeredUsers,data]
    setRegisteredUsers(arr)
    toast.success("Registered Successfully")
    localStorage.setItem("registeredUsers",JSON.stringify(arr))
    reset()
  }
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center p-4">

      <div className="w-full max-w-5xl min-h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <div className="hidden md:flex relative overflow-hidden bg-gradient-to-br from-[#ff6d29] to-[#e95718] p-12 text-white flex-col">

          {/* Logo */}
          <div className="flex items-center gap-3 text-2xl font-bold">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            MyApp
          </div>

          {/* Content */}
          <div className="relative z-10 mt-32 max-w-sm">
            <h1 className="text-5xl font-bold leading-tight">
              Create
              <br />
              Account
            </h1>

            <p className="mt-6 text-white/85 leading-7">
              Join us today and start your journey with your new account.
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
                Create an account
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Fill in your details to get started
              </p>
            </div>

            <form 
            onSubmit={handleSubmit(formSubmit)} className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-semibold text-zinc-700"
                >
                  Full name
                </label>

                <input
                 {...register("name",{
                    required:"name is required"
                 })}
                  id="name"
                  type="text"
                  placeholder="Enter your name"
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
                {errors.email && <p>{errors.name.message} </p>}
              </div>

              {/* Gmail */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-zinc-700"
                >
                  Gmail
                </label>

                <input
                {...register("email",{
                    required:"email is required"
                 })}
                  id="email"
                  type="email"
                  placeholder="you@gmail.com"
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
                {errors.name && <p>{errors.name.message} </p>}

              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-semibold text-zinc-700"
                >
                  Password
                </label>

                <div className="relative">

                  <input
                  {...register("password",{
                    required:"password is required",
                    minLength:{
                        value:6,
                        message:"Minimum 6 characters is required",
                    }
                 })}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
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
             {errors.password && <p>{errors.name.message} </p>}

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

              {/* Terms */}
              <div className="flex items-start gap-2">

                <input
                  id="terms"
                  type="checkbox"
                  className="mt-1 w-4 h-4 accent-[#ff6d29]"
                />

                <label
                  htmlFor="terms"
                  className="text-sm text-zinc-500 leading-5"
                >
                  I agree to the{" "}
                  <a
                    href="/terms"
                    className="text-[#ff6d29] font-semibold hover:underline"
                  >
                    Terms & Conditions
                  </a>
                </label>

              </div>

              {/* Register Button */}
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
                Create account
              </button>

            </form>

            {/* Login */}
            <p className="text-center text-sm text-zinc-500 mt-7">

              Already have an account?

              <span
                onClick={() => navigate("/")}
                className="ml-1 font-semibold text-[#ff6d29] hover:underline"
              >
                Sign in
              </span>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RegisterPage;


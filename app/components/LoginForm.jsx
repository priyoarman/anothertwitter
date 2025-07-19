"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (res?.error) {
        setError("Invalid Credentials");
        setTimeout(() => setError(""), 3000);
        return;
      }
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sticky container mx-auto grid h-screen place-items-center border-r-1 border-gray-200 px-6 py-6">
      <div className="place-items-center rounded-lg p-5 shadow-md shadow-blue-400">
        <h1 className="text-2xl font-semibold text-gray-700">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col items-center justify-center gap-4"
        >
          <input
            className="w-[400px] rounded-xl border-1 border-gray-200 bg-gray-50 px-6 py-2 text-[16px] text-gray-900 placeholder-gray-500"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className="w-[400px] rounded-xl border-1 border-gray-200 bg-gray-50 px-6 py-2 text-[16px] text-gray-900 placeholder-gray-500"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <div className="flex w-full flex-row justify-between">
            <button className="h-8 w-1/4 cursor-pointer rounded-xl bg-blue-400 px-4 text-sm text-white hover:bg-blue-300">
              Login
            </button>
            <Link href="/register">
              <div className="mt-2 flex flex-row gap-1 text-right text-sm text-gray-700">
                Don't have an account?{" "}
                <span className="text-emerald-600 hover:text-emerald-500 hover:underline">
                  Register!
                </span>
              </div>
            </Link>
          </div>
        </form>
        {error && (
          <div className="mt-4 w-fit rounded-md bg-red-500 px-3 py-1 text-sm text-white">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;

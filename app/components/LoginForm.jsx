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
        email,
        password,
        callbackUrl: "/profile",
      });
      if (res.error) {
        setError("Invalid Credentials");
        setTimeout(() => setError(""), 3000);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen container min-w-xl mx-auto px-6 py-6">
      <div className="shadow-md place-items-center shadow-blue-400 p-5 rounded-lg">
        <h1 className="text-2xl text-white font-semibold">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-4 justify-center items-center"
        >
          <input
            className="w-[400px] bg-cyan-50 rounded-xl text-gray-900 text-[16px] placeholder-gray-500 py-2 px-6"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className="w-[400px] bg-cyan-50 rounded-xl text-gray-900 text-[16px] placeholder-gray-500 py-2 px-6"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <div className="flex flex-row w-full justify-between">
            <button className="bg-blue-400 w-1/4 text-white text-sm rounded-xl px-4 h-8 hover:bg-blue-300">
              Login
            </button>
            <Link href="/register">
              <div className="flex flex-col text-white text-sm text-right">
                Don't have an account?{" "}
                <span className="text-blue-400 hover:text-blue-300 hover:underline">
                  Register!
                </span>
              </div>
            </Link>
          </div>
        </form>
        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-4">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;

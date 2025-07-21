"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are necessary.");
      setTimeout(() => setError(""), 3000);
      return;
    }
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        e.target.reset();
        router.push("/login");
      } else {
        setError("Registration failed.");
        setTimeout(() => setError(""), 3000);
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred.");
    }
  };

  return (
    <div className="sticky container grid h-screen w-full place-items-center sm:w-screen">
      <div className="place-items-center rounded-lg p-5 shadow-md shadow-blue-400">
        <h1 className="text-2xl font-semibold text-gray-800">
          Enter your details
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col items-center justify-center gap-4"
        >
          <input
            className="w-full sm:w-[400px] rounded-xl border-1 border-gray-200 bg-gray-50 px-6 py-2 text-[16px] text-gray-900 placeholder-gray-500"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full sm:w-[400px] rounded-xl border-1 border-gray-200 bg-gray-50 px-6 py-2 text-[16px] text-gray-900 placeholder-gray-500"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full sm:w-[400px] rounded-xl border-1 border-gray-200 bg-gray-50 px-6 py-2 text-[16px] text-gray-900 placeholder-gray-500"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <div className="flex w-full flex-row justify-between">
            <button
              className="h-8 w-1/4 cursor-pointer flex flex-row justify-center items-center rounded-xl bg-emerald-600 px-4 text-sm text-white hover:bg-emerald-500"
              type="submit"
            >
              Register
            </button>
            <Link href="/login">
              <div className="mt-2 flex flex-row gap-1 text-right text-sm text-gray-700">
                Already have an account?{" "}
                <span className="text-blue-400 hover:text-gray-500 hover:underline">
                  Login!
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

export default RegisterForm;

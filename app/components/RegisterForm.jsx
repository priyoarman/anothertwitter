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
    <div className="sticky w-1/2 border-r-1 border-gray-200 grid place-items-center h-screen container mx-auto px-6 py-6">
      <div className="shadow-md place-items-center shadow-blue-400 p-5 rounded-lg">
        <h1 className="text-2xl text-gray-800 font-semibold">
          Enter your details
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-4 justify-center items-center"
        >
          <input
            className="w-[400px] bg-gray-50 rounded-xl text-gray-900 text-[16px] placeholder-gray-500 border-1 border-gray-200 py-2 px-6"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            className="w-[400px] bg-gray-50 rounded-xl text-gray-900 text-[16px] placeholder-gray-500 border-1 border-gray-200 py-2 px-6"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className="w-[400px] bg-gray-50 rounded-xl text-gray-900 text-[16px] placeholder-gray-500 border-1 border-gray-200 py-2 px-6"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <div className="flex flex-row w-full justify-between">
            <button
              className="bg-emerald-600 w-1/4 text-white text-sm rounded-xl px-4 h-8 hover:bg-emerald-500 cursor-pointer"
              type="submit"
            >
              Register
            </button>
            <Link href="/login">
              <div className="flex flex-row gap-1 mt-2 text-gray-700 text-sm text-right">
                Already have an account?{" "}
                <span className="text-blue-400 hover:text-gray-500 hover:underline">
                  Login!
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

export default RegisterForm;

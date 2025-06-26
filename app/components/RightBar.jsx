"use client";

import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RightBarTop from "./RightBarTop";
import RightBarBottom from "./RightBarBottom";

const RightBar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/${input}`);
    setTimeout(() => {
      router.refresh();
    }, 100);
  };
  return (
    <div className="lg:w-1/4 sm:w-1/4 sticky hidden overflow-y-auto sm:flex flex-col items-stretch overflow-x-hidden px-2 py-2 gap-3">
      <form onSubmit={handleSubmit} className="relative w-full h-fit group">
        <input
          id="searchBox"
          className="border border-gray-200 bg-gray-50 text-gray-800 w-full h-full rounded-xl py-2 pl-14 pr-4"
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <label
          htmlFor="searchBox"
          className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-400 peer-focus:text-primary"
        >
          <BsSearch className="w-5 h-5" />
        </label>
      </form>
      <RightBarTop />
      <RightBarBottom />
    </div>
  );
};

export default RightBar;

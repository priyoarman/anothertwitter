"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { PiImageSquareBold } from "react-icons/pi";
import { MdOutlineGifBox } from "react-icons/md";
import { HiMiniListBullet } from "react-icons/hi2";


export default function AddPost() {
  const { data: session, status } = useSession();
  const [body, setBody] = useState("");
  const router = useRouter();

  if (status === "loading") return null;
  if (!session) {
    return (
      <p className="flex justify-center items-center text-center gap-1.5 text-gray-700 font-semibold my-2 mx-2 mb-8 px-4 py-4 h-34">
        Please{" "}
        <a href="/login" className="text-blue-400">
          log in
        </a>{" "}
        to post.
      </p>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!body.trim()) {
      alert("Write something to be seen!");
      return;
    }
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body }),
      });
      if (res.ok) {
        setBody("");
        router.refresh();
      } else {
        throw new Error("Failed to create a post");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-around border-b-1 border-gray-200 z-20"
    >
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="bg-gray-50 outline-0 border-b-1 border-gray-200 h-24 px-4 py-4 resize-none placeholder:font-medium"
        placeholder="What's on your mind?"
      />
      <div className="flex flex-row justify-between items-center bg-gray-50 gap-2">
        <div className="flex flex-row">
          <div className="pl-6 text-2xl text-cyan-500">
          <input type="file" name="" id="imageUpload" hidden />
          <label htmlFor="imageUpload">
            <PiImageSquareBold className="hover:text-gray-500 cursor-pointer" />
          </label>
        </div>
        <div className="pl-6 text-2xl text-cyan-500">
          <input type="file" name="" id="imageUpload" hidden />
          <label htmlFor="imageUpload">
            <MdOutlineGifBox className="hover:text-gray-500 cursor-pointer" />
          </label>
        </div>
        <div className="pl-6 text-2xl text-cyan-500">
          <input type="file" name="" id="imageUpload" hidden />
          <label htmlFor="imageUpload">
            <HiMiniListBullet className="hover:text-gray-500 cursor-pointer" />
          </label>
        </div>
        </div>
        
        <button
          type="submit"
          className="bg-gray-500 text-white text-sm font-bold rounded-3xl px-4 mx-2 my-2 h-10 hover:bg-cyan-500 cursor-pointer"
        >
          Post
        </button>
      </div>
    </form>
  );
}

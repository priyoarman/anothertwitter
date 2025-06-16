"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AddPost() {
  const { data: session, status } = useSession();
  const [body, setBody] = useState("");
  const router = useRouter();

  if (status === "loading") return null;
  if (!session) {
    return (
      <p className="flex justify-center items-center text-center gap-1.5 text-gray-200 my-2 mx-2 mb-8 px-4 py-4 h-34">
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
      className="flex flex-col justify-around my-2 mx-2 mb-6"
    >
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="rounded-2xl bg-cyan-50 outline-blue-400 h-24 px-4 py-4 mb-2 resize-none"
        placeholder="What's on your mind?"
      />
      <div className="flex justify-end gap-2">
        <button
          type="submit"
          className="bg-blue-400 text-white text-sm rounded-xl px-4 h-10 hover:bg-blue-300"
        >
          Post
        </button>
      </div>
    </form>
  );
}

"use client";

import LeftBar from "./LeftBar";
import RightBarTop from "./RightBarTop";
import RightBarBottom from "./RightBarBottom";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EditPostPage = ({ id, body }) => {
  const [newBody, setNewBody] = useState(body);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newBody }),
      });
      if (!res.ok) throw new Error("Failed to update post");
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="sticky flex flex-col container min-w-xl mx-auto px-6 py-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-around my-2 mx-2 mb-6"
        >
          <input
            onChange={(e) => setNewBody(e.target.value)}
            value={newBody}
            className="rounded-2xl bg-cyan-50 outline-blue-400 h-24 px-4 py-4 mb-2 resize-none"
            type="text"
            placeholder="What's on your mind?"
          />
          <div className="flex flex-row justify-end-safe">
            <button className="bg-blue-400 w-1/4 text-white text-sm rounded-xl px-4 h-10 hover:bg-blue-300">
              Update
            </button>
          </div>
        </form>
      </div>
  );
};

export default EditPostPage;

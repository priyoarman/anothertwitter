"use client";

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
      <div className="sticky md:w-2/4 flex flex-col container border-r-1 border-gray-200 py-2 z-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-around border-b-1 border-gray-200 mb-6"
        >
          <input
            onChange={(e) => setNewBody(e.target.value)}
            value={newBody}
            className="bg-gray-50 outline-blue-400 border-b-1 border-gray-200 h-24 px-4 py-4 mb-2 resize-none"
            type="text"
            placeholder="What's on your mind?"
          />
          <div className="flex flex-row justify-end-safe">
            <button className="bg-gray-500 text-white text-sm font-bold rounded-3xl px-4 mx-2 my-2 h-10 hover:bg-blue-400 cursor-pointer">
              Update
            </button>
          </div>
        </form>
      </div>
  );
};

export default EditPostPage;

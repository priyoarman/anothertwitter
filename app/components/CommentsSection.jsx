"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export default function CommentsSection({ postId, initialComments }) {
  const { data: session } = useSession();
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [saving, setSaving] = useState(false);

  const handleAdd = async () => {
    if (!session) {
      alert("Log in to comment.");
      return;
    }
    if (!newComment.trim()) return;

    setSaving(true);
    try {
      const res = await fetch(`/api/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: newComment }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
      console.error("Comment API error:", res.status, err);
      return;
      };
      const data = await res.json();
      setComments((c) => [
        ...c,
        {
          id:        data.latestComment._id,
          userId:    data.latestComment.user,
          email:     data.latestComment.email,
          body:      data.latestComment.body,
          createdAt: data.latestComment.createdAt,
        },
      ]);
      setNewComment("");
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-row gap-2 sm:gap-0 w-full border-slate-300 shadow-md hover:shadow-lg transition-all bg-gray-50 z-20">
      <div className="flex flex-col space-y-4 w-full">
      <h3 className="text-lg font-semibold text-gray-600 px-4 py-2">{comments.length} Comments</h3>
      <div className="space-y-2">
        {comments.map((c) => (
          <div key={c.id} className="flex flex-col p-2 pl-4 text-[16px] border border-gray-100 hover:bg-blue-50 w-full">
            <div className="flex flex-row justify-between">
              <p className="flex font-semibold text-gray-600">{c.email}</p>{" "}
            <span className="text-sm text-neutral-400">
              {new Date(c.createdAt).toLocaleDateString()}
            </span>
            </div>
            
            <p className="flex py-4">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <textarea
          className="bg-gray-50 outline-0 border-b-1 border-gray-200 h-24 w-full px-4 py-4 resize-none placeholder:font-medium"
          rows={3}
          placeholder="Write a comment…"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          disabled={saving}
        />
        <button
          className="bg-gray-500 text-white text-sm font-bold rounded-3xl px-4 mx-2 my-2 h-10 hover:bg-blue-400 cursor-pointer"
          onClick={handleAdd}
          disabled={saving}
        >
          {saving ? "Posting…" : "Comment"}
        </button>
      </div>
    </div>
    </div>
    
  );
}
"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function PostCard({ post }) {
  const { data: session } = useSession();
  const isOwner = session?.user?.id === post.authorId;

  return (
    <div className="flex flex-col border border-slate-300 rounded-xl p-4 m-2 shadow-md hover:shadow-lg transition-all bg-cyan-50">
      <div className="flex flex-row gap-2">
        <h2 className="text-xl font-bold text-neutral-700">
          {post.authorName}
        </h2>
        <h3 className="text-md font-bold text-neutral-500">
          {post.authorEmail}
        </h3>
      </div>
      <p className="text-neutral-500 mt-2">{post.body}</p>

      {isOwner && (
        <div className="flex flex-row w-full justify-around mt-2">
          <Link className="text-blue-400 pt-0.5" href={`/editPost/${post._id}`}>
            <HiOutlinePencilAlt />
          </Link>
          <RemoveBtn id={post._id} />
        </div>
      )}
    </div>
  );
}

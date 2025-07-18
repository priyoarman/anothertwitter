"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiOutlinePencilAlt } from "react-icons/hi";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineComment,
  AiOutlineRetweet,
  AiOutlineEye,
} from "react-icons/ai";

export default function PostCard({ post }) {
  const { data: session } = useSession();
  const isOwner = session?.user?.id === post.authorId;

  const [likesCount, setLikesCount] = useState(post.likesCount || 0);
  const [liked, setLiked] = useState(post.likedByMe);

  const handleLike = async () => {
    if (!session) {
      alert("Please log in to like posts.");
      return;
    }

    setLiked(!liked);
    setLikesCount((c) => c + (liked ? -1 : 1));

    const res = await fetch(`/api/posts/${post._id}/like`, {
      method: "POST",
    });
    if (res.ok) {
      const { liked: newLiked, likesCount: newCount } = await res.json();
      setLiked(newLiked);
      setLikesCount(newCount);
    } else {
      // rollback
      setLiked(liked);
      setLikesCount((c) => c + (liked ? 1 : -1));
    }
  };

  return (
    <div className="z-20 flex w-full flex-row gap-2 border-slate-300 bg-gray-50 shadow-md transition-all hover:bg-blue-50 hover:shadow-lg sm:gap-0">
      <div className="flex w-1/12 flex-col items-start justify-items-start px-4 py-4">
        <div className="flex h-10 w-10 rounded-full bg-neutral-600"></div>
      </div>

      <div className="flex w-11/12 flex-col gap-4 p-4 sm:gap-2">
        <div className="flex h-8 flex-row justify-between p-0">
          <div className="flex w-full flex-row justify-between gap-2 px-1 sm:pl-0">
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <h2 className="cursor-pointer text-[16px] font-bold text-neutral-700 hover:underline sm:text-lg">
                {post.authorName}
              </h2>
              <h3 className="cursor-pointer text-[16px] font-bold text-neutral-500 sm:text-lg">
                {post.authorEmail}
              </h3>
            </div>

            <h4 className="mt-1 text-[12px] text-neutral-400 sm:mt-0.5 sm:text-[16px]">
              {new Date(post.createdAt).toLocaleDateString()}
            </h4>
          </div>

          <div className="flex flex-row items-end justify-end">
            {isOwner && (
              <div className="mt-2 flex w-full flex-row justify-around gap-2">
                <Link
                  className="pt-0.5 text-cyan-500"
                  href={`/editPost/${post._id}`}
                >
                  <HiOutlinePencilAlt />
                </Link>
                <RemoveBtn id={post._id} />
              </div>
            )}
          </div>
        </div>

        <div>
          <p className="my-4 px-1 text-lg text-neutral-600 sm:pl-0">
            {post.body}
          </p>
          <div className="my-4 cursor-pointer text-neutral-600"></div>
        </div>

        <div className="flex flex-row justify-between px-2 pt-2">
          <div
            className={`flex cursor-pointer flex-row justify-center gap-1.5 ${liked ? "text-red-600" : "text-gray-500 hover:text-red-600"}`}
            onClick={handleLike}
          >
            {liked ? (
              <AiFillHeart className="text-lg" />
            ) : (
              <AiOutlineHeart className="text-lg" />
            )}
            <p className="font-semi text-sm">{likesCount}</p>
          </div>

          <Link
            className="flex cursor-pointer flex-row justify-center gap-1.5 text-gray-500 hover:text-blue-500"
            href={`/posts/${post._id}/comments`}
          >
            <AiOutlineComment className="cursor-pointer text-lg font-bold" />
            <p className="font-semi mt-0.5 flex flex-row text-sm">
              {post.commentsCount ?? 0}
            </p>
          </Link>

          <div className="flex cursor-pointer flex-row justify-center gap-1.5 text-gray-500 hover:text-green-500">
            <button className="flex flex-row items-center justify-center justify-items-center">
              <AiOutlineRetweet className="cursor-pointer text-lg font-bold" />
            </button>
            <p className="font-semi mt-0.5 flex flex-row text-sm">0</p>
          </div>

          <div className="flex cursor-pointer flex-row justify-center gap-1.5 text-gray-500 hover:text-yellow-500">
            <button className="flex flex-row items-center justify-center justify-items-center">
              <AiOutlineEye className="cursor-pointer text-lg font-bold" />
            </button>
            <p className="font-semi mt-0.5 flex flex-row text-sm">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

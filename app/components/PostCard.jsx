"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment, AiOutlineRetweet, AiOutlineEye } from "react-icons/ai";

export default function PostCard({ post }) {
  const { data: session } = useSession();
  const isOwner = session?.user?.id === post.authorId;

  const [likesCount, setLikesCount] = useState(
    post.likesCount || 0);
  const [liked, setLiked] = useState(post.likedByMe);

  const handleLike = async () => {
    if (!session) {
      alert("Please log in to like posts.");
      return;
    }

    setLiked(!liked)
    setLikesCount((c) => c + (liked ? -1 : 1))

   const res = await fetch(`/api/posts/${post._id}/like`, {
      method: "POST",
    })
    if (res.ok) {
      const { liked: newLiked, likesCount: newCount } = await res.json()
      setLiked(newLiked)
      setLikesCount(newCount)
    } else {
      // rollback
      setLiked(liked)
      setLikesCount((c) => c + (liked ? 1 : -1))
    }
  }

  return (
    <div className="flex flex-row gap-2 sm:gap-0 w-full border-slate-300 shadow-md hover:shadow-lg transition-all bg-gray-50 hover:bg-blue-50 z-20">
      <div className="flex flex-col justify-items-start items-start w-1/12 px-4 py-4">
        <div className="flex w-10 h-10 bg-neutral-600 rounded-full"></div>
      </div>

      <div className="flex flex-col w-11/12 p-4 gap-4 sm:gap-2">
        {/* POST AUTHOR */}
        <div className="flex flex-row p-0 h-8 justify-between">
          <div className="flex flex-row gap-2 w-full justify-between pr-2">
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <h2 className="text-[16px] sm:text-lg font-bold text-neutral-700 hover:underline cursor-pointer">
                {post.authorName}
              </h2>
              <h3 className="text-[16px] sm:text-lg font-bold text-neutral-500 cursor-pointer">
                {post.authorEmail}
              </h3>
            </div>

            <h4 className="text-[12px] sm:text-[16px] mt-1 sm:mt-0.5 text-neutral-400 cursor-pointer">
              {new Date(post.createdAt).toLocaleDateString()}
            </h4>
          </div>

          <div className="flex flex-row justify-end items-end">
            {isOwner && (
              <div className="flex flex-row w-full justify-around gap-2 mt-2">
                <Link
                  className="text-blue-400 pt-0.5"
                  href={`/editPost/${post._id}`}
                >
                  <HiOutlinePencilAlt />
                </Link>
                <RemoveBtn id={post._id} />
              </div>
            )}
          </div>
        </div>

        {/* POST CONTENT */}
        <div>
          <p className="text-neutral-600 text-lg my-4 cursor-pointer">
            {post.body}
          </p>
          <div className="text-neutral-600 my-4 cursor-pointer"></div>
        </div>

        {/* POST INTERACTIVITY */}
        <div className="flex flex-row justify-between pt-2 px-2">
          <div
            className={`flex flex-row justify-center gap-1.5 cursor-pointer ${liked ? "text-red-600" : "text-gray-500 hover:text-red-600"}`}
            onClick={handleLike}
          >
            {liked ? (
              <AiFillHeart className="text-lg" />
            ) : (
              <AiOutlineHeart className="text-lg" />
            )}
            <p className="text-sm font-semi">{likesCount}</p>

          </div>

          <div className="flex flex-row justify-center text-gray-500 hover:text-green-600 gap-1.5 cursor-pointer">
            <button className="flex flex-row justify-center justify-items-center items-center">
              <AiOutlineComment className="text-lg font-bold cursor-pointer" />
            </button>
            <p className="flex flex-row text-sm font-semi mt-0.5">43</p>
          </div>

          <div className="flex flex-row justify-center text-gray-500 hover:text-blue-500 gap-1.5 cursor-pointer">
            <button className="flex flex-row justify-center justify-items-center items-center">
              <AiOutlineRetweet className="text-lg font-bold cursor-pointer" />
            </button>
            <p className="flex flex-row text-sm font-semi mt-0.5">3</p>
          </div>

          <div className="flex flex-row justify-center text-gray-500 hover:text-yellow-600 gap-1.5 cursor-pointer">
            <button className="flex flex-row justify-center justify-items-center items-center">
              <AiOutlineEye className="text-lg font-bold cursor-pointer" />
            </button>
            <p className="flex flex-row text-sm font-semi mt-0.5">6543</p>
          </div>
        </div>
      </div>
    </div>
  );
}

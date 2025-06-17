"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { HiOutlineEye } from "react-icons/hi";


export default function PostCard({ post }) {
  const { data: session } = useSession();
  const isOwner = session?.user?.id === post.authorId;

  return (
    <div className="flex flex-col w-full border-slate-300 p-4 gap-2 shadow-md hover:shadow-lg transition-all bg-gray-50 hover:bg-blue-50">

      {/* POST AUTHOR */}
      <div className="flex flex-row p-0 h-8 justify-between">
        <div className="flex flex-row gap-2">
          <h2 className="text-lg font-bold text-neutral-700 hover:underline cursor-pointer">
            {post.authorName}
          </h2>
          <h3 className="text-lg font-bold text-neutral-500 cursor-pointer">
            {post.authorEmail}
          </h3>
        </div>

        <div className="flex flex-row justify-end items-end">
          {isOwner && (
        <div className="flex flex-row w-full justify-around gap-2 mt-2">
          <Link className="text-blue-400 pt-0.5" href={`/editPost/${post._id}`}>
            <HiOutlinePencilAlt />
          </Link>
          <RemoveBtn id={post._id} />
        </div>
      )}
        </div>
      </div>

      {/* POST CONTENT */}
      <div>
        <p className="text-neutral-600 my-4 cursor-pointer">{post.body}</p>
      </div>

      {/* POST INTERACTIVITY */}
      <div className="flex flex-row justify-between pt-2 px-10">
        <div className="flex flex-row justify-center text-gray-500 hover:text-red-600 gap-1.5 cursor-pointer">
          <button className="flex flex-row justify-center justify-items-center items-center">
          <FaRegHeart className="text-lg font-bold cursor-pointer" />
        </button>
        <p className="flex flex-row text-sm font-semi mt-0.5">543</p>
        </div>
        
        <div className="flex flex-row justify-center text-gray-500 hover:text-green-600 gap-1.5 cursor-pointer">
          <button className="flex flex-row justify-center justify-items-center items-center">
          <FaRegCommentAlt className="text-lg font-bold cursor-pointer" />
        </button>
        <p className="flex flex-row text-sm font-semi mt-0.5">43</p>
        </div>

        <div className="flex flex-row justify-center text-gray-500 hover:text-blue-500 gap-1.5 cursor-pointer">
          <button className="flex flex-row justify-center justify-items-center items-center">
          <FaRegShareFromSquare className="text-lg font-bold cursor-pointer" />
        </button>
        <p className="flex flex-row text-sm font-semi mt-0.5">3</p>
        </div>

        <div className="flex flex-row justify-center text-gray-500 hover:text-purple-600 gap-1.5 cursor-pointer">
          <button className="flex flex-row justify-center justify-items-center items-center">
          <HiOutlineEye className="text-lg font-bold cursor-pointer" />
        </button>
        <p className="flex flex-row text-sm font-semi mt-0.5">6543</p>
        </div>

      </div>
    </div>
  );
}

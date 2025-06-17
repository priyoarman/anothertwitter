"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { FaLink } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";


const ProfilePage = ({ posts }) => {
  const { data: session } = useSession();

  return (
    <div className="sticky w-1/2 flex flex-col container border-r-1 border-gray-200">
      <div className="w-full">
        <div className="flex flex-row w-full h-42 justify-center items-center bg-gray-500 text-2xl text-white">
          Cover Photo
        </div>
        <div className="flex flex-row justify-between h-36 w-full">
          <div className="flex flex-row justify-center items-center h-32 w-32 ml-6 mt-[-64] bg-blue-400 rounded-full border-4 border-gray-50 text-2xl text-white">
            Photo
          </div>
          <div className="py-2 px-2">
            <button className="rounded-full px-4 py-2 bg-gray-800 text-white font-semibold hover:bg-blue-400 cursor-pointer text-shadow-xs text-sm">
              Follow
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-1 mt-[-72] bg-gray-50">
        <div className="pb-2">
          <div className="text-xl text-gray-800 font-bold">{session?.user?.name}</div>
          <div className="text-[17px] text-gray-700 font-medium">
            {session?.user?.email}
          </div>
        </div>

        <div className="flex felx-row w-fit text-[16px] text-gray-800">
          Here goes my short bio for Another Twitter
        </div>

        <div className="flex felx-row gap-4 w-fit text-[16px]">
          <div className="flex flex-row gap-2">
            <p className="flex flex-row pt-1 text-gray-500"><FaLink/></p>
            <a className="text-blue-400 hover:underline cursor-pointer">instagram.com/gastonedul</a>
          </div>
          <div className="flex flex-row gap-2">
            <p className="flex flex-row pt-1 text-gray-600"><IoCalendarOutline/></p>
            <a className="text-gray-600 cursor-pointer">Joined October 2024</a>
          </div>
        </div>

        <div className="flex felx-row w-fit gap-2 text-[16px] text-gray-800 font-medium">
          <p><span className="font-bold">13</span> Followers</p>
          <p><span className="font-bold">26</span> Following</p>
          
        </div>

        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-semibold py-1 px-5 mt-3 cursor-pointer w-fit rounded-3xl"
        >
          Log Out
        </button>
      </div>

      <h2 className="text-gray-700 text-xl font-bold px-4 py-4 mb-4 border-y-1 border-gray-200">Posts</h2>

      {posts.length ? (
        posts.map((p) => (
          <div
            key={p._id}
            className="flex flex-col w-full border-slate-300 p-4 gap-2 shadow-md hover:shadow-lg transition-all bg-gray-50 hover:bg-blue-50"
          >
            <p>{p.body}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-700 text-lg mx-4 mb-4">
          You haven’t posted anything yet.
        </p>
      )}
    </div>
  );
};

export default ProfilePage;

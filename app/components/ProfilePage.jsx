"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { FaLink } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";

const ProfilePage = ({ posts }) => {
  const { data: session } = useSession();

  return (
    <div className="sticky container flex flex-col border-r-1 border-gray-200 sm:w-2/4">
      <div className="w-full">
        <div className="flex h-42 w-full flex-row items-center justify-center bg-gray-500 text-2xl text-white">
          <img
            src="null"
            alt="UserCoverPhoto"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        <div className="flex h-36 w-full flex-row justify-between">
          <div className="container mt-[-64] ml-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-gray-50 bg-cyan-500 text-2xl text-white">
            <img
              src="null"
              alt="UserProfilePhoto"
              className="flex h-[100%] w-[100%] flex-col items-center rounded-full object-cover"
            />
          </div>
          <div className="px-2 py-2">
            <button className="cursor-pointer rounded-full bg-gray-800 px-4 py-2 text-sm font-semibold text-white text-shadow-xs hover:bg-cyan-500">
              Follow
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[-72] flex flex-col gap-1 bg-gray-50 p-4">
        <div className="pb-2">
          <div className="text-xl font-bold text-gray-800">
            {session?.user?.name}
          </div>
          <div className="text-[17px] font-medium text-gray-700">
            {session?.user?.email}
          </div>
        </div>

        <div className="felx-row flex w-fit text-[16px] text-gray-800">
          Here goes my short bio for Y
        </div>

        <div className="felx-row flex w-fit gap-4 text-[16px]">
          <div className="flex flex-row gap-2">
            <p className="flex flex-row pt-1 text-gray-500">
              <FaLink />
            </p>
            <a
              href="https://github.com/priyoarman"
              className="cursor-pointer text-blue-400 hover:underline"
            >
              github.com/priyoarman
            </a>
          </div>
          <div className="hidden flex-row gap-2 sm:flex">
            <p className="flex flex-row pt-1 text-gray-600">
              <IoCalendarOutline />
            </p>
            <a className="cursor-pointer text-gray-600">Joined October 2024</a>
          </div>
        </div>

        <div className="felx-row flex w-fit gap-2 text-[16px] font-medium text-gray-800">
          <p>
            <span className="font-bold">0</span> Followers
          </p>
          <p>
            <span className="font-bold">0</span> Following
          </p>
        </div>

        <button
          onClick={() => signOut()}
          className="mt-3 w-fit cursor-pointer rounded-3xl bg-red-500 px-5 py-1 font-semibold text-white"
        >
          Log Out
        </button>
      </div>

      <h2 className="mb-4 border-y-1 border-gray-200 px-4 py-4 text-xl font-bold text-gray-700">
        Posts
      </h2>

      {posts.length ? (
        posts.map((p) => (
          <div
            key={p._id}
            className="flex w-full flex-col gap-2 border-slate-300 bg-gray-50 p-4 shadow-md transition-all hover:bg-blue-50 hover:shadow-lg"
          >
            <p>{p.body}</p>
          </div>
        ))
      ) : (
        <p className="mx-4 mb-4 text-lg text-gray-700">
          You haven’t posted anything yet.
        </p>
      )}
    </div>
  );
};

export default ProfilePage;

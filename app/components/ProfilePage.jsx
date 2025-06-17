"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const ProfilePage = ({ posts }) => {
  const { data: session } = useSession();

  return (
    <div className="sticky w-1/2 flex flex-col container border-r-1 border-gray-200 py-2">
      <div className="shadow-md shadow-blue-100 p-5 flex flex-col gap-2 mb-6 bg-gray-50">
        <div className="text-gray-700">
          Name: <span className="font-semibold">{session?.user?.name}</span>
        </div>
        <div className="text-gray-700">
          Email: <span className="font-semibold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-semibold py-1 px-3 mt-3 cursor-pointer"
        >
          Log Out
        </button>
      </div>

      <h2 className="text-gray-700 text-xl font-bold mx-4 mb-4">Your Posts</h2>
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
        <p className="text-gray-700 text-lg mx-4 mb-4">You haven’t posted anything yet.</p>
      )}
    </div>
  );
};

export default ProfilePage;

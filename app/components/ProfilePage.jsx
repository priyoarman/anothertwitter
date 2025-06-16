"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const ProfilePage = ({ posts }) => {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="shadow-md shadow-blue-400 p-5 rounded-lg flex flex-col gap-2 my-6 bg-gray-800">
        <div className="text-white">
          Name: <span className="font-semibold">{session?.user?.name}</span>
        </div>
        <div className="text-white">
          Email: <span className="font-semibold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-semibold py-1 px-3 mt-3 cursor-pointer"
        >
          Log Out
        </button>
      </div>

      <h2 className="text-white text-2xl mb-4">Your Posts</h2>
      {posts.length ? (
        posts.map((p) => (
          <div
            key={p._id}
            className="border border-slate-300 rounded-xl p-4 m-2 bg-cyan-50"
          >
            <p>{p.body}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400">You haven’t posted anything yet.</p>
      )}
    </div>
  );
};

export default ProfilePage;

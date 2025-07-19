import { BsSearch } from "react-icons/bs";
import AddPost from "./AddPost";
import MiniProfile from "./MiniProfile";
import PostsList from "./PostsList";
import Link from "next/link";
import Image from "next/image";

export default function Feed() {
  return (
    <div className="sticky z-10 container flex flex-col border-r-1 border-gray-200 py-2 lg:w-2/4">
      <div className="flex flex-row justify-between items-stretch sm:hidden h-12 border-b-1 border-gray-200">
        <div className="flex px-4 cursor-pointer"><MiniProfile/></div>
        <Link
          href={"/"}
          className="text-blue-40 flex w-fit items-center justify-center space-x-2 rounded-3xl px-4 py-2 text-[28px] font-bold text-blue-400 transition duration-200 hover:bg-gray-200 lg:w-fit lg:px-4"
        >
          <Image
            src="/ReDI.png"
            width={24}
            height={24}
            alt="ReDI"
            className="animate-[spin_5s] [animation-iteration-count:infinite]"
          />
          {/* <p className="hidden lg:block">Twitter</p> */}
        </Link>
        <div className="flex mr-2 px-3 pt-2 w-fit h-10 border-1 border-gray-200 rounded-2xl cursor-pointer"><BsSearch/></div>
      </div>
      <AddPost />
      <PostsList />
    </div>
  );
}

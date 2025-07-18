import Link from "next/link";
import Image from "next/image";
import { BiHomeCircle } from "react-icons/bi";
import { CgHashtag } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const LeftBar = () => {
  return (
    <div className="hidden border-r-1 border-gray-200 bg-gray-50 py-3 sm:sticky sm:top-0 sm:flex sm:h-screen sm:w-14 sm:flex-col sm:items-stretch sm:justify-center lg:w-1/4 lg:px-12">
      <div className="z-0 flex h-full flex-col items-center space-y-3 text-black lg:items-stretch">
        <Link
          href={"/"}
          className="text-blue-40 flex w-full items-center justify-start space-x-2 rounded-3xl px-2 py-2 pl-4 text-[28px] font-bold text-blue-400 transition duration-200 hover:bg-gray-200 lg:w-fit lg:px-4"
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
        <Link
          href={"/"}
          className="text-blue-40 flex w-full items-center justify-start space-x-2 rounded-3xl px-2 py-2 pl-4 text-2xl font-bold text-gray-800 transition duration-200 hover:bg-gray-200 lg:w-fit lg:px-4 lg:text-xl"
        >
          <BiHomeCircle />
          <p className="hidden lg:block">Home</p>
        </Link>
        <Link
          href={"/"}
          className="text-blue-40 flex w-full items-center justify-start space-x-2 rounded-3xl px-2 py-2 pl-4 text-2xl font-bold text-gray-800 transition duration-200 hover:bg-gray-200 lg:w-fit lg:px-4 lg:text-xl"
        >
          <CgHashtag />
          <p className="hidden lg:block">Explore</p>
        </Link>{" "}
        <Link
          href={"/"}
          className="text-blue-40 flex w-full items-center justify-start space-x-2 rounded-3xl px-2 py-2 pl-4 text-2xl font-bold text-gray-800 transition duration-200 hover:bg-gray-200 lg:w-fit lg:px-4 lg:text-xl"
        >
          <IoMdNotificationsOutline />

          <p className="hidden lg:block">Notifications</p>
        </Link>
        <Link
          href={"/"}
          className="text-blue-40 flex w-full items-center justify-start space-x-2 rounded-3xl px-2 py-2 pl-4 text-2xl font-bold text-gray-800 transition duration-200 hover:bg-gray-200 lg:w-fit lg:px-4 lg:text-xl"
        >
          <HiOutlineEnvelope />

          <p className="hidden lg:block">Messages</p>
        </Link>
        <Link
          href={"/profile"}
          className="text-blue-40 flex w-full items-center justify-start space-x-2 rounded-3xl px-2 py-2 pl-4 text-2xl font-bold text-gray-800 transition duration-200 hover:bg-gray-200 lg:w-fit lg:px-4 lg:text-xl"
        >
          <IoPersonOutline />

          <p className="hidden lg:block">Profile</p>
        </Link>
      </div>

      <div className="hidden w-full cursor-pointer flex-row justify-between gap-2 rounded-full px-2 py-2 hover:bg-gray-200 lg:flex">
        <div className="flex flex-row gap-2">
          <div className="flex h-10 w-10 flex-row rounded-full bg-neutral-600"></div>

          <div className="flex-col">
            <div className="text-[16px] font-bold text-gray-800">My Name</div>
            <div className="text-[14px] font-medium text-gray-600">
              @myusername
            </div>
          </div>
        </div>

        <div className="flex w-fit flex-col items-center justify-center">
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

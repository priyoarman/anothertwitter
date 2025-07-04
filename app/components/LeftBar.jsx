import Link from "next/link";
import { FaYahoo } from "react-icons/fa6";

import { BiHomeCircle } from "react-icons/bi";
import { CgHashtag } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";


const LeftBar = () => {
  return (
    <div className="sticky top-0 lg:flex flex-col w-14 lg:w-1/4 items-stretch h-screen bg-gray-50 border-r-1 border-gray-200 justify-center py-3 lg:px-12">
      <div className="flex flex-col text-black items-center lg:items-stretch h-full space-y-2 z-0">
        <Link
          href={"/"}
          className="hover:bg-gray-200 text-[28px] text-blue-400 text-blue-40 font-bold transition duration-200 flex items-center justify-start w-full lg:w-fit space-x-2 rounded-3xl py-2 lg:px-4 px-2 pl-4"
        >
          <FaYahoo />
          {/* <p className="hidden lg:block">Twitter</p> */}
        </Link>
        <Link
          href={"/"}
          className="hover:bg-gray-200 text-2xl lg:text-xl text-gray-800 text-blue-40 font-bold transition duration-200 flex items-center justify-start w-full lg:w-fit space-x-2 rounded-3xl py-2 lg:px-4 px-2 pl-4"
        >
          <BiHomeCircle />
          <p className="hidden lg:block">Home</p>
        </Link>
        <Link
          href={"/"}
          className="hover:bg-gray-200 text-2xl lg:text-xl text-gray-800 text-blue-40 font-bold transition duration-200 flex items-center justify-start w-full lg:w-fit space-x-2 rounded-3xl py-2 lg:px-4 px-2 pl-4"
        >
          <CgHashtag />
          <p className="hidden lg:block">Explore</p>
        </Link>{" "}
        <Link
          href={"/"}
          className="hover:bg-gray-200 text-2xl lg:text-xl text-gray-800 text-blue-40 font-bold transition duration-200 flex items-center justify-start w-full lg:w-fit space-x-2 rounded-3xl py-2 lg:px-4 px-2 pl-4"
        >
          <IoMdNotificationsOutline />

          <p className="hidden lg:block">Notifications</p>
        </Link>
        <Link
          href={"/"}
          className="hover:bg-gray-200 text-2xl lg:text-xl text-gray-800 text-blue-40 font-bold transition duration-200 flex items-center justify-start w-full lg:w-fit space-x-2 rounded-3xl py-2 lg:px-4 px-2 pl-4"
        >
          <HiOutlineEnvelope />

          <p className="hidden lg:block">Messages</p>
        </Link>
        <Link
          href={"/profile"}
          className="hover:bg-gray-200 text-2xl lg:text-xl text-gray-800 text-blue-40 font-bold transition duration-200 flex items-center justify-start w-full lg:w-fit space-x-2 rounded-3xl py-2 lg:px-4 px-2 pl-4"
        >
          <IoPersonOutline />

          <p className="hidden lg:block">Profile</p>
        </Link>
      </div>

      <div className="hidden lg:flex flex-row gap-2 w-full justify-between hover:bg-gray-200 cursor-pointer rounded-full py-2 px-2">
        <div className="flex flex-row gap-2">
          <div className="flex flex-row w-10 h-10 bg-neutral-600 rounded-full"></div>

          <div className="flex-col">
            <div className="text-[16px] text-gray-800 font-bold">
            My Name
          </div>
          <div className="text-[14px] text-gray-600 font-medium">
            @myusername
          </div>
          </div>
          
        </div>

        <div className="flex flex-col w-fit justify-center items-center"><BsThreeDots/></div>
      </div>
    </div>
  );
};

export default LeftBar;

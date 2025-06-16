import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { CgHashtag } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";

const LeftBar = () => {
  return (
    <div className="sticky top-0 xl:flex flex-col items-stretch h-screen bg-blue-400 justify-center pt-6 sm:px-12">
      <div className="flex flex-col text-white items-stretch h-full space-y-4">
        <Link
          href={"/"}
          className="hover:bg-white/10 text-2xl text-amber-100 text-shadow-gray-700 text-shadow-xs font-semibold transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-2xl py-2 sm:px-4 px-2 pl-4"
        >
          <BsTwitter />
          {/* <p className="hidden sm:block">Twitter</p> */}
        </Link>

        <Link
          href={"/"}
          className="hover:bg-white/10 text-2xl sm:text-lg md:text-xl text-amber-100 text-shadow-gray-700 text-shadow-xs font-semibold transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-2xl py-2 sm:px-4 px-2 pl-4"
        >
          <BiHomeCircle />
          <p className="hidden sm:block">Home</p>
        </Link>

        {/* <Link
          href={"/explore"}
          className="hover:bg-white/10 text-2xl sm:text-lg md:text-xl text-amber-100 text-shadow-gray-700 text-shadow-xs font-semibold transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-2xl py-2 sm:px-4 px-2 pl-4"
        >
          <CgHashtag />
          <p className="hidden sm:block">Explore</p>
        </Link> */}

        {/* <Link
          href={"/notifications"}
          className="hover:bg-white/10 text-2xl sm:text-lg md:text-xl text-amber-100 text-shadow-gray-700 text-shadow-xs font-semibold transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-2xl py-2 sm:px-4 px-2 pl-4"
        >
          <IoMdNotificationsOutline />

          <p className="hidden sm:block">Notifications</p>
        </Link> */}

        {/* <Link
          href={"/messages"}
          className="hover:bg-white/10 text-2xl sm:text-lg md:text-xl text-amber-100 text-shadow-gray-700 text-shadow-xs font-semibold transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-2xl py-2 sm:px-4 px-2 pl-4"
        >
          <HiOutlineEnvelope />

          <p className="hidden sm:block">Messages</p>
        </Link> */}

        <Link
          href={"/profile"}
          className="hover:bg-white/10 text-2xl sm:text-lg md:text-xl text-amber-100 text-shadow-gray-700 text-shadow-xs font-semibold transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-2xl py-2 sm:px-4 px-2 pl-4"
        >
          <IoPersonOutline />

          <p className="hidden sm:block">Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default LeftBar;

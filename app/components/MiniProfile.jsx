import { BsThreeDots } from "react-icons/bs";

const MiniProfile = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-row gap-2">
        <div className="flex h-10 w-10 flex-row rounded-full bg-neutral-600"></div>

        <div className="flex-col">
          <div className="hidden sm:flex text-[16px] font-bold text-gray-800">My Name</div>
          <div className="hidden sm:flex text-[14px] font-medium text-gray-600">
            @myusername
          </div>
        </div>
      </div>

      <div className="hidden sm:flex w-fit flex-col items-center justify-center">
        <BsThreeDots />
      </div>
    </div>
  );
};

export default MiniProfile;

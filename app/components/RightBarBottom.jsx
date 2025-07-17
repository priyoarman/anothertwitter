const RightBarBottom = () => {
  return (
    <div className="flex flex-col text-gray-800 bg-gray-50 border border-gray-200 space-y-3 rounded-xl pt-2">
      <h3 className="font-bold text-xl px-4 pt-2">Who to follow</h3>
      <div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="hover:bg-white/10 p-4 flex justify-between items-center last:rounded-b-xl transition duration-200"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
              <div className="flex flex-col">
                <div className="text-sm font-bold">User{i + 1}</div>
                <div className="text-xs font-medium text-gray-500">
                  @User{i + 3010}
                </div>
              </div>
            </div>

            <button
              className="rounded-full px-4 py-2 bg-gray-500 text-white font-semibold hover:bg-cyan-500 cursor-pointer text-shadow-xs text-sm"
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBarBottom;

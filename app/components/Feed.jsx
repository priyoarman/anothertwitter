import AddPost from "./AddPost";
import PostsList from "./PostsList";

export default function Feed() {
  return (
    <div className="sticky lg:w-2/4 flex flex-col container border-r-1 border-gray-200 py-2 z-10">
      <AddPost/>
      <PostsList />
    </div>
  );
}

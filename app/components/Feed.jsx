import AddPost from "./AddPost";
import PostsList from "./PostsList";

export default function Feed() {
  return (
    <div className="sticky z-10 container flex flex-col border-r-1 border-gray-200 py-2 lg:w-2/4">
      <AddPost />
      <PostsList />
    </div>
  );
}

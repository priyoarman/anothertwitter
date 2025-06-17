import AddPost from "./AddPost";
import PostsList from "./PostsList";

export default function Feed() {
  return (
    <div className="sticky w-1/2 flex flex-col container border-r-1 border-gray-200 py-2">
      <AddPost/>
      <PostsList />
    </div>
  );
}

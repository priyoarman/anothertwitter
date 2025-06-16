import AddPost from "./AddPost";
import PostsList from "./PostsList";

export default function Feed() {
  return (
    <div className="sticky flex flex-col container min-w-xl mx-auto px-6 py-4">
      <AddPost/>
      <PostsList />
    </div>
  );
}

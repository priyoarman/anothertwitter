import connectMongoDB from "@/lib/mongodb";
import Post from "@/models/posts";
import PostCard from "./PostCard";

export default async function PostsList() {
  await connectMongoDB();
  const rawPosts = await Post.find().sort({ createdAt: -1 }).lean();

  const posts = rawPosts.map((doc) => ({
    _id: doc._id.toString(),
    body: doc.body,
    authorId: doc.authorId,
    authorName: doc.authorName,
    authorEmail: doc.authorEmail,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  }));

  return (
    <div className="z-20 pt-6 bg-gray-50">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

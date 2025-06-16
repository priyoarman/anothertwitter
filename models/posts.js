import mongoose, { Schema } from "mongoose";

const postsSchema = new Schema(
  {
    body: { type: String, required: true },
    authorId: { type: String, required: true },
    authorName: String,
    authorEmail: String,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model("Post", postsSchema);

export default Post;

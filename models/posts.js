import mongoose, { Schema } from "mongoose";
import User from "./user"

const postsSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    authorId: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    authorEmail: {
      type: String,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
    toJSON:   { virtuals: true },
    toObject: { virtuals: true },
  }
);

postsSchema.virtual("likesCount").get(function () {
  return this.likes.length;
});

const Post = mongoose.models.Post || mongoose.model("Post", postsSchema);

export default Post;

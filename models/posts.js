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
    // author: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
    // username: {
    //   type: String,
    //   required: true,
    // },
    // profileImg: {
    //   type: String,
    //   required: true,
    // },
    
    // likes: {
    //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    //   default: [],
    // },
    // comments: {
    //   type: [
    //     {
    //       comment: String,
    //       user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    //       name: String,
    //       username: String,
    //       profileImg: String,
    //       createdAt: { type: Date, default: Date.now },
    //     },
    //   ],
    //   default: [],
    // },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model("Post", postsSchema);

export default Post;

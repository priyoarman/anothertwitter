import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: { 
      type: String 
    },
    coverImage: {
       type: String 
    },
    bio: {
       type: String 
    },
    location: {
       type: String 
    },
    website: {
       type: String 
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const User = models.User || mongoose.model("User", userSchema);

export default User;

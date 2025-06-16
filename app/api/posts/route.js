import connectMongoDB from "@/lib/mongodb";
import Post from "@/models/posts";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
  await connectMongoDB();
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "You must be signed in to create a post." },
      { status: 401 }
    );
  }
  const { body } = await request.json();
  const post = await Post.create({
    body,
    authorId: session.user.id,
    authorName: session.user.name,
    authorEmail: session.user.email,
  });
  return NextResponse.json(post, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const posts = await Post.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ posts });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Post.findByIdAndDelete(id);
  return NextResponse.json({ message: "Post Deleted" }, { status: 200 });
}

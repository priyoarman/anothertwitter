import connectMongoDB from "@/lib/mongodb";
import Post from "@/models/posts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectMongoDB();

    const url = new URL(request.url);
    const postId = url.pathname.split("/").at(-2);
    console.log("Post ID:", postId)
}
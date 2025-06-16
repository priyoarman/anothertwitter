import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashed = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashed });
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error registering user." },
      { status: 500 }
    );
  }
}

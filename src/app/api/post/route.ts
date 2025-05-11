import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  const allBBSPosts = await prisma.post.findMany();
  return NextResponse.json(allBBSPosts);
};

// export async function POST(request: Request) {
//   const { userName, title, content } = await request.json();
//   const newBBSPost = await prisma.post.create({
//     data: {
//       userName,
//       title,
//       content,
//     },
//   });
//   return NextResponse.json(newBBSPost);
// }
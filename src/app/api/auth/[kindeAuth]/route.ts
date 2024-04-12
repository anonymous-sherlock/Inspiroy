import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const endpoint = params.kindeAuth;
  const handler = await handleAuth(request, endpoint);

  // Call the handler function and return its result
  const result = await handler(request, { params });

  // If the result is a NextResponse object, return it
  if (result instanceof NextResponse) {
    return result;
  }

  // Otherwise, create a new NextResponse object
  return new NextResponse("OK");
}

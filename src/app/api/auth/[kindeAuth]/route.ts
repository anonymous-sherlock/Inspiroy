import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const endpoint = params.kindeAuth;
  const result = handleAuth(request, endpoint);

  // Assuming `handleAuth` returns a valid response
  return result;
}

import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const endpoint = params.kindeAuth;
  return Promise.resolve(handleAuth(request, endpoint));
}

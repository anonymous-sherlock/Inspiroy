import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function GET({ params }: any) {
  const endpoint = params.kindeAuth;
  return handleAuth(endpoint);
}

import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";


interface GETParams {
  params: {
    [key: string]: string;
  };
}

export async function GET(request: any, { params }: GETParams): Promise<any> {
  const endpoint = params?.kindeAuth;
  return handleAuth(request, endpoint);
}

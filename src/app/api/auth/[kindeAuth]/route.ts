import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

// Exporting the handler function for GET requests
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { kindeAuth } = request.query;

  // Assuming `kindeAuth` is the endpoint parameter
  if (request.method === "GET") {
    // Handle GET request
    const result = handleAuth(request, kindeAuth as string); // Cast kindeAuth to string
    response.status(200).json(result);
  } else {
    // Handle other HTTP methods if necessary
    response.setHeader("Allow", ["GET"]);
    response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}

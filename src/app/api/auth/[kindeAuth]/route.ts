import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { GetServerSideProps } from "next";
import { NextRequest } from "next/server";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const endpoint = context.params?.kindeAuth as string; // Ensure endpoint is of type string
  const response = handleAuth(context.req, endpoint);
  return { props: { responseData: response } };
};

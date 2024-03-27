"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { Cookie, parse } from "set-cookie-parser";

interface TokenProps {
  name: string;
  value: string;
  maxAge: number;
  path: string;
  expires: Date;
  httpOnly: boolean;
  sameSite: string;
}

export async function authenticate(_currentState: unknown, formData: FormData) {
  const cookieStore = cookies();

  try {
    const response = await axios.post("http://localhost:4000/api/login", {
      email: "insu",
      password: "1234",
    });

    const [token] = parse(
      response.headers["set-cookie"] as string[]
    ) as TokenProps & Cookie[];

    cookieStore.set(token.name, token.value, {
      maxAge: token.maxAge,
      expires: token.expires,
      httpOnly: token.httpOnly,
    });

    console.log("token", token);
  } catch (error) {
    if (error) {
      switch (error) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

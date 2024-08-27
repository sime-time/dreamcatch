import { redirect } from "@solidjs/router";
import type { APIEvent } from "@solidjs/start/server";
import { authorizePB } from "~/database/pocketbase";

export async function POST(event: APIEvent, request: Request) {
  const pb = await authorizePB();

  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Email and password are required, go back and try again", { status: 400 });
  }

  const data = {
    "username": email,
    "email": email,
    "emailVisibility": true,
    "password": password,
    "passwordConfirm": password,
    "name": email
  };

  try {
    await pb.collection("users").create(data);
    console.log("User registered successfully!");
  } catch (err) {
    console.error("Error registering user: ", err);
    throw err;
  }

  return redirect("/signin");
}
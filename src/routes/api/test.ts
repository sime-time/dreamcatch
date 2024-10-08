import { APIEvent } from "@solidjs/start/server";
import { authorizePB } from "~/database/pocketbase";

export async function GET(event: APIEvent) {
  const pb = await authorizePB();

  try {
    const records = await pb.collection("test").getFullList();
    console.log(records);
  } catch (err) {
    console.error("Testing error: ", err);
  }

}
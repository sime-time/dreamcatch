import { APIEvent } from "@solidjs/start/server";

export async function GET(event: APIEvent) {
  const pb = event.locals.pb;
  try {
    const records = await pb.collection("test").getFullList();
    console.log(records);
  } catch (err) {
    console.error("Testing error: ", err);
  }

}
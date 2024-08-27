import PocketBase from "pocketbase";
import { env } from "~/util/env-helper";

const pb = new PocketBase(env().POCKETBASE_URL);

export const authorizePB = async () => {
  if (!pb.authStore.isValid) {
    await pb.admins.authWithPassword(
      env().POCKETBASE_EMAIL as string,
      env().POCKETBASE_PASSWORD as string
    );
  }
  return pb;
}

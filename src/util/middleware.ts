import { createMiddleware } from "@solidjs/start/middleware";
import { authorizePB } from "~/database/pocketbase";

export default createMiddleware({
  onRequest: async (event) => {
    event.locals.pb = await authorizePB();
  },
});

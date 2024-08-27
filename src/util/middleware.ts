/*
import { createMiddleware } from "@solidjs/start/middleware";
import { authorizePB } from "~/database/pocketbase";

export default createMiddleware({
  onRequest: async (event) => {
    const ev = event.nativeEvent;
    event.locals.pb = await authorizePB();
  },
});
*/
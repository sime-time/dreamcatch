import { getRequestEvent } from "solid-js/web";

export const env = () => {
  const event = getRequestEvent();
  // fallback to process.env for local development 
  const env = event?.nativeEvent.context.cloudflare.env ?? process.env;
  return env;
}
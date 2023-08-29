import { createClient } from "tinacms/dist/client";
import { queries } from "./types";

let UrlLinkRes: any;

if (process.env.ENVIRONMENT === "development") {
  UrlLinkRes = "http://localhost:4001/graphql";
} else if (process.env.VERCEL_ENV === "preview") {
  UrlLinkRes = process.env.VERCEL_URL + "/graphql";
} else if (process.env.VERCEL_ENV === "production") {
  UrlLinkRes = process.env.API_URL_PROD;
}

export const client = createClient({
  url: UrlLinkRes,
  token: process.env.NEXT_PUBLIC_TINA_TOKEN,
  queries,
});
export default client;

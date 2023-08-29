import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'b3a71261e37bd4ac8b958bad4adba726bf0e1728', queries });
export default client;
  
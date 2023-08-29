import { defineConfig } from "tinacms";

const TINA_ID = process.env.TINA_ID;
const TINA_TOKEN = process.env.TINA_TOKEN;
const branch =
  process.env.VERCEL_BRANCH_URL ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.VERCEL_URL ||
  "main";

export default defineConfig({
  branch,
  clientId: TINA_ID, // Get this from tina.io
  token: TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "menu",
        label: "Menu Items",
        path: "content/menu",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
          },
          {
            type: "string",
            name: "price",
            label: "Price",
          },
        ],
      },
    ],
  },
});
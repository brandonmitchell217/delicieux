// tina/config.ts
import { defineConfig } from "tinacms";
var TINA_ID = process.env.TINA_ID;
var TINA_TOKEN = process.env.TINA_TOKEN;
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: TINA_ID,
  // Get this from tina.io
  token: TINA_TOKEN,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
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
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body"
          },
          {
            type: "string",
            name: "price",
            label: "Price"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};

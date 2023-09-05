// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_ID,
  // Get this from tina.io
  token: process.env.NEXT_PUBLIC_TINA_TOKEN,
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
            label: "Menu Item",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Item Description"
          },
          {
            type: "string",
            name: "price",
            label: "Price"
          },
          {
            type: "string",
            name: "type",
            label: "Type"
          },
          {
            type: "string",
            name: "menu",
            label: "Menu Type",
            options: ["dinner", "brunch"]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};

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
        ui: {
          router: (props) => {
            return "/menu";
          }
        },
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
            options: ["dinner", "brunch", "four course"]
          }
        ]
      },
      {
        name: "props",
        label: "Props",
        path: "content/props",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Prop Body"
          },
          {
            type: "string",
            name: "link_text",
            label: "Link Text"
          },
          {
            type: "string",
            name: "link_url",
            label: "Link Url"
          },
          {
            type: "string",
            name: "image",
            label: "Image"
          },
          {
            type: "string",
            name: "image_secondary",
            label: "Secondary Image"
          },
          {
            type: "string",
            name: "image_third",
            label: "Third Image"
          },
          {
            type: "string",
            name: "image_fourth",
            label: "Fourth Image"
          },
          {
            type: "string",
            name: "image_alt",
            label: "Image Alt Text"
          },
          {
            type: "boolean",
            name: "image_bg",
            label: "Image Background"
          }
        ]
      },
      {
        name: "staff",
        label: "Staff",
        path: "content/staff",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true
          },
          {
            type: "string",
            name: "icon",
            label: "Icon"
          },
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Prop Body",
            required: true
          },
          {
            type: "string",
            name: "image",
            label: "Image"
          },
          {
            type: "number",
            name: "order",
            label: "Order Number",
            required: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};

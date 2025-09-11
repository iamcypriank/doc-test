// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main",
  // default branch
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Tina cloud client ID
  token: process.env.TINA_TOKEN,
  // Tina cloud token
  build: {
    outputFolder: "admin",
    // where Tina’s admin UI will be built
    publicFolder: "public"
    // static assets folder
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
        label: "Docs",
        name: "docs",
        path: "content/docs",
        // 👈 matches your Fumadocs collection
        format: "mdx",
        // use "md" if you’re not using MDX
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            label: "Description",
            name: "description"
          },
          {
            type: "rich-text",
            label: "Body",
            name: "body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};

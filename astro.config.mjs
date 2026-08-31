// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://strananekm.com",
  output: "static",
  adapter: vercel(),
  trailingSlash: "never",
  build: { format: "directory" },
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
});

// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://strananekm.com",
  output: "static",
  adapter: vercel(),
  trailingSlash: "never",
  build: { format: "directory" },
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  integrations: [
    sitemap({
      // Slovenčina je na koreňových cestách, angličtina pod /en — vďaka tomu
      // sitemap ku každej stránke doplní hreflang odkaz na jej druhú jazykovú
      // verziu, takže Google obe verzie spáruje a nepovažuje ich za duplicitu.
      i18n: {
        defaultLocale: "sk",
        locales: { sk: "sk-SK", en: "en-US" },
      },
      changefreq: "monthly",
      lastmod: new Date(),
    }),
  ],
});

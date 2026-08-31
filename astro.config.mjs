// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Apex strananekm.com robí na Verceli 308 na www, takže kanonický host je www.
  // Z tejto hodnoty sa odvodzuje canonical, og:url, hreflang aj sitemap — keby
  // ukazovali na apex, Google by pri každom načítaní narazil na presmerovanie.
  site: "https://www.strananekm.com",
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

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  adapter: vercel({ analytics: true }),
  // vite: {
  //   define: {
  //     "import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID": JSON.stringify(
  //       process.env.VERCEL_ANALYTICS_ID
  //     ),
  //   },
  // },
});

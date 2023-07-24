import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import vercel from '@astrojs/vercel/static';


// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  output: 'static',
  adapter: vercel({
    analytics: true,
  }),
});

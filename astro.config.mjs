import icon from "astro-icon";
import { defineConfig } from "astro/config";

import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  build: {
    assets: "astro",
  },
  integrations: [icon()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "static",
  outDir: "./dist",
  // Github pages config
  site: "https://ikranjec99.github.io",
});

import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://mcb10.github.io'
  // base: '/my-repo',
  ,

  integrations: [preact(), tailwind()]
});
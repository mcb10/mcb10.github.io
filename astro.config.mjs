import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://mcb10.github.io'
  // base: '/my-repo',
  ,
  integrations: [preact()]
});
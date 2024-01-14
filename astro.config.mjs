import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import partytown from '@astrojs/partytown';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://mcb10.github.io',
  integrations: [
    preact(), 
    tailwind(),
    partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
  ]
});
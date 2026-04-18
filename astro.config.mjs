// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://wowazun.net",

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        "wowazun.net",
        "localhost",
        "legendary-doing-easter-hardcover.trycloudflare.com",
      ],
    },
  },
});

import { fileURLToPath } from "url";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config

const { PROD } = process.env;

export default defineNuxtConfig({
  ssr: false,
  modules: ["@element-plus/nuxt", "@pinia/nuxt"],
  serverMiddleware: [
    (req, res, next) => {
      // Check if token exists
      const token = req.headers["_token"];
      console.log(123123, req, res);
      if (!token && !req.originalUrl.includes('/login')) {
        // If no token, redirect to login page
        res.writeHead(302, { Location: "/login" });
        res.end();
      } else {
        next();
      }
    },
  ],
  sourcemap: {
    server: !PROD,
    client: !PROD,
  },
  devtools: { enabled: !PROD },
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
    "~": fileURLToPath(new URL("./", import.meta.url)),
  },
  elementPlus: {
    /** Options */
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    keepalive: false,
    head: {
      title: "Serene syllables - 管理后台",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "keyword",
          content: "blog manager",
        },
        {
          name: "description",
          content: "管理后台",
        },
        {
          charset: "utf-8",
        },
      ],
    },
  },
  tailwindcss: {
    viewer: false,
  },
});

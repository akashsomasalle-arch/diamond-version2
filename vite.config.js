import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import javascriptObfuscator from "vite-plugin-javascript-obfuscator";
import path from "path";

export default defineConfig({
  root: "src-reference-2-ssr",

  // Explicitly point to the absolute path of your assets folder
  publicDir: "../assets",

  server: {
    host: true,
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env),
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: false,
    plugins: [
      glsl({
        compress: true, // This minifies your GLSL code
        watch: true,
      }),
      javascriptObfuscator({
        exclude: [/node_modules/],
        apply: "build", // Only run on production build
        debugger: true,
        options: {
          stringArray: true,
          stringArrayEncoding: ["base64"],
          deadCodeInjection: true,
        },
      }),
    ],
  },
});

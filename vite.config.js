import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "main.js", // sets the entry point for the bundle as main.js.
      formats: ["es"], // instructs Vite to output the bundle in ES module format.
    },
  },
});
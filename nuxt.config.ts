import ReactivityTransform from "@vue-macros/reactivity-transform/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vue-macros/nuxt"],
  vite: {
    plugins: [ReactivityTransform()],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["@vue-macros/reactivity-transform/macros-global"],
      },
    },
  },
  devtools: { enabled: true },
});

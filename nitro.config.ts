export default defineNitroConfig({
  runtimeConfig: {
    BOT_KEY: process.env.BOT_API_KEY,
    AI_KEY: process.env.AI_KEY,
  },
  preset: 'digital-ocean'
});
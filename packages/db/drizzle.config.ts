import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dbCredentials: {
    authToken: process.env.LIBSQL_AUTH_TOKEN,
    url: process.env.LIBSQL_URL ?? "http://127.0.0.1:8080",
  },
  dialect: "turso",
  out: "./migrations",
  schema: "./src/schema.ts",
});

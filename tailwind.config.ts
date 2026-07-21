import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#050505", charcoal: "#111113", gold: "#d6aa32", champagne: "#f7e7bd" }, boxShadow: { gold: "0 20px 60px rgba(214,170,50,.16)" } } }, plugins: [] };
export default config;

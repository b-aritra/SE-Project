import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

/**@type{import('tailwindcss').Config} */
export default defineConfig({
  plugins: [
    tailwindcss({
      content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }),
  ],
});
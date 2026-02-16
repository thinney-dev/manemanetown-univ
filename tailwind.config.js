/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          navy: {
            // ▼▼▼ ここを変更しました（青系から黒系へ） ▼▼▼
            900: '#000000', // 背景を完全な黒に
            800: '#111111', // カード背景などを「ほぼ黒に近いグレー」に
            // ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
          },
          gold: {
            400: '#d4af37', // ゴールドはそのまま
          },
          silver: '#e2e8f0', // 文字色もそのまま
        },
        fontFamily: {
          serif: ['"Noto Serif JP"', 'serif'],
          sans: ['"Noto Sans JP"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
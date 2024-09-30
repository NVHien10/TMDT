/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Tạo thêm một breakpoint cho màn hình rất nhỏ
        "custom-md": "700px", // Breakpoint tùy chỉnh cho màn hình 850px
        "custom-lg": "1100px", // Breakpoint tùy chỉnh cho màn hình 1100px
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

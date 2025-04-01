/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        smm: "478px", // Tạo thêm một breakpoint cho màn hình 478px
        mdd: "991px", // Breakpoint tùy chỉnh cho màn hình 991px
        lgg: "1440px", // Breakpoint tùy chỉnh cho màn hình 1440px
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [nextui()],
};

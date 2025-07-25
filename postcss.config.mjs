import postcss from "postcss";

const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

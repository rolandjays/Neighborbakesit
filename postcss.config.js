module.exports = ({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [
      require("tailwindcss"),
      require("postcss-preset-env")({
        stage: 1,
      }),
      require("autoprefixer"),
      ...(isProduction
        ? [
            require("cssnano")({
              preset: "default",
            }),
          ]
        : []),
    ],
  };
};

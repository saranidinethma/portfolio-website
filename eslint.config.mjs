// eslint.config.mjs
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import nextPlugin from "eslint-config-next";

// Workaround for @rushstack/eslint-patch
require("@rushstack/eslint-patch/modern-module-resolution");

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.recommended,
  {
    ...nextPlugin,
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        browser: true,
        node: true,
      },
    },
    rules: {
      // Add custom rules if needed
    },
  },
];
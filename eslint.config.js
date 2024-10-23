import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginImport from "eslint-plugin-import";

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    import: eslintPluginImport,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "*",
            group: "external",
            position: "before",
          },
          {
            pattern: "@app/components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/api/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/assets/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/constants/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/contexts/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/store/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/hooks/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/pages/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/layouts/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/providers/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/theme/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/templates/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/types/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/utils/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/styles/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
});

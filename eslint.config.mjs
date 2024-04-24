import globals from "globals";
import pluginJs from "@eslint/js";
// I did this part second 

export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];
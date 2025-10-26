// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import {defineConfig, globalIgnores} from 'eslint/config'
import importPlugin from "eslint-plugin-import";

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            import: importPlugin,
        },
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        settings: {
            "import/resolver": {
                typescript: {
                    project: "./tsconfig.json",
                },
                alias: {
                    map: [["@", "./src"]],
                    extensions: [".ts", ".tsx", ".js", ".jsx"],
                },
            },
        },
        rules: {
            "import/no-extraneous-dependencies": "off",
        },
    },
])

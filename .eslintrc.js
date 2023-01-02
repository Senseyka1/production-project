module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		"import/resolver": {
			typescript: {},
		},
	},
	plugins: ["react", "@typescript-eslint", "prettier", "react-hooks"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"react/react-in-jsx-scope": "off",
		"import/no-unresolved": "off",

		"no-unused-vars": ["off", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/no-unused-vars": ["off", { argsIgnorePattern: "^_" }],

		"react/no-array-index-key": "warn",

		"react/no-children-prop": "error",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "error",
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
	},
};

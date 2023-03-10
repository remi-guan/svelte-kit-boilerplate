module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: 'typescript-airbnb-prettier-svelte',
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3'
		}
	],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	rules: {
		'import/prefer-default-export': 'off',
		'import/extensions': 'off',
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};

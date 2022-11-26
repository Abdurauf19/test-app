module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	content: [],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {},
		screens: {
			sm: '640px',
			lg: '1024px',
			xl: '1280px',
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
	],
};

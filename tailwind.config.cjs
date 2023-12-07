/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			display: ['FatFrank', 'sans-serif'],
			sans: ['interpol-sans', 'sans-serif']
		},
		extend: {
			screens: {
				'cursor': {'raw': '(hover: hover)'}, //https://github.com/tailwindlabs/tailwindcss/discussions/1739#discussioncomment-56282
			},
			colors: {
				background: '#fcf1ed',
				primary: '#F2C14E',
				secondary: '#6969B3',
				tertiary: '#4F8D71',
				accent: '#F78154',
				text: '#181F1C',
			}
		},
	},
	plugins: [],
}

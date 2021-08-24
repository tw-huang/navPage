// https://www.tailwindcss.cn/docs/configuration
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				'98': '40rem',
				'100': '65rem'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}

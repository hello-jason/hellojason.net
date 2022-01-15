module.exports = {
	theme: {
		fontFamily: {
			'sans': ['Segoe UI', 'SegoeUI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
		},
		colors: {
			'brand': {
				'primary': '#A432F4',
				'secondary': '#FAAC2C'
			},
			'white': '#FFFFFF',
			'black': '#2F3021'
		},
		extend: {
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
	content: ['src/**/*.njk', 'src/**/*.js']
}

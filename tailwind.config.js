module.exports = {
	theme: {
		fontFamily: {
			'sans': ['Montserrat', 'Segoe UI', 'SegoeUI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
		},
		colors: {
			'primary': {
				0: '#EDD6FD', 
				100: '#DBADFB', 
				200: '#C884F8', 
				300: '#B65BF6', 
				400: '#A432F4', 
				500: '#8328C3', 
				600: '#621E92', 
				700: '#421462', 
				800: '#210A31'
			},
			'secondary': '#FAAC2C',
			'white': '#FFFFFF',
			'black': '#2F3021'
		},
		extend: {
		},
	},
	plugins: [],
	content: ['src/**/*.njk', 'src/**/*.js']
}

module.exports = {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				light: 'white',
				'light-font': '#374151',
				'light-accent': '#0369A1', // yellow-600
				dark: '#374151', // gray-700
				'dark-font': '#F3F4F6', // gray-100
				'dark-accent': '#CA8A04' // sky-700
			},
			spacing: {
				header: '5rem'
			}
		},
		fontFamily: {
			nunito: ['Nunito', 'sans-serif'],
			poppins: ['Poppins', 'sans-serif']
		}
	},
	plugins: []
}

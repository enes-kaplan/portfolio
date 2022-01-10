module.exports = {
	darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
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

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#000000',
				grey_1: '#131417',
				grey_2: '#18191D',
				grey_3: '#18191D',
				grey_4: '#808287',
				primary_text: '#ffffff',
				unselected_state: '#666666',
				success: '#0AC18E',
			},
		},
	},
	plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#000000',
				grey_1: '#131417',
				grey_2: '#18191D',
				grey_3: '#282a31',
				grey_4: '#808287',
				grey_5: '#89898b',
				primary_text: '#ffffff',
				unselected_state: '#666666',
				success: '#0AC18E',
			},
		},
		fontFamily: {
			primaryUltralight: ['SFPro-Ultralight'],
			primaryUltralightItalic: ['SFPro-Ultralight-Italic'],
			primaryThin: ['SFPro-Thin'],
			primaryThinItalic: ['SFPro-Think-Italic'],
			primarySemibold: ['SFPro-Semibold'],
			primarySemiboldItalic: ['SFPro-Semibold-Italic'],
			primaryRegular: ['SFPro-Regular'],
			primaryRegularItalic: ['SFPro-Regular-Italic'],
			primaryMedium: ['SFPro-Medium'],
			primaryMediumItalic: ['SFPro-Medium-Italic'],
			primaryLight: ['SFPro-Light'],
			primaryLightItalic: ['SFPro-Light-Italic'],
			primaryHeavy: ['SFPro-Heavy'],
			primaryHeavyItalic: ['SFPro-Heavy-Italic'],
			primaryBold: ['SFPro-Bold'],
			primaryBoldItalic: ['SFPro-Bold-Italic'],
			primaryBlack: ['SFPro-Black'],
			primaryBlackItalic: ['SFPro-Black-Italic'],
		},
	},
	plugins: [],
}

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ["./**/*.html"],
    theme: {
        screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1170px"
		},
        container:{
            center: true,
            padding: '15px'
        },
        extend: {
            colors:{
                'primary': "#8e79fc",
                'secondary':"#58678C",
                'heading': "#2B2B52",
                'text': "#404E63",
                'button': "#2b2b52",
                'line': "#D9E0F0",
                'icone': "#7259fb",
                'peraghap': "#95A1BC",
            }
        },
        fontFamily:{
            primary: ['Heebo', 'sans-serif'],
            secondary: ['IBM Plex Sans', 'sans-serif'],
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}

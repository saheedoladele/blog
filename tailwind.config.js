/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: '480px',
  		md: '768px',
  		lg: '1024px'
  	},
  	container: {
  		center: 'true',
  		padding: {
  			DEFAULT: '15px',
  			sm: '1.5rem'
  		}
  	},
	  
  	extend: {
  		colors: {
  			primary: '#0F0F0F',
  			primaryLight: '#0F0F0F4D',
  			secondary: '#4379F2',
  			secondaryLignt: '#B7E0FF'
  		},
  		margin: {
  			'10p': '10%'
  		},
  		padding: {
  			'5p': '5%',
  			'7p': '7%',
  			'10p': '10%',
  			'15p': '15%'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

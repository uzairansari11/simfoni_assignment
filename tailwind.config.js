/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			md: "1024px",
			lg: "1280px",
		},

		extend: {
			fontFamily: {
				Sans: ["Open Sans", "sans-serif"],
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};

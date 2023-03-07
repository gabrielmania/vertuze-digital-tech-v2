/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#f68712",
                secondary: "#322f30",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: false,
    },
};

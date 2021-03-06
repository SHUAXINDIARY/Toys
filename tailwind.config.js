module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            small: { raw: "(min-height: 700px)" },
            big: { raw: "(min-height: 850px)" },
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        fontFamily: {
            fix: "Ping Fang",
            menu: ["Roboto Mono"],
            title: ["Crimson Text"],
            next: [
                "Menlo",
                "Monaco",
                "Lucida Console",
                "Liberation Mono",
                "DejaVu Sans Mono",
                "Bitstream Vera Sans Mono",
                "Courier New",
                "monospace",
            ],
        },
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark"],
    },
};

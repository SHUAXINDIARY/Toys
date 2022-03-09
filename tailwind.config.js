module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'small': { 'raw': '(min-height: 700px)' },
            'big': { 'raw': '(min-height: 850px)' },
        },
        fontFamily: {
            fix: "Ping Fang",
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
        theme: false,
    },
};

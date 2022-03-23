module.exports = {
    // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
    // https://tailwindcss.com/docs/just-in-time-mode
    mode: "jit",
    theme: {
        extend: {
            screens: {
                xxs: "375px",
                xs: "480px",
                mds: "600px",
                md: "768px",
                lgss: "976px",
                lgs: "1050px",
                lg: "1200px",
                xxl: "1440px",
            },
            fontFamily: {
                sans: ["Gelion", "sans-serif"],
            },
        },
    },
    variants: {},
    plugins: [],
    purge: {
        // Filenames to scan for classes
        content: [
            "./src/**/*.html",
            "./src/**/*.js",
            "./src/**/*.jsx",
            "./src/**/*.ts",
            "./src/**/*.tsx",
            "./public/index.html",
        ],
        // Options passed to PurgeCSS
        options: {
            // Whitelist specific selectors by name
            // safelist: [],
        },
    },
};
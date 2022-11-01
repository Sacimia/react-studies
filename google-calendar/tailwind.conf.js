const labelsClasses = [
    "indigo",
    "gray",
    "green",
    "blue",
    "red",
    "purple",
];

module.exports = {
    purge: {
        content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
        safelist: [
            ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
            ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
            ...labelsClasses.map((lbl) => `text-${lbl}-400`)
        ],
    },
    darkmode: false,
    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans"]
            },
            gridTemplateColumnd:{
                "1/5": "1 fr 5 fr"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
}
const twColors = require("tailwindcss/colors");

module.exports = {
    // prefix: "tw-",
    // darkMode: "class",

    theme: {
        colors: {
            ...twColors,
            primary: {
                100: "#ccdaeb",
                200: "#99b6d7",
                300: "#6691c2",
                400: "#336dae",
                500: "#00489a",
                600: "#003a7b",
                700: "#002b5c",
                800: "#001d3e",
                900: "#000e1f",
            },
            accent: "#0090FF",
            darkBg: "#1d1e24",
            surface: "#23262B",
            accent: "#0090FF",
            bodyDark: "#93959C",
            bodyLight: "#8A9099",
            surface: "#23262B",
            borderColor: "#33363D",
            overlayLight: "#30323B",
            greenColor: "#58D786",
            darkGreen: "#5BC983",
            orangeColor: "#FF955C",
            darkOrange: "#F5945F",
            redColor: "#FD7972",
            darkRed: "#F57069",
            heading: "#3F434A",

            secondary: {
                100: "#f9cfd1",
                200: "#f49ea2",
                300: "#ee6e74",
                400: "#e93d45",
                500: "#e30d17",
                600: "#b60a12",
                700: "#88080e",
                800: "#5b0509",
                900: "#2d0305",
            },

        },
        fontWeight: {
            hairline: 100,
            "extra-light": 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            "extra-bold": 800,
            black: 900,
        },
        fontSize: {
            extraSm: "10px",
            sm: "0.8rem",
            base: "1rem",
            xl: "1.25rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
            "6xl": "5.052rem",
            "7xl": "6.052rem",
        },

        minHeight: {
            "1/2": "80vh",
        },
        keyframes: {
            waves: {
                "0%": {
                    opacity: "0",
                    transform: "scale(0.2, 0.2)",
                },
                "50%": {
                    opacity: "0.9",
                },
                "100%": {
                    opacity: "0",
                    transform: "scale(0.7, 0.7)",
                },
            },
            fadeUp: {
                "0%": {
                    opacity: "0",
                    transform: "translateY(40px)",
                },
                "100%": {
                    opacity: "1",
                    transform: "translateY(0)",
                },
            },
            rollIn: {
                "0%": {
                    opacity: "0",
                    transform: "translateX(-100%) rotate(-120deg)",
                },
                "100%": {
                    opacity: "1",
                    transform: "translateX(0px) rotate(0deg)",
                },
            },
        },
        animation: {
            waves1: "waves 2s ease-in-out infinite",
            waves2: "waves 3s ease-in-out infinite",
            waves3: "waves 4s ease-in-out infinite",
            fadeUp1: "fadeUp .5s ease-in-out",
            fadeUp2: "fadeUp .8s ease-in-out",
            fadeUp3: "fadeUp 1.1s ease-in-out",
            fadeUp4: "fadeUp 1.5s ease-in-out",
            roll: "rollIn .7s ease-in-out",
        },
    },

};

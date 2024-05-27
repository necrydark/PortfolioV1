const path = require("path");

module.exports = {
    // next-i18next.config.js
    i18n: {
        defaultLocale: "en",
        locales: ["en", "ja"],
        localeDetection: false,
    },
    localePath: path.resolve('./public/locales'),
    reloadOnPrerender: process.env.NODE_ENV === "development",
    trailingSlash: true,
}


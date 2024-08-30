const imageScenarios = require("./scenarios/image-scenarios");
const path = require("path");

module.exports = {
    id: "image",
    viewports: [
        {
            label: "device",
            width: 1400,
            height: 800,
        },
    ],
    onBeforeScript: "puppet/onBefore.js",
    // onReadyScript: "puppet/onReady.js",
    scenarios: imageScenarios,
    paths: {
        bitmaps_reference: "reference",
        bitmaps_test: "backstop_data/bitmaps_test",
        engine_scripts: "backstop_data/engine_scripts",
        html_report: "backstop_data/html_report",
        ci_report: "backstop_data/ci_report",
    },
    report: ["browser"],
    engine: "puppeteer",
    engineOptions: {
        args: ["--no-sandbox"],
    },
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false,
    onCompare: {
        test: "custom-compare.js",
    },
    // screenshot.cssのパスを追加
    onReadyScript: "applyCss.js",
    customCssFilePath: path.join(__dirname, "screenshot.css"),
};

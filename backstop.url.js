const urlScenarios = require('./scenarios/url-scenarios');
const path = require("path");

module.exports = {
    id: 'url',
    viewports: [
        {
            label: 'desktop',
            width: 1400,
            height: 800
        }
    ],
    onBeforeScript: 'playwright/onBefore.js',
    onReadyScript: 'playwright/onReady.js',
    scenarios: urlScenarios,
    paths: {
        bitmaps_reference: 'backstop_data/bitmaps_reference',
        bitmaps_test: 'backstop_data/bitmaps_test',
        engine_scripts: 'backstop_data/engine_scripts',
        html_report: 'backstop_data/html_report',
        ci_report: 'backstop_data/ci_report'
    },
    report: ['browser'],
    engine: 'playwright',
    engineOptions: {
        args: ['--no-sandbox']
    },
    asyncCaptureLimit: 2,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false,
};
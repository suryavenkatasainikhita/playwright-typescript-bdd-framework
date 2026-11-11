module.exports = {
    default: {
        require: [
            "step-definitions/*.ts",
            "hooks/*.ts"
        ],

        requireModule: [
            "ts-node/register"
        ],

        paths: [
            "features/*.feature"
        ],

        format: [
            "json:reports/cucumber-report.json"
        ]
    }
};
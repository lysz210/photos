import {configDefaults, coverageConfigDefaults, defineConfig} from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        exclude: [
            ...configDefaults.exclude,
            '**/feature/**',
            '**/pulumi/**'
        ],
        reporters: [
            'default',
            'html',
        ],
        coverage: {
            enabled: true,
            exclude: [
                '**/features/**',
                '**/pulumi/**',
                ...coverageConfigDefaults.exclude
            ],
            reportsDirectory: '.reports/coverage'
        },
        outputFile: {
            html: ".reports/unit/index.html",
        }
    }
})
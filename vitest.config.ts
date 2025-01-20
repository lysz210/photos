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
            thresholds: {
                lines: 80,
                functions: 80,
                branches: 80,
                statements: 80
            },
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
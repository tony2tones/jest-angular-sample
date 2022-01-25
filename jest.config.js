const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ["<rootDir>/src/test.ts"],
    testMatch: ["**/+(*.)+(spec).+(ts)"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {prefix: "<rootDir>/"})
}

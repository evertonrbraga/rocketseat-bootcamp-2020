"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');
exports.default = {
    clearMocks: true,
    coverageProvider: 'v8',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
    preset: 'ts-jest',
    testEnvironment: 'node',
};

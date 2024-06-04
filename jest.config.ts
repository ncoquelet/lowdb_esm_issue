// jest.config.js
import { compilerOptions } from "./tsconfig.json";

//testEnvironment: "jsdom",

const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]sx?$": [
      "ts-jest"
    ],
  },
  roots: ["<rootDir>"],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  testMatch: ["/**/*.test.[jt]s?(x)"]
};

export default config;

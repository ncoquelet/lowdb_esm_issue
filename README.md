Project that reproduce my lowdb integration issue
This is a full ESM project using full Typescript and based on react, nextjs and jest.

```
Node v20.14.0
npm 10.7.0
Typescript 5.3.3
Next 14.1.0
Jest 29.7.0
Lowdb 0.2.0
```

I've simplified the dependencies and customisation to avoid side effects.

# Installation

```
> git clone https://github.com/ncoquelet/lowdb_esm_issue
> cd lowdb_esm_issue
> npm install 
```

# Problems

Without lowdb everything works fine, but when I instantiate any lowdb class, I get these errors, both in next build and in the jest execution.

## During Next build

```shell
> npm run build

  node:fs/promises
  Module build failed: UnhandledSchemeError: Reading from "node:fs/promises" is not handled by plugins (Unhandled scheme).
  Webpack supports "data:" and "file:" URIs by default.
  You may need an additional plugin to handle "node:" URIs.
```

<details>
<summary>full log here</summary>

```shell
lowdb_esm_issue@0.1.0 build
next build

▲ Next.js 14.2.3

Creating an optimized production build ...

Failed to compile.

node:fs/promises
Module build failed: UnhandledSchemeError: Reading from "node:fs/promises" is not handled by plugins (Unhandled scheme).
Webpack supports "data:" and "file:" URIs by default.
You may need an additional plugin to handle "node:" URIs.
at /home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:401757
at Hook.eval [as callAsync] (eval at create (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:13:28858), <anonymous>:6:1)
at Object.processResource (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:401682)
at processResource (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:5308)
at iteratePitchingLoaders (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:4667)
at runLoaders (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:8590)
at NormalModule._doBuild (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:401544)
at NormalModule.build (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:403572)
at /home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:82055
at NormalModule.needBuild (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:407670)

Import trace for requested module:
node:fs/promises
./node_modules/lowdb/lib/adapters/node/TextFile.js
./node_modules/lowdb/lib/node.js
./src/app/Repository.ts
./src/app/page.tsx

node:fs
Module build failed: UnhandledSchemeError: Reading from "node:fs" is not handled by plugins (Unhandled scheme).
Webpack supports "data:" and "file:" URIs by default.
You may need an additional plugin to handle "node:" URIs.
at /home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:401757
at Hook.eval [as callAsync] (eval at create (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:13:28858), <anonymous>:6:1)
at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:13:26012)
at Object.processResource (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:401682)
at processResource (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:5308)
at iteratePitchingLoaders (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:4667)
at runLoaders (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:8590)
at NormalModule._doBuild (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:401544)
at NormalModule.build (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:403572)
at /home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:82055

Import trace for requested module:
node:fs
./node_modules/lowdb/lib/adapters/node/TextFile.js
./node_modules/lowdb/lib/node.js
./src/app/Repository.ts
./src/app/page.tsx

node:path
Module build failed: UnhandledSchemeError: Reading from "node:path" is not handled by plugins (Unhandled scheme).
Webpack supports "data:" and "file:" URIs by default.
You may need an additional plugin to handle "node:" URIs.
at /home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:401757
at Hook.eval [as callAsync] (eval at create (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:13:28858), <anonymous>:6:1)
at Object.processResource (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:401682)
at processResource (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:5308)
at iteratePitchingLoaders (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:4667)
at runLoaders (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:8590)
at NormalModule._doBuild (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:401544)
at NormalModule.build (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:403572)
at /home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:82055
at NormalModule.needBuild (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:407670)

Import trace for requested module:
node:path
./node_modules/lowdb/lib/adapters/node/TextFile.js
./node_modules/lowdb/lib/node.js
./src/app/Repository.ts
./src/app/page.tsx

node:url
Module build failed: UnhandledSchemeError: Reading from "node:url" is not handled by plugins (Unhandled scheme).
Webpack supports "data:" and "file:" URIs by default.
You may need an additional plugin to handle "node:" URIs.
at /home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:401757
at Hook.eval [as callAsync] (eval at create (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:13:28858), <anonymous>:6:1)
at Object.processResource (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:401682)
at processResource (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:5308)
at iteratePitchingLoaders (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:4667)
at runLoaders (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:8590)
at NormalModule._doBuild (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:401544)
at NormalModule.build (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:403572)
at /home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:82055
at NormalModule.needBuild (/home/john/dev/projects/lowdb_esm_issue/node_modules/next/dist/compiled/webpack/bundle5.js:28:407670)

Import trace for requested module:
node:url
./node_modules/steno/lib/index.js
./node_modules/lowdb/lib/adapters/node/TextFile.js
./node_modules/lowdb/lib/node.js
./src/app/Repository.ts
./src/app/page.tsx


> Build failed because of webpack errors

Process finished with exit code 1
```
</details>


## Jest Execution

```shell
> npm run test
  /home/john/dev/projects/lowdb_esm_issue/node_modules/lowdb/lib/node.js:1
  ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){export * from './adapters/node/DataFile.js';
^^^^^^
  SyntaxError: Unexpected token 'export'
```

<details>
<summary>full log here</summary>

```shell
lowdb_esm_issue@0.1.0 test
jest

FAIL  src/app/Repository.test.ts
● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /home/john/dev/projects/lowdb_esm_issue/node_modules/lowdb/lib/node.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){export * from './adapters/node/DataFile.js';
                                                                                      ^^^^^^

    SyntaxError: Unexpected token 'export'

    > 1 | import { JSONFileSyncPreset } from "lowdb/node";
        | ^
      2 |
      3 | type Data = {
      4 |   messages: string[]

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1505:14)
      at Object.<anonymous> (src/app/Repository.ts:1:1)
      at Object.<anonymous> (src/app/Repository.test.ts:1:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.161 s
Ran all test suites.

Process finished with exit code 1
```
</details>

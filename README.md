# as-server

## Setting up

* Ensure that you have [git](https://git-scm.com/downloads) on your machine.
* Fork this [repository](https://github.com/upaytech/as-server) and branch off of the `develop` branch.
* Install [docker](https://www.docker.com/get-started).
* Run `docker-compose up` in the root of the project.

## Codebase

* Go through the [package.json](./package.json) file initially. The `package.json` file has two important pieces of information:
  * Dependencies that our core code is dependent on.
  * Scripts that allow running of complicated scripts and commands with a short command.
* The codebase of the application resides in the `src/` directory.

[TODO: Elaborate this whole section more]

## Contributing

Please look into our [contributing guidelines](./CONTRIBUTING.md) for information on how to proceed with contributing to this repository.

## Scripts

* `start`: Serves the application
* `build-ts`: Compiles the codebase from typescript to javascript and outputs in the 'dist/` directory.
* `serve`: Runs the application in production mode.
* `watch-node`: Runs the application in watch mode.
* `dev`: Starts compilation of typescript code and the application in development mode.
* `watch-ts`: Starts the typescript compilation in watch mode.
* `lint`: Lints the source code based on the [config](./.eslintrc) and reports errors in the console.
* `test`: Runs the test suite once and then exits.
* `test:watch`: Runs the test suite in watch mode.
* `test:coverage`: Runs the test suite once and reports the code coverage as it exits.

## Linter and Prettier

* A linter allows to catch semantic errors before runtime. It also helps in creating a codestyle standard throughout the codebase.

* Formatting issue rules have been turned off as we are using an auto-formatter called `prettier`. It will auto-format the codebase based on the rules specified in [.prettierrc](./.prettierrc) upon every commit.

* There is a linter that is setup with the configuration that can be looked up in the [.eslintrc](./.eslintrc) file.

* There are some issues with the integration of typescript linting with ESLint in VSCode with ESLint plugin, so it is recommended that, before commit, you run the `npm run lint` command.
The linting works fine with any linter plugin in Vim.

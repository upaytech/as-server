# Contributing to AS-Server

😃🎉 Hi! thanks for taking the time to contribute!

The following is a set of guidelines for contributing to this project.

- [Code of Conduct](#code-of-conduct)
- [This is too long, I just have a question!](#this-is-too-long-i-just-have-a-question)
- [How can I contribute?](#how-can-i-contribute)
  * [Issues and Bugs](#issues-and-bugs)
  * [Enhancements or Features](#enhancements-or-features)
  * [Your First Code Contributions](#your-first-code-contributions)
- [Submission Guidelines](#submission-guidelines)
  * [Issues](#issues)
  * [Pull Requests](#pull-requests)
- [Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [Tests Styleguide](#tests-styleguide)

## Code of Conduct

Everyone who contributes to this project is required to uphold the [code of conduct](./CODE_OF_CONDUCT.md). Please be open and inclusive. 🙏

## This is too long, I just have a question!

Please **do not** open issues for general questions like `What is Docker?` as we want to keep the issues relevant to the application.
If you do raise an issue for that then it will be closed with the `Resolved: invalid` label.
You are welcome to ask those questions on the `GSSOC upay channel` or you can ask any of the maintainers if you get stuck.

That said, you are welcome to raise issues if you have doubts regarding the architecture or any flow of the application. 🙂

## How can I contribute?

### Issues and Bugs

If you find any bugs in the application, you can help us by submitting an [issue](#issues) reproducing that bug or [file a PR](#pull-requests) with a fix.
If you find that something is wrong in the documentation, you can raise an issue for that too (it is just as important as a code bug!)

### Enhancements or Features

Apart from bugs, you can also raise issues proposing enhancements or discuss over issues of features in different components of the application.
Please raise an issue for an enhancement or feature before you start working on it as that will ensure that we are ready to accept it.
Remember, raising an issue, or discussing over different issues is also SUPER helpful to us, so don't be hesitant to be a part of all those discussions!

### Your First Code Contributions

If you are new to programming or to open source itself and are unsure which of the issues to pick up, don't worry! You can start looking for issues with the following labels:

* `good first issue`: this label indicates that this issue is made for the first-time contributers!
* `Difficulty: starter`: this label indicates that the code change required is not that involved or challenging.

## Submission Guidelines

### Issues

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

If it is a bug, please add descriptions on how to reproduce it. If it is a feature request, we request you to put some effort in the motivation behind that feature/enhancement.
If you raise an issue and want to claim it and start working on it, it would be nice of you to write that in the comments of that issue.

If you want to claim any issue, please check if it is assigned to someone or not. If it is not, then you can ask for it to be assigned to you and one of the collaborators will assign it to you.

### Pull Requests

Before you submit a Pull Request(PR), please consider these following details:

1. Search the [issues](https://github.com/upaytech/as-server/issues) page for an open or closed PR that relates to your submission. You don't want to duplicate effort.
2. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add. Discussing the design up front(in an issue) helps to ensure that we're ready to accept your work.
3. Fork the `upaytech/as-server` repo.
4. Make your changes in a new git branch
```
git checkout -b my-fix-branch develop
```
5. Create your patch, **including appropriate test cases**, if it is a feature PR.
6. Run the test suite to ensure that it is not failing.
7. Commit your changes using our [commit message styleguide](#git-commit-messages)
8. Push your branch to GitHub in your fork.
9. In GitHub, send a Pull Request to `upaytech/as-server:develop`
  * If there are any suggested changes then:
    * Make the required updates
    * Re-run the suite to ensure tests are still passing
    * Rebase your branch and force push to your GitHub repo (this will also update your PR)
      ```
      git rebase master -i
      git push -f
      ```
That's it, **thank you** for your contribution ❣

**After your PR is merged**, you can safely delete your branch and pull the changes from the main (upstream) repository.

## Styleguides

### Git commit messages

* The first line of the commit message should be of the format:
  ```
  <type>(<scope>): <subject>
  ```
  Examples:
  * `feat(user): change logging details`
  * `chore(packages): add knex for sql quering`
  
* The type should be one of the following:
  * `chore`: Changes that affect the build system or auxiliary tooling
  * `ci`: Changes to our CI configuration files and scripts
  * `docs`: Documentation only changes
  * `feat`: A new feature
  * `fix`: A bug fix
  * `perf`: A code change that improves performance
  * `refactor`: A code change that neither fixes a bug nor adds a feature
  * `test`: Adding missing tests or correcting existing tests
* The scope is the scope of the changes that the commit brings. Example: `auth`, `products`, `customer` etc.
* The subject of the commit message explains what the change is.
  * Use the present tense ('add feature', *not* 'added feature')
  * Use the imperative mood ('change logging details', *not* 'changes logging details')
  * Don't capitalize the first letter
  * No period (.) after the line
  * Reference issues and PRs liberally after the first line

### Tests Styleguide

* Structure your specs/tests inside `describe` blocks.
* Treat `describe` as a noun or situation.
* Treat `it` as a statement about state or how an operation changes state.
  
**That's it! We hope you have a good time contributing to the application. Don't hesitate to ask for help 🙂**

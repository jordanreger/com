<link rel="stylesheet" href="/index.css">

[[← go back](/wiki)]


# Conventional Commits
A guide on how to format commit messages. Official documentation at [conventionalcommits.org](https://conventionalcommits.org).


## Type
From the [Angular convention](
https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type), here's a list of all the different types they allow and what they mean.

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

## Scope
As listed in the [Specification](https://www.conventionalcommits.org/en/v1.0.0/#specification), a scope is permitted within parentheses *after* the type.

- `feat(blog): new post about coffee`

- `fix: limit posts to 20`

The most common is probably as follows:

- `refactor: update css`

## Body
A commit message can have a body and footers.

> `todo(wiki): finish paragraph about body`
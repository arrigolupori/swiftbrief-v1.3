# Swiftbrief (v1.3)

![Swiftbrief logo](https://swiftbrief-cms.nyc3.digitaloceanspaces.com/941f6eb99c5298036be645af1111c3ab.png?updated_at=2022-08-19T16:50:47.645Z)

**NOTE:** This is an upgraded codebase.

_The original codebase (v1) wasn't implemented using an MVC architecture (Model, View, Controller). There were too many inefficiencies which prompted a re-write with TypeScript, controllers, and global functions._

Rules for the new codebase:

- Do not repeat yourself: create functions once, re-use forever.
- Use existing MVC functions or create new ones to handle app functionality.
- TypeScript everything. If type is already asserted, don't repeat.
- Make sure build passes before committing. Husky enforces this.

The codebase uses Yarn, not NPM.

**Important:**

Before you get started, install the Gitmoji CLI globally using `npm i -g gitmoji-cli`, then run `gitmoji -g` in your terminal and select: 1) Y; 2) Bottom option; 3) Y; 4) Default option. Gitmoji is a requirement.

<hr />

## Description

Swiftbrief is the brief generation engine for busy content marketers.

It allows you to:

- Create content briefs in < 5 minutes
- Keep track of topic clusters in one place
- Monitor writers' performance at scale (soon)

The public roadmap can be found [here](https://www.swiftbrief.com/roadmap).

<hr />

## Commit structure

**Important:** Changes _must_ be made thorough a pull request.

Before you modify the code, create a new branch with a descriptive name.

We use dashed casing (`new-branch`) for branch names.

Add your changes to that branch, commit them, and open a PR with `yarn create:pr`.
This will automatically list all of the commits as a PR description.

(`create:pr` uses the GitHub CLI, you can install it at [instructions](https://github.com/cli/cli#readme).)

### Gitmoji

We use gitmoji CLI for our commit structure.

Please install it with `npm i -g gitmoji-cli` and enable scopes (see instructions in intro).
Each commit will need a scope, message, and description. Commit messages are enforced via Husky.

<hr />

## The Swiftbrief CLI

To generate components, controllers, and API endpoints quickly, use:

`yarn generate cm|cn|en <folderName> --path <pathName>`

Each file structure is configured in Swiftbrief's `cli` repository.

You don't have to do any additional configuration.

Replace `folderName` with the name of the component / controller / endpoint. Replace `pathName` with the name of the directory you'd like to place the folder in (no forward slash) under the respective directories.

For example:

`yarn generate cm MyTable --path "tables"`

Will create a `MyTable` folder under:

    /src

    -- /ui

    -- -- /components

    -- -- -- /tables

The `MyTable` folder will include `index.tsx` and `MyTable.cy.tsx` files.

Please refer to the [Swiftbrief CLI repo](https://github.com/swiftbrief/cli) for detailed documentation.

© 2022 Swiftbrief | All rights reserved

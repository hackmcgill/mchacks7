# Contributing

Before contributing to the McHacks website, please review our [Code of Conduct](https://github.com/hackmcgill/mchacks7/blob/develop/docs/CODE_OF_CONDUCT.md).

## Branches

- Create a new branch from `develop`
- Name branches like `feature/ticket#-short-description` or `bug/ticket#-short-description`, i.e. `feature/9-styling`

## Commits

- Use imperative form when writing commit messages, i.e. "Fix margins in..."
- Use sentence case (capitalize the first letter)
- Try to communicate what the change does without having to look at the source code
- List your main change in the unreleased section of the Changelog

## Pull Requests

- Name the PR with a summary of proposed changes
- Complete the entire PR template
- Satisfy the PR checklist before asking for review
- Set `develop` as the base branch unless it's a release (then set base to `master`)
- Squash commits to merge

## Releases

- Create a new branch from `develop` to merge into `master`
- Name the branch like `release/version-number`, i.e. `release/1.4.0`
- For version numbers, we follow [semantic versioning](https://semver.org/) with MAJOR.MINOR.PATCH.
- Update the [Changelog](https://github.com/hackmcgill/mchacks7/blob/develop/docs/CHANGELOG.md).
- Create a pull request to merge the release branch into `master`
- Satisfy the entire PR template with a good description for reference
- After merging into `master`, add a tag with the version number
- If it's a major release, add a release tag in the [releases tab](https://github.com/hackmcgill/mchacks7/releases).

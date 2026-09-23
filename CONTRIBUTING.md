# Contributing

Thank you for contributing to User Access Single Sign-On UI.

## Before You Start

1. Search existing issues and pull requests.
2. For a significant change, open an issue to discuss the approach first.
3. Do not include secrets, credentials, generated build output, or unrelated formatting changes.

## Development

```bash
cd user.sso.ui
npm ci
npm start
```

## Required Checks

Run these commands before opening a pull request:

```bash
npm run lint
npm test -- --watchAll=false
npm run build
```

All checks must pass. Existing warnings should not be increased; fix warnings when they are in code touched by the change.

## Pull Requests

- Use a focused branch and descriptive commit messages.
- Explain the behavior changed and how it was tested.
- Include screenshots or recordings for visible UI changes.
- Update documentation and tests when behavior or public workflow changes.
- Keep pull requests small enough to review.

The CI workflow runs lint, tests, and a production build. Dependency review, CodeQL, npm audit, and Dependabot are also enabled for the repository.

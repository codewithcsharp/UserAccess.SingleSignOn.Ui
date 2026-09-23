# User Access Single Sign-On UI

React frontend for the User Access Single Sign-On application. The application source and package manifest are in `user.sso.ui/`.

## Requirements

- Node.js 22.x
- npm

## Local Development

```bash
cd user.sso.ui
npm ci
npm start
```

The development server runs at `http://localhost:3000`.

## Quality Checks

Run these commands from `user.sso.ui/`:

```bash
npm run lint
npm test -- --watchAll=false
npm run build
```

Pull requests and pushes to `master` run the same checks through GitHub Actions. Dependency updates, dependency review, npm audits, and CodeQL analysis are also configured under `.github/`.

## Project Layout

```text
user.sso.ui/src/components/       UI components and dashboard
user.sso.ui/src/apicomponents/    API request components
user.sso.ui/src/**/*.test.jsx     React Testing Library tests
.github/workflows/                CI and security automation
```

## Configuration

Do not commit credentials, tokens, or environment-specific secrets. API endpoints should be supplied through the appropriate environment configuration for each deployment.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the pull request and validation requirements. Security issues should be reported according to [SECURITY.md](SECURITY.md).
# User.SSO.UI
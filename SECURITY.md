# Security Policy

## Reporting a Vulnerability

Please do not open a public issue for a suspected security vulnerability. Report it privately through GitHub's security advisory workflow or contact the repository maintainers through the private contact method available on the repository profile.

Include:

- A clear description of the issue and its impact
- Reproduction steps or a proof of concept
- Affected versions or commit identifiers
- Any suggested mitigation

Please allow maintainers reasonable time to investigate before publicly disclosing the issue. Do not include passwords, tokens, personal data, or other secrets in a report.

## Supported Versions

Only the latest version on `master` is actively maintained until a release policy is established.

## Security Practices

- Never commit credentials, API keys, tokens, certificates, or `.env` files.
- Keep dependencies current and review Dependabot pull requests.
- Run `npm audit` for dependency changes.
- Report accidentally committed secrets immediately so they can be revoked and removed from repository history.

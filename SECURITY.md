# Security Policy for Gemini Dapp Companion

## 🏢 Governance
This project is owned and maintained by **RCS DISTRIBUTION AND RETAIL, LLC**. All security-related decisions and access controls are governed by company policy.

## 🔐 Role-Based Access Control (RBAC)
To maintain the security of the Web3 Social Connect platform, we enforce the following RBAC policies:

1. **Owner (RCS Admin):** Full access to repository settings, secrets (Stripe/Firebase keys), and branch protection rules.
2. **Maintainer:** Can manage issues and pull requests but cannot bypass branch protection.
3. **Contributor:** Can submit Pull Requests (PRs). All code must be reviewed by a Maintainer or Owner before merging.

## 🛡️ Supported Versions
| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | ✅ Active Support  |
| < 1.0.0 | ❌ Outdated        |

## 🐛 Reporting a Vulnerability
If you find a security vulnerability, **do not open a public issue.** Please report it through one of the following:
1. Use the **GitHub "Report a vulnerability"** button under the Security tab.
2. Contact the RCS Security Team directly.

## 🚀 Branch Protection
The `main` branch is protected. All merges require:
- A passing build status (CI/CD).
- At least one approved review.
- No "force pushes" allowed.

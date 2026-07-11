# Security Policy

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability in OpenFXLab, please report it by email to:

**[openfxresearch@gmail.com](mailto:openfxresearch@gmail.com)**

Include the following in your report:

- A description of the vulnerability
- Steps to reproduce the issue
- Potential impact assessment
- Any suggested mitigations, if you have them

We aim to acknowledge vulnerability reports within 72 hours. We will keep you informed as the issue is investigated and resolved.

---

## Current project status

OpenFXLab is in a pre-alpha planning and development stage. No production application, API, database, user-account system, or payment system is currently deployed. The only public deployment is the static informational project website.

---

## Scope

### MVP scope

The initial MVP is a read-only platform displaying public, non-sensitive data from official sources (CFTC reports, central bank publications, official statistical agencies). It does not:

- Accept user credentials or personal financial information
- Connect to brokerage accounts or trading systems
- Store private user data in the initial version
- Process payments or financial transactions

Given this scope, the primary security concerns in the MVP are:

- Correct attribution and display of public data
- Integrity of data processing pipelines
- API availability and rate limiting
- Dependency vulnerability management

### Future security concerns

If user accounts, saved dashboards, alerts, or paid tiers are introduced in later versions, the security requirements will expand significantly to include:

- Secure authentication and session management
- Encrypted storage of user data
- API key management
- Rate limiting and abuse prevention
- Secure payment processing (if applicable)

These will be designed and reviewed before implementation.

---

## Supported versions

As this project has not yet released a production version, there is no versioned support policy at this time. This policy will be updated when a production release is made.

---

## Dependencies

We aim to keep dependencies up to date and will monitor for known vulnerabilities in dependencies using available tooling. If you discover a known vulnerability in a dependency we use, please report it as described above.

---

## Responsible disclosure

We ask that you give us a reasonable amount of time to investigate and address a reported vulnerability before public disclosure. We aim to address critical vulnerabilities quickly and will coordinate with reporters on public disclosure timing where appropriate.

We appreciate responsible disclosure and will acknowledge contributors in our changelog where they consent to being named.

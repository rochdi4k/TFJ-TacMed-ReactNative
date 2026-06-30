# Security Policy

## Supported Versions

This project is currently in early development.

| Version | Supported |
| ------- | --------- |
| v0.1.x  | Yes       |

Older experimental builds may not receive security updates.

---

## Reporting a Security Issue

If you find a security issue, please do not open a public issue with exploit details.

Instead, report it privately to the repository owner.

Include:

- A clear description of the issue
- Steps to reproduce
- Affected files or screens
- Possible impact
- Screenshots or logs if useful
- Suggested fix, if available

---

## What Counts as a Security Issue

Security issues may include:

- Exposure of secrets, tokens, or private keys
- Accidental upload of keystore files
- Unsafe handling of user data
- Dependency vulnerabilities with real impact
- App behavior that could lead to unsafe medication display
- Calculation bugs that produce incorrect dose, volume, vial, or remaining-volume output
- Incorrect route handling, such as mixing IV and IM values
- Missing or misleading safety warnings

---

## Medical Safety Issues

Because this project involves medication calculations, some bugs are treated as safety issues.

Examples:

- Wrong medication concentration
- Wrong unit conversion
- mg/mcg conversion error
- Incorrect vial count
- Incorrect remaining volume
- Incorrect max dose cap
- IV dose displayed as IM dose
- IM dose displayed as IV dose
- Missing route distinction
- Medication data copied incorrectly from the reference sheet

If you find one of these issues, report it immediately.

---

## Sensitive Data

Do not upload or commit:

```text
Patient data
Medical records
Personal health information
API keys
Access tokens
Keystore files
.jks files
.keystore files
.env files
APK signing credentials
```

The `.gitignore` file should block common sensitive files, but contributors are still responsible for checking their commits.

---

## Dependency Security

This project uses npm packages.

To inspect dependencies, run:

```bash
npm audit
```

Do not automatically run:

```bash
npm audit fix --force
```

unless you understand the breaking changes.

Forced dependency upgrades may break Expo or React Native compatibility.

---

## Recommended Local Checks

Before pushing changes:

```bash
git status
git diff
npm install
npm start
```

Check that no sensitive files are staged:

```bash
git diff --cached --name-only
```

Make sure these are not included:

```text
node_modules/
.expo/
dist/
web-build/
*.apk
*.aab
*.jks
*.keystore
.env
```

---

## APK and Release Security

Do not commit APK or AAB files directly to the repository.

Use GitHub Releases for APK downloads.

Never upload signing keys or keystore passwords.

Recommended release asset naming:

```text
TFJ-TacMed-v0.1.0.apk
```

---

## Safety Disclaimer

TFJ TacMed is a software reference calculator based on a provided medication sheet.

It is not a substitute for official medical protocols, authorized clinical guidance, or qualified medical supervision.

All medication values, routes, concentrations, and dose limits must be verified before real use.

---

## Response Expectations

Security and safety reports will be reviewed as soon as possible.

Confirmed issues may result in:

- Documentation updates
- Medication data corrections
- Dose calculation fixes
- Dependency updates
- New release versions
- Public advisory notes if needed

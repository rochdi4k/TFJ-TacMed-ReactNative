# Security Policy

## Supported Versions

TFJ TacMed React Native is currently in early development.

| Version | Supported |
| ------- | --------- |
| v0.1.x  | Yes       |

Experimental builds, old APKs, and unfinished branches may not receive security updates.

---

## Reporting a Security Issue

Please do **not** open a public GitHub issue for exploitable security problems.

Report security issues privately to the repository owner.

Include:

- A clear description of the issue
- Steps to reproduce it
- Affected files, screens, or features
- Possible impact
- Screenshots or logs if useful
- Suggested fix, if available

---

## What Counts as a Security Issue

Security issues may include:

- Exposure of secrets, tokens, API keys, or signing keys
- Accidental upload of keystore files
- Unsafe dependency vulnerabilities
- Unsafe handling of user data
- App behavior that could cause unsafe medication display
- Calculation bugs affecting dose, volume, vial count, or remaining volume
- Incorrect route handling, such as IV and IM values being mixed
- Missing or misleading safety warnings

---

## Medical Safety Issues

Because this app displays medication-reference calculations, some medical-data bugs are treated as safety issues.

Examples:

- Wrong medication concentration
- Wrong unit conversion
- mg/mcg conversion error
- Incorrect max dose cap
- Incorrect vial or ampule count
- Incorrect remaining-volume result
- IV dose displayed as IM dose
- IM dose displayed as IV dose
- Medication data copied incorrectly from the reference sheet

If you find one of these issues, report it immediately.

---

## Sensitive Data Rules

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

The `.gitignore` file should block common sensitive files, but contributors are still responsible for checking staged files before committing.

---

## Dependency Security

This project uses npm dependencies.

To inspect dependencies:

```bash
npm audit
```

Do not automatically run:

```bash
npm audit fix --force
```

unless you understand the breaking changes.

Forced dependency upgrades can break Expo or React Native compatibility.

---

## APK and Release Security

Do not commit APK or AAB files directly to the source repository.

Use GitHub Releases for APK downloads.

Never upload signing keys, keystore files, or keystore passwords.

Recommended release asset naming:

```text
TFJ-TacMed-v0.1.0.apk
```

---

## Safety Disclaimer

TFJ TacMed is a software reference calculator based on a medication sheet and inspired by Arma 3 Advanced Combat Medicine mod gameplay.

It is not a substitute for official medical protocols, authorized clinical guidance, qualified medical supervision, or real emergency medical training.

All medication values, routes, concentrations, and dose limits must be verified before any real-world use.

---

## Response Expectations

Security and safety reports will be reviewed as soon as possible.

Confirmed issues may result in:

- Medication data corrections
- Dose calculation fixes
- Documentation updates
- Dependency updates
- New releases
- Public advisory notes, if needed

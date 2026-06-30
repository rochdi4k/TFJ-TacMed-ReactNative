# Contributing Guide

Thank you for your interest in contributing to TFJ TacMed React Native.

This project is a React Native / Expo tactical medication calculator focused on route-specific medication calculations, especially where IV and IM doses differ.

Because this app deals with medication reference data, contributions must be careful, documented, and reviewed.

---

## Project Setup

Clone the repository:

```bash
git clone https://github.com/rochdi4k/TFJ-TacMed-ReactNative.git
```

Enter the project folder:

```bash
cd TFJ-TacMed-ReactNative
```

Install dependencies:

```bash
npm install
```

On Windows PowerShell, use:

```bash
npm.cmd install
```

Start Expo:

```bash
npm start
```

or:

```bash
npm.cmd start
```

Run on Android emulator by pressing:

```text
a
```

inside the Expo terminal.

---

## Project Structure

```text
App.tsx
src/data/medications.ts
src/logic/doseCalculator.ts
src/screens/HomeScreen.tsx
src/screens/MedicationDetailScreen.tsx
src/components/MedicationCard.tsx
src/types/medication.ts
assets/
```

---

## Main Files

### `src/data/medications.ts`

Contains medication data.

Edit this file when adding or correcting:

- Medication name
- Use case
- Category
- Contents
- Concentration
- Route dose
- Onset
- Peak
- Duration
- HR / BP / RR effects
- Pain relief label

### `src/logic/doseCalculator.ts`

Contains calculation logic.

Edit this file only when changing how doses, volumes, vial counts, or remaining volumes are calculated.

### `src/types/medication.ts`

Contains TypeScript data types.

Edit this file when adding new fields to the medication model.

---

## Adding a New Medication

Add new medications inside:

```text
src/data/medications.ts
```

Example:

```ts
{
  id: 'example-medication',
  name: 'Example Medication',
  use: 'Example use case',
  category: 'OTHER',
  contentsLabel: '100mg/10mL',
  concentrationLabel: '10mg/mL',
  concentrationMgPerMl: 10,
  vialVolumeMl: 10,
  routeDoses: [
    {
      route: 'IV',
      doseMode: 'WEIGHT_BASED',
      unit: 'MG',
      doseLowPerKg: 0.25,
      doseHighPerKg: 0.5,
      note: 'Sheet: IV 0.25–0.5 mg/kg.'
    }
  ],
  onset: '<30s',
  peak: '~5m',
  duration: '~10m'
}
```

---

## Dose Types

### Fixed Dose

Use when the sheet gives a direct dose.

```ts
{
  route: 'IV',
  doseMode: 'FIXED',
  unit: 'MG',
  fixedDose: 6,
  note: 'Sheet: IV 6 mg.'
}
```

### Fixed Dose Range

Use when the sheet gives a dose range.

```ts
{
  route: 'IM',
  doseMode: 'FIXED',
  unit: 'MG',
  fixedDose: 50,
  fixedDoseHigh: 100,
  note: 'Sheet: IM 50–100 mg.'
}
```

### Weight-Based Dose

Use when the sheet gives a dose per kilogram.

```ts
{
  route: 'IV',
  doseMode: 'WEIGHT_BASED',
  unit: 'MG',
  doseLowPerKg: 0.05,
  doseHighPerKg: 0.1,
  note: 'Sheet: IV 0.05–0.1 mg/kg.'
}
```

### Dose With Minimum and Maximum Limits

Use when the sheet gives both a weight-based value and a dose limit.

```ts
{
  route: 'IV',
  doseMode: 'WEIGHT_BASED',
  unit: 'MG',
  doseLowPerKg: 0.05,
  doseHighPerKg: 0.1,
  minDose: 3.75,
  maxDose: 10,
  note: 'Sheet: IV 0.05–0.1 mg/kg or 3.75–10 mg.'
}
```

---

## Medication Data Rules

Medication changes must include:

- The source of the value
- The route
- The unit
- The concentration
- The vial or ampule volume
- Any min or max dose cap
- A clear note explaining the source value

Do not add medication values from memory.

Do not guess unclear sheet values.

If a value is unclear, mark it for review instead of silently adding it.

---

## Code Style

Use:

- TypeScript
- Clear variable names
- Small functions
- Existing project structure
- Existing dark UI style

Avoid:

- Unused dependencies
- Large unrelated rewrites
- Hardcoded UI hacks
- Removing safety warnings
- Mixing unrelated features in one pull request

---

## Before Submitting a Pull Request

Run:

```bash
npm install
npm start
```

Check that:

- The app starts without errors.
- Search works.
- Category filters work.
- Medication detail screen opens.
- Dose calculations still display.
- The changed medication appears correctly.
- No safety notice was removed.

---

## Pull Request Format

Use this format:

```md
## Summary

Describe what changed.

## Type of Change

- [ ] Bug fix
- [ ] Medication data update
- [ ] UI improvement
- [ ] Calculation logic update
- [ ] Documentation update

## Medical Data Source

List the source used for medication values.

## Testing

Explain how you tested the change.

## Safety Notes

Mention any possible medical-reference concerns.
```

---

## Issues

When opening an issue, include:

- What happened
- What you expected
- Screenshots if possible
- Device or emulator used
- Expo logs
- Medication name, if related
- Weight value used, if related to dose calculation

---

## Security and Safety

Do not submit:

- Real patient data
- Private medical records
- Secrets or API keys
- Keystore files
- Unsafe medication claims

See `SECURITY.md` for security reporting.

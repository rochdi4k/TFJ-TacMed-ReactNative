import { Medication } from '../types/medication';

export const medications: Medication[] = [
  {
    id: 'epinephrine',
    name: 'Epinephrine',
    use: 'Cardiac Arrest',
    category: 'CARDIAC',
    contentsLabel: '1mg/1mL',
    concentrationLabel: '1mg/mL',
    concentrationMgPerMl: 1,
    vialVolumeMl: 1,
    routeDoses: [
      { route: 'IV', doseMode: 'FIXED', unit: 'MG', fixedDose: 1, note: 'Sheet: IV 1 mg.' },
      { route: 'IM', doseMode: 'FIXED', unit: 'MG', fixedDose: 1, note: 'Sheet: IM 1 mg.' }
    ],
    onset: '<5s / <30s',
    peak: '~4m',
    duration: '~6m–7m',
    hrEffect: '++',
    bpEffect: '++',
    rrEffect: '++'
  },
  {
    id: 'morphine',
    name: 'Morphine',
    use: 'Managing severe pain',
    category: 'PAIN',
    contentsLabel: '10mg/2mL',
    concentrationLabel: '5mg/mL',
    concentrationMgPerMl: 5,
    vialVolumeMl: 2,
    routeDoses: [
      { route: 'IV', doseMode: 'WEIGHT_BASED', unit: 'MG', doseLowPerKg: 0.05, doseHighPerKg: 0.1, minDose: 3.75, maxDose: 10, note: 'Sheet: IV 0.05–0.1 mg/kg or 3.75–10 mg.' },
      { route: 'IM', doseMode: 'WEIGHT_BASED', unit: 'MG', doseLowPerKg: 0.07, doseHighPerKg: 0.1, minDose: 2.5, maxDose: 10, note: 'Sheet: IM 0.07–0.1 mg/kg or 2.5–10 mg.' }
    ],
    onset: '<25s / <2m',
    peak: '~15m / ~20m',
    duration: '~21m–30m',
    hrEffect: '-',
    bpEffect: '-',
    rrEffect: '-',
    painRelief: 'STRONG'
  },
  {
    id: 'fentanyl',
    name: 'Fentanyl',
    use: 'Managing severe pain',
    category: 'PAIN',
    contentsLabel: '100mcg/2mL',
    concentrationLabel: '50mcg/mL',
    concentrationMgPerMl: 0.05,
    vialVolumeMl: 2,
    routeDoses: [
      { route: 'IV', doseMode: 'WEIGHT_BASED', unit: 'MCG', doseLowPerKg: 0.5, doseHighPerKg: 1, minDose: 38, maxDose: 100, note: 'Sheet: IV 0.5–1 mcg/kg or 38–100 mcg.' },
      { route: 'IM', doseMode: 'WEIGHT_BASED', unit: 'MCG', doseLowPerKg: 0.7, doseHighPerKg: 1, minDose: 52, maxDose: 100, note: 'Sheet: IM 0.7–1 mcg/kg or 52–100 mcg.' }
    ],
    onset: '<10s / <30s',
    peak: '~14m / ~15m',
    duration: '~16m–20m',
    hrEffect: '-',
    bpEffect: '-',
    rrEffect: '-',
    painRelief: 'VERY STRONG'
  },
  {
    id: 'ketamine',
    name: 'Ketamine',
    use: 'Managing severe pain with compromised breathing ability',
    category: 'PAIN',
    contentsLabel: '500mg/10mL',
    concentrationLabel: '50mg/mL',
    concentrationMgPerMl: 50,
    vialVolumeMl: 10,
    routeDoses: [
      { route: 'IV', doseMode: 'WEIGHT_BASED', unit: 'MG', doseLowPerKg: 0.1, doseHighPerKg: 0.2, minDose: 7.5, maxDose: 21, note: 'Sheet: IV 0.1–0.2 mg/kg or 7.5–21 mg.' },
      { route: 'IM', doseMode: 'WEIGHT_BASED', unit: 'MG', doseLowPerKg: 0.4, doseHighPerKg: 0.8, minDose: 30, maxDose: 84, note: 'Sheet: IM 0.4–0.8 mg/kg or 30–84 mg.' }
    ],
    onset: '<5s / <20s',
    peak: '~9m / ~10m',
    duration: '~11m–15m',
    painRelief: 'STRONG'
  },
  {
    id: 'amiodarone',
    name: 'Amiodarone',
    use: 'Treatment of shockable cardiac arrest (VT/VF)',
    category: 'CARDIAC',
    contentsLabel: '150mg/3mL',
    concentrationLabel: '50mg/mL',
    concentrationMgPerMl: 50,
    vialVolumeMl: 3,
    routeDoses: [{ route: 'IV', doseMode: 'FIXED', unit: 'MG', fixedDose: 300, fixedDoseHigh: 2200, note: 'Sheet: IV 300 mg, up to 2200 mg.' }],
    onset: '<10s',
    peak: '~8m',
    duration: '~12m',
    hrEffect: '-',
    bpEffect: '-'
  },
  {
    id: 'lidocaine',
    name: 'Lidocaine',
    use: 'IV: shockable cardiac arrest (VT/VF). IM: before painful procedures.',
    category: 'CARDIAC',
    contentsLabel: '100mg/5mL',
    concentrationLabel: '20mg/mL',
    concentrationMgPerMl: 20,
    vialVolumeMl: 5,
    routeDoses: [
      { route: 'IV', doseMode: 'WEIGHT_BASED', unit: 'MG', doseLowPerKg: 1, doseHighPerKg: 3, note: 'Sheet: IV 1 mg/kg, up to 3 mg/kg.' },
      { route: 'IM', doseMode: 'FIXED', unit: 'MG', fixedDose: 50, fixedDoseHigh: 100, note: 'Sheet: IM 50–100 mg.' }
    ],
    onset: '<5s / <10s',
    peak: '~6m / ~4m',
    duration: '~10m / ~10m',
    hrEffect: '-',
    bpEffect: '-'
  },
  {
    id: 'txa',
    name: 'TXA',
    use: 'Hemorrhage management',
    category: 'HEMORRHAGE',
    contentsLabel: '1g/10mL',
    concentrationLabel: '100mg/mL',
    concentrationMgPerMl: 100,
    vialVolumeMl: 10,
    routeDoses: [{ route: 'IV', doseMode: 'FIXED', unit: 'MG', fixedDose: 1000, fixedDoseHigh: 2000, note: 'Sheet: IV 1–2 g.' }],
    onset: '<15s',
    peak: '~10m',
    duration: '~15m',
    bpEffect: '-'
  },
  {
    id: 'ondansetron',
    name: 'Ondansetron',
    use: 'Nausea and vomiting',
    category: 'OTHER',
    contentsLabel: '4mg/2mL',
    concentrationLabel: '2mg/mL',
    concentrationMgPerMl: 2,
    vialVolumeMl: 2,
    routeDoses: [
      { route: 'IV', doseMode: 'FIXED', unit: 'MG', fixedDose: 4, fixedDoseHigh: 8, note: 'Sheet: IV 4 mg, up to 8 mg.' },
      { route: 'IM', doseMode: 'FIXED', unit: 'MG', fixedDose: 4, fixedDoseHigh: 8, note: 'Sheet: IM 4 mg, up to 8 mg.' }
    ],
    onset: '<15s / <45s',
    peak: '~10m / ~12m',
    duration: '~12m–15m',
    hrEffect: '-'
  },
  {
    id: 'calcium-chloride',
    name: 'Calcium Chloride',
    use: 'Calcium replacement during blood product use',
    category: 'OTHER',
    contentsLabel: '1g/10mL',
    concentrationLabel: '100mg/mL',
    concentrationMgPerMl: 100,
    vialVolumeMl: 10,
    routeDoses: [{ route: 'IV', doseMode: 'FIXED', unit: 'MG', fixedDose: 1000, note: 'Sheet: 1 g after first unit, then 1 g after every 4 units of blood.' }],
    onset: '<15s',
    peak: '~5m',
    duration: '~10m'
  },
  {
    id: 'esmolol',
    name: 'Esmolol',
    use: 'Heart rate control',
    category: 'CARDIAC',
    contentsLabel: '100mg/10mL',
    concentrationLabel: '10mg/mL',
    concentrationMgPerMl: 10,
    vialVolumeMl: 10,
    routeDoses: [{ route: 'IV', doseMode: 'WEIGHT_BASED', unit: 'MG', doseLowPerKg: 0.25, doseHighPerKg: 0.5, note: 'Sheet: IV 0.25–0.5 mg/kg.' }],
    onset: '<20s',
    peak: '~4m',
    duration: '~5m',
    hrEffect: '-'
  },
  {
    id: 'ertapenem',
    name: 'Ertapenem',
    use: 'Antibiotic',
    category: 'OTHER',
    contentsLabel: '1g/3.2mL',
    concentrationLabel: '312.5mg/mL',
    concentrationMgPerMl: 312.5,
    vialVolumeMl: 3.2,
    routeDoses: [
      { route: 'IV', doseMode: 'FIXED', unit: 'MG', fixedDose: 1000, note: 'Sheet: IV 1 g.' },
      { route: 'IM', doseMode: 'FIXED', unit: 'MG', fixedDose: 1000, note: 'Sheet: IM 1 g.' }
    ],
    onset: '<5s / <30s',
    peak: '~10m / ~15m',
    duration: '~15m / ~20m'
  },
  {
    id: 'adenosine',
    name: 'Adenosine',
    use: 'Tachyarrhythmia management',
    category: 'CARDIAC',
    contentsLabel: '12mg/4mL',
    concentrationLabel: '3mg/mL',
    concentrationMgPerMl: 3,
    vialVolumeMl: 4,
    routeDoses: [{ route: 'IV', doseMode: 'FIXED', unit: 'MG', fixedDose: 6, note: 'Sheet: IV 6 mg.' }],
    onset: '<1m',
    peak: '~25s',
    duration: '<2m',
    hrEffect: '-'
  },
  {
    id: 'atropine',
    name: 'Atropine',
    use: 'Bradycardia / nerve agent exposure',
    category: 'CARDIAC',
    contentsLabel: '1mg/1mL',
    concentrationLabel: '1mg/mL',
    concentrationMgPerMl: 1,
    vialVolumeMl: 1,
    routeDoses: [
      { route: 'IV', doseMode: 'FIXED', unit: 'MG', fixedDose: 1, note: 'Sheet: Bradycardia >1 mg.' },
      { route: 'IM', doseMode: 'FIXED', unit: 'MG', fixedDose: 2, fixedDoseHigh: 4, note: 'Sheet: nerve agent exposure 2–4 mg initial, more if required.' }
    ],
    onset: '<5s / <15s',
    peak: '~10m',
    duration: '~15m',
    hrEffect: '++',
    bpEffect: '+'
  }
];

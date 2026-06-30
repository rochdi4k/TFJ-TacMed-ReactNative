export type MedCategory = 'PAIN' | 'CARDIAC' | 'HEMORRHAGE' | 'OTHER';
export type DoseUnit = 'MG' | 'MCG';
export type DoseMode = 'FIXED' | 'WEIGHT_BASED';

export type RouteDose = {
  route: string;
  doseMode: DoseMode;
  unit: DoseUnit;
  fixedDose?: number;
  fixedDoseHigh?: number;
  doseLowPerKg?: number;
  doseHighPerKg?: number;
  minDose?: number;
  maxDose?: number;
  note?: string;
};

export type Medication = {
  id: string;
  name: string;
  use: string;
  category: MedCategory;
  contentsLabel: string;
  concentrationLabel: string;
  concentrationMgPerMl: number;
  vialVolumeMl: number;
  routeDoses: RouteDose[];
  onset: string;
  peak: string;
  duration: string;
  hrEffect?: string;
  bpEffect?: string;
  rrEffect?: string;
  painRelief?: string;
  warning?: string;
};

export type CalculatedRouteDose = {
  route: string;
  doseText: string;
  volumeText: string;
  vialsText: string;
  remainingText: string;
  note?: string;
};

import { CalculatedRouteDose, Medication, RouteDose } from '../types/medication';

const roundNice = (value: number): string => {
  if (!Number.isFinite(value)) return 'N/A';
  if (Math.abs(value - Math.round(value)) < 0.0001) return String(Math.round(value));
  return value.toFixed(2).replace(/\.00$/, '').replace(/0$/, '');
};

const applyCaps = (value: number, routeDose: RouteDose): number => {
  let result = value;
  if (routeDose.minDose !== undefined) result = Math.max(result, routeDose.minDose);
  if (routeDose.maxDose !== undefined) result = Math.min(result, routeDose.maxDose);
  return result;
};

const getDoseRange = (weightKg: number, routeDose: RouteDose): { low: number; high: number } => {
  if (routeDose.doseMode === 'FIXED') {
    const low = routeDose.fixedDose ?? 0;
    const high = routeDose.fixedDoseHigh ?? low;
    return { low, high };
  }

  const lowPerKg = routeDose.doseLowPerKg ?? 0;
  const highPerKg = routeDose.doseHighPerKg ?? lowPerKg;
  return {
    low: applyCaps(weightKg * lowPerKg, routeDose),
    high: applyCaps(weightKg * highPerKg, routeDose)
  };
};

const doseToMl = (dose: number, routeDose: RouteDose, medication: Medication): number => {
  if (routeDose.unit === 'MG') return dose / medication.concentrationMgPerMl;
  return dose / (medication.concentrationMgPerMl * 1000);
};

export const calculateMedication = (
  medication: Medication,
  weightKg: number
): CalculatedRouteDose[] => {
  return medication.routeDoses.map((routeDose) => {
    const { low, high } = getDoseRange(weightKg, routeDose);
    const unitLabel = routeDose.unit === 'MG' ? 'mg' : 'mcg';

    const doseText =
      Math.abs(low - high) < 0.0001
        ? `Dose: ${roundNice(low)} ${unitLabel}`
        : `Dose: ${roundNice(low)}–${roundNice(high)} ${unitLabel}`;

    const lowMl = doseToMl(low, routeDose, medication);
    const highMl = doseToMl(high, routeDose, medication);

    const volumeText =
      Math.abs(lowMl - highMl) < 0.0001
        ? `Volume needed: ${roundNice(lowMl)} mL`
        : `Volume needed: ${roundNice(lowMl)}–${roundNice(highMl)} mL`;

    const vialsNeeded = Math.max(1, Math.ceil(highMl / medication.vialVolumeMl));
    const remainingMl = Math.max(0, vialsNeeded * medication.vialVolumeMl - highMl);

    return {
      route: routeDose.route,
      doseText,
      volumeText,
      vialsText: `Vials/ampules needed: ${vialsNeeded}`,
      remainingText: `Remaining after max dose: ${roundNice(remainingMl)} mL`,
      note: routeDose.note
    };
  });
};

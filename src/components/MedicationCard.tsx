import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { calculateMedication } from '../logic/doseCalculator';
import { Medication } from '../types/medication';

type Props = {
  medication: Medication;
  weightKg: number;
  onPress: () => void;
};

export function MedicationCard({ medication, weightKg, onPress }: Props) {
  const calculated = calculateMedication(medication, weightKg);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.headerRow}>
        <Text style={styles.name}>{medication.name}</Text>
        <Text style={styles.category}>{medication.category}</Text>
      </View>
      <Text style={styles.use}>{medication.use}</Text>
      <Text style={styles.meta}>{medication.contentsLabel} • {medication.concentrationLabel}</Text>
      <View style={styles.routes}>
        {calculated.map((route) => (
          <View key={route.route} style={styles.routePill}>
            <Text style={styles.routeText}>{route.route}: {route.doseText.replace('Dose: ', '')}</Text>
          </View>
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#111B26', borderRadius: 18, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#233142' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 12, alignItems: 'center' },
  name: { color: '#EAF2FF', fontSize: 20, fontWeight: '800', flex: 1 },
  category: { color: '#8FD7FF', fontSize: 12, fontWeight: '800', borderColor: '#2D7DA5', borderWidth: 1, borderRadius: 999, paddingHorizontal: 8, paddingVertical: 3 },
  use: { color: '#B9C7D6', marginTop: 8, fontSize: 14 },
  meta: { color: '#7E8D9E', marginTop: 8, fontSize: 13 },
  routes: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 },
  routePill: { backgroundColor: '#0B1117', borderColor: '#2A3E52', borderWidth: 1, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6 },
  routeText: { color: '#D5E7F7', fontWeight: '700', fontSize: 12 }
});

import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { medications } from '../data/medications';
import { calculateMedication } from '../logic/doseCalculator';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'MedicationDetail'>;

export function MedicationDetailScreen({ route, navigation }: Props) {
  const { medicationId, weightKg } = route.params;
  const medication = medications.find((item) => item.id === medicationId);

  if (!medication) {
    return <SafeAreaView style={styles.safe}><Text style={styles.error}>Medication not found.</Text></SafeAreaView>;
  }

  const calculated = calculateMedication(medication, weightKg);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{medication.name}</Text>
            <Text style={styles.use}>{medication.use}</Text>
          </View>
          <Image source={require('../../assets/icon.png')} style={styles.icon} />
        </View>

        <View style={styles.infoGrid}>
          <Info label="Contents" value={medication.contentsLabel} />
          <Info label="Concentration" value={medication.concentrationLabel} />
          <Info label="Onset" value={medication.onset} />
          <Info label="Peak" value={medication.peak} />
          <Info label="Duration" value={medication.duration} />
          <Info label="Weight" value={`${weightKg} kg`} />
        </View>

        <Text style={styles.sectionTitle}>Route calculations</Text>

        {calculated.map((item) => (
          <View key={item.route} style={styles.routeCard}>
            <Text style={styles.routeTitle}>{item.route}</Text>
            <Text style={styles.result}>{item.doseText}</Text>
            <Text style={styles.result}>{item.volumeText}</Text>
            <Text style={styles.result}>{item.vialsText}</Text>
            <Text style={styles.result}>{item.remainingText}</Text>
            {!!item.note && <Text style={styles.note}>{item.note}</Text>}
          </View>
        ))}

        <View style={styles.warning}>
          <Text style={styles.warningText}>Software reference only. Verify all medication values against official protocol before real use.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0B1117' },
  container: { padding: 18, paddingBottom: 40 },
  backButton: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, backgroundColor: '#111B26', borderColor: '#263A4E', borderWidth: 1, marginBottom: 14 },
  backText: { color: '#BEE8FF', fontWeight: '800' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 16 },
  name: { color: '#F8FAFC', fontSize: 32, fontWeight: '900' },
  use: { color: '#B9C7D6', marginTop: 6, fontSize: 15 },
  icon: { width: 52, height: 52, borderRadius: 14 },
  infoGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  infoBox: { width: '48%', backgroundColor: '#111B26', borderColor: '#223247', borderWidth: 1, borderRadius: 16, padding: 12 },
  infoLabel: { color: '#7E8D9E', fontSize: 12, fontWeight: '800' },
  infoValue: { color: '#EAF2FF', fontSize: 15, fontWeight: '800', marginTop: 4 },
  sectionTitle: { color: '#F8FAFC', fontSize: 22, fontWeight: '900', marginTop: 20, marginBottom: 10 },
  routeCard: { backgroundColor: '#111B26', borderColor: '#2D7DA5', borderWidth: 1, borderRadius: 18, padding: 16, marginBottom: 12 },
  routeTitle: { color: '#8FD7FF', fontSize: 20, fontWeight: '900', marginBottom: 8 },
  result: { color: '#EAF2FF', fontSize: 16, fontWeight: '700', marginTop: 4 },
  note: { color: '#94A3B8', fontSize: 13, marginTop: 12, lineHeight: 18 },
  warning: { backgroundColor: '#2A1C0A', borderColor: '#A16207', borderWidth: 1, borderRadius: 18, padding: 14, marginTop: 12 },
  warningText: { color: '#FDE68A', fontWeight: '700', lineHeight: 20 },
  error: { color: '#F8FAFC', padding: 24, fontSize: 18 }
});

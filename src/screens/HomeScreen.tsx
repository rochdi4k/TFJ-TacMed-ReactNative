import React, { useMemo, useState } from 'react';
import { FlatList, Image, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MedicationCard } from '../components/MedicationCard';
import { medications } from '../data/medications';
import { MedCategory } from '../types/medication';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const categories: Array<'ALL' | MedCategory> = ['ALL', 'PAIN', 'CARDIAC', 'HEMORRHAGE', 'OTHER'];

export function HomeScreen({ navigation }: Props) {
  const [weightText, setWeightText] = useState('80');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'ALL' | MedCategory>('ALL');

  const weightKg = Number(weightText.replace(',', '.')) || 80;

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return medications.filter((medication) => {
      const matchesCategory = category === 'ALL' || medication.category === category;
      const routeText = medication.routeDoses.map((route) => route.route).join(' ');
      const searchable = [medication.name, medication.use, medication.category, medication.contentsLabel, medication.concentrationLabel, routeText].join(' ').toLowerCase();
      return matchesCategory && (!normalized || searchable.includes(normalized));
    });
  }, [query, category]);

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.select({ ios: 'padding', android: undefined })}>
        <View style={styles.titleRow}>
          <View>
            <Text style={styles.title}>TacMed Calculator</Text>
            <Text style={styles.subtitle}>Route-specific medication calculator</Text>
          </View>
          <Image source={require('../../assets/icon.png')} style={styles.icon} />
        </View>

        <View style={styles.panel}>
          <Text style={styles.label}>Patient weight / kg</Text>
          <TextInput value={weightText} onChangeText={setWeightText} keyboardType="decimal-pad" style={styles.input} placeholder="80" placeholderTextColor="#64748B" />

          <Text style={styles.label}>Search</Text>
          <TextInput value={query} onChangeText={setQuery} style={styles.input} placeholder="Morphine, pain, IV, cardiac..." placeholderTextColor="#64748B" />

          <View style={styles.categoryRow}>
            {categories.map((item) => (
              <Pressable key={item} onPress={() => setCategory(item)} style={[styles.categoryButton, category === item && styles.categoryButtonActive]}>
                <Text style={[styles.categoryText, category === item && styles.categoryTextActive]}>{item}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <MedicationCard medication={item} weightKg={weightKg} onPress={() => navigation.navigate('MedicationDetail', { medicationId: item.id, weightKg })} />
          )}
          ListEmptyComponent={<Text style={styles.empty}>No medication found.</Text>}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0B1117' },
  container: { flex: 1, paddingHorizontal: 18 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 18 },
  title: { color: '#F8FAFC', fontSize: 28, fontWeight: '900' },
  subtitle: { color: '#94A3B8', marginTop: 4, fontSize: 14 },
  icon: { width: 46, height: 46, borderRadius: 12 },
  panel: { backgroundColor: '#111B26', borderColor: '#223247', borderWidth: 1, borderRadius: 20, padding: 14, marginBottom: 12 },
  label: { color: '#CBD5E1', fontWeight: '800', marginBottom: 8, marginTop: 4 },
  input: { backgroundColor: '#0B1117', borderColor: '#263A4E', borderWidth: 1, borderRadius: 14, color: '#E2E8F0', paddingHorizontal: 14, paddingVertical: 12, marginBottom: 10, fontSize: 16 },
  categoryRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
  categoryButton: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, backgroundColor: '#0B1117', borderColor: '#263A4E', borderWidth: 1 },
  categoryButtonActive: { backgroundColor: '#1E6B93', borderColor: '#38BDF8' },
  categoryText: { color: '#94A3B8', fontWeight: '800', fontSize: 12 },
  categoryTextActive: { color: '#FFFFFF' },
  list: { paddingBottom: 28 },
  empty: { color: '#CBD5E1', textAlign: 'center', marginTop: 32 }
});

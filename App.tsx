import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { MedicationDetailScreen } from './src/screens/MedicationDetailScreen';

export type RootStackParamList = {
  Home: undefined;
  MedicationDetail: {
    medicationId: string;
    weightKg: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#0B1117' } }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MedicationDetail" component={MedicationDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

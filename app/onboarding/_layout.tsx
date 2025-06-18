// app/onboarding/_layout.tsx
import { Stepper } from '@/components/auth/stepper';
import { Colors } from '@/constants/Colors';
import { FormProvider } from '@/context/formContext';
import { Slot, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

export default function OnboardingLayout() {
  const segments = useSegments();
  const currentStep = parseInt(segments[segments.length - 1]) || 1;

  return (
    <FormProvider>
       <StatusBar  backgroundColor={Colors.light.background} />
      <View style={styles.container}>
       
        <Slot />
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});

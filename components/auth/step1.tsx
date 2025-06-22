import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import InputField from '@/components/ui/InputField';
import { SelectDropdown } from '@/components/ui/select';
import CustomButton from '@/components/ui/CustomButton';
import { Stepper } from './stepper';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { Routes } from '@/routes';

const screenHeight = Dimensions.get('window').height;
export default function Step1() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
  });

  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
     <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({ ios: 'padding', android: undefined })}
      >
        <View style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
      <ThemedText fontFamily='raleway' style={styles.title}>Personal Information</ThemedText>
      <ThemedText fontFamily='raleway' style={styles.subtitle}>Let us know you even better</ThemedText>
      <Stepper step={1} />
      </View>
     
<ScrollView contentContainerStyle={styles.scrollContent}>
      <InputField
        label="First name"
        required
        value={form.firstName}
        onChangeText={(text) => handleChange('firstName', text)}
      />
      <InputField
        label="Last name"
        required
        value={form.lastName}
        onChangeText={(text) => handleChange('lastName', text)}
      />
      <InputField
        label="Date of birth"
        required
        value={form.dob}
        onChangeText={(text) => handleChange('dob', text)}
      />
      <SelectDropdown
        label="Gender"
        value={form.gender}
        options={['Male', 'Female', 'Other']}
        onSelect={(value) => handleChange('gender', value)}
      />
      </ScrollView>

      <CustomButton text="Continue" onPress={() => router.push(Routes.onboarding.step2)} />
        
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.light.background,
    display:'flex',
    justifyContent:'space-between', 
    width:'100%', paddingVertical:60,
        height: screenHeight ,
  },
   scrollContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.light['black-01'],
    marginBottom: 20,
  },
});

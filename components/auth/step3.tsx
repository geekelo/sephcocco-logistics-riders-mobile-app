import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import { useRouter } from 'expo-router';
import InputField from '@/components/ui/InputField';
import { SelectDropdown } from '@/components/ui/select';
import CustomButton from '@/components/ui/CustomButton';
import { Stepper } from './stepper';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { Feather } from '@expo/vector-icons';
import { SuccessModal } from '@/components/modal/successModal';
import { Platform } from 'react-native';
import { Routes } from '@/routes';


const screenHeight = Dimensions.get('window').height - 100;
export default function Step3() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

 const handleSubmit = () => {
  if (!acceptedTerms) {
    alert('Please accept the Terms & Conditions to proceed.');
    return;
  }

  setShowModal(true); // Show modal instead of navigating
};


  return (
     <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.select({ ios: 'padding', android: undefined })}
          >
    <View style={styles.scrollContent}>
  <View style={styles.container}>
    
    {/* Header */}
    <View style={{ alignItems: 'center' }}>
      <ThemedText fontFamily="raleway" style={styles.title}>Personal Information</ThemedText>
      <ThemedText fontFamily="raleway" style={styles.subtitle}>Let us know you even better</ThemedText>
      <Stepper step={3} />
    </View>

    {/* Body (form + terms + button) */}
    <View style={styles.body}>
      <View style={{ gap: 10 }}>
        <InputField
          label="Emergency contact:"
          required
          value={form.firstName}
          onChangeText={(text) => handleChange('firstName', text)}
        />
        <InputField
          label="Emergency contact:"
          required
          value={form.lastName}
          onChangeText={(text) => handleChange('lastName', text)}
        />
      </View>

      <TouchableOpacity
        onPress={() => setAcceptedTerms(!acceptedTerms)}
        style={styles.checkboxRow}
      >
        <Feather
          name={acceptedTerms ? 'check-square' : 'square'}
          size={20}
          color={Colors.light.text}
        />
        <ThemedText style={styles.termsText}>
          Before completing your registration, please review and accept the{' '}
          <ThemedText style={{ textDecorationLine: 'underline' }}>Sephcoco Terms & Conditions</ThemedText> to proceed.
        </ThemedText>
      </TouchableOpacity>

      <CustomButton text="Submit" onPress={handleSubmit} />
    </View>

    {/* Success Modal */}
    <SuccessModal
      visible={showModal}
      onClose={() => {
        setShowModal(false);
        router.push(Routes.auth.login);
      }}
      image={require('@/assets/images/Group 6476.png')}
      title="Success!"
      message="Expect to be contacted in a few days"
      buttonText="Done"
    />
  </View>
</View>
</KeyboardAvoidingView>

  );
}
const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
 container: {
    paddingHorizontal: 20,
    backgroundColor: Colors.light.background,
    display:'flex',
    justifyContent:'space-between', 
    width:'100%', paddingVertical:30,
        height: screenHeight ,
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 24,
    paddingVertical: 0,
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
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  termsText: {
    flex: 1,
    color: Colors.light['black-01'],
    fontSize: 13,
  },
});

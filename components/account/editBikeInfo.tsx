import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';
import InputField from '@/components/ui/InputField';
import PageTemplate from './pageTemplate';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/ui/CustomButton';

const EditBikeInfo = () => {
  const router = useRouter();

  const handleSubmit = () => {
    console.log('Password change requested');
  };

  return (
    <View style={styles.container}>
      <PageTemplate title="Edit Personal Information" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.form}>
          <InputField label="Bike Model" placeholder="Enter your bike model" />
          <InputField label="Bike Color" placeholder="Enter your bike color" />
          <InputField label="Phonenumber" placeholder="Enter your phone number" />
          <InputField label="Bike Type" placeholder="Enter your bike type" />
          <InputField label="Bike Registration Number" placeholder="Enter registration number" />
          <InputField label="License Number" placeholder="Enter license number" />
          <InputField label="License Expiry Date" placeholder="Enter expiry date" />

          <View style={styles.submitButton}>
            <CustomButton onPress={handleSubmit} text="Upload New Document" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditBikeInfo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 30,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  submitButton: {
    marginTop: 10,
  },
});

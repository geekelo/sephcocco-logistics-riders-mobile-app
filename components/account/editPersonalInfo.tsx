import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import { Colors } from '@/constants/Colors';
import InputField from '@/components/ui/InputField';
import PageTemplate from './pageTemplate';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/ui/CustomButton';

const EditPersonalInfo = () => {
  const router = useRouter();

  const handleSubmit = () => {
    // TODO: Add form validation and API call
    console.log('Password change requested');
  };

  return (
    <View style={styles.container}>
      <PageTemplate title="Edit Personal Information" />
      <View style={styles.form}>
        <InputField
        label='Username'
          placeholder="Enter your username "
         
          
        />
        <InputField
        label='Phonenumber'
          placeholder="Enter your phonenumber"
         
        />
        <InputField
         label='Address'
          placeholder="Enter your address"
          
        />
        <View style={styles.submitButton}>
       <CustomButton onPress={handleSubmit} text='Upload New Document' />
       </View>
      </View>
    </View>
  );
};

export default EditPersonalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
   
    paddingTop: 30,
    
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  submitButton: {
    marginTop: 10,
    
  },
  
});

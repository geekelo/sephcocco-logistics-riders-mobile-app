import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import { Colors } from '@/constants/Colors';
import InputField from '@/components/ui/InputField';
import PageTemplate from './pageTemplate';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/ui/CustomButton';

const ChangePassword = () => {
  const router = useRouter();

  const handleSubmit = () => {
    // TODO: Add form validation and API call
    console.log('Password change requested');
  };

  return (
    <View style={styles.container}>
      <PageTemplate title="Change Password" />
      <View style={styles.form}>
        <InputField
        
          placeholder="Enter old password"
          required
          secureTextEntry
        />
        <InputField
        
          placeholder="Enter new password"
          required
          secureTextEntry
        />
        <InputField
         
          placeholder="Confirm new password"
          required
          secureTextEntry
        />
        <View style={styles.submitButton}>
        <CustomButton onPress={handleSubmit} text='Save' />
       </View>
      </View>
    </View>
  );
};

export default ChangePassword;

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

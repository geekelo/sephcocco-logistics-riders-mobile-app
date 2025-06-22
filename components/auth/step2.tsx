import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import InputField from '@/components/ui/InputField';
import CustomButton from '@/components/ui/CustomButton';
import { Stepper } from './stepper';
import { Colors } from '@/constants/Colors';
import { SelectDropdown } from '@/components/ui/select';
import * as ImagePicker from 'expo-image-picker'; 
import { UploadBox } from './uploadBox';
import { ThemedText } from '@/components/ThemedText';
import { Routes } from '@/routes';


const screenHeight = Dimensions.get('window').height;
export default function Step2() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    phone: '',
    address: '',
    bike_type:'',
    bike_year:'',
    plate_no:'',
    lic_no:'',
    bike_col:''
  });
const [uploads, setUploads] = useState({
  license: '',
  front: '',
  side: '',
  back:'',
  right:'',
  left:''
});

const handleUpload = async (key: keyof typeof uploads) => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
  });

  if (!result.canceled && result.assets?.length) {
    setUploads((prev) => ({ ...prev, [key]: result.assets[0].uri }));
  }
};
  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
     <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.select({ ios: 'padding', android: undefined })}
          >
    <ScrollView contentContainerStyle={styles.container}>
          <View style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
      <ThemedText style={styles.title}>Documents Upload</ThemedText>
      <ThemedText style={styles.subtitle}>Let us know you even better</ThemedText>
      <Stepper step={2} />
</View>
<View style={{gap:14, flex:1}}>
<SelectDropdown
        label="Bike Type"
        value={form.bike_type}
        options={['','Male', 'Female', 'Other']}
        onSelect={(value) => handleChange('bike_type', value)}
      />
      <SelectDropdown
        label="Bike Year"
        value={form.bike_year}
        options={['','Male', 'Female', 'Other']}
        onSelect={(value) => handleChange('bike_year', value)}
        helperText='Enter the year your car was manufactured. Your Bike must not be older than 10 years'
      />
      <InputField
        label="Bike Color:"
        required
        keyboardType="default"
        value={form.bike_col}
        onChangeText={(text) => handleChange('bike_col', text)}
      />
      <InputField
        label="Plate Number:"
        required
        keyboardType="phone-pad"
        value={form.phone}
        onChangeText={(text) => handleChange('plate_no', text)}
      />
      <InputField
        label="Driver’s license number:"
        required
         keyboardType="phone-pad"
        value={form.address}
        onChangeText={(text) => handleChange('lic_no', text)}
        helperText='If you’re a Car driver, add your license number on your driver’s license, if you’re a Motorbike or Tricycle driver, add your National ID number.'
      />
<View>
   <View style={styles.boxcontainer}>
      <ThemedText style={styles.boxtitle}>Document Upload</ThemedText>
      <View style={styles.line} />
    </View>
<View style={styles.gridContainer}>
  <View style={styles.uploadBox}>
    <UploadBox label="License" image={uploads.license} onPress={() => handleUpload('license')} />
  </View>
  <View style={styles.uploadBox}>
    <UploadBox label="Front View" image={uploads.front} onPress={() => handleUpload('front')} />
  </View>
  <View style={styles.uploadBox}>
    <UploadBox label="Side View" image={uploads.side} onPress={() => handleUpload('side')} />
  </View>
  <View style={styles.uploadBox}>
    <UploadBox label="Back View" image={uploads.back} onPress={() => handleUpload('back')} />
  </View>
  <View style={styles.uploadBox}>
    <UploadBox label="Right View" image={uploads.right} onPress={() => handleUpload('right')} />
  </View>
  <View style={styles.uploadBox}>
    <UploadBox label="Left View" image={uploads.left} onPress={() => handleUpload('left')} />
  </View>
</View>
</View>


</View>
<View style={{marginVertical:40}}>
      <CustomButton text="Continue" onPress={() => router.push(Routes.onboarding.step3)} />
        </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
   container: {
    paddingHorizontal:10,
     backgroundColor: Colors.light.background,
     display:'flex',
     justifyContent:'space-between', 
     width:'100%', paddingVertical:30
   },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
    gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    
   
  },
  uploadBox: {
    width: '50%', // Half of the parent width
    paddingVertical: 18,    // Optional spacing
  },
  boxcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  boxtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginRight: 6,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
});

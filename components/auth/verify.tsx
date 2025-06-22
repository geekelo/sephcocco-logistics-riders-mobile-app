import React, { useRef, useState } from 'react';
import {
  View,

  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import CustomButton from '@/components/ui/CustomButton';
import { ThemedText } from '@/components/ThemedText';
import { Dimensions } from 'react-native';
import { Routes } from '@/routes';

const OTP_LENGTH = 6;
const screenWidth = Dimensions.get('window').width -50;
const screenHeight = Dimensions.get('window').height;
const boxSpacing = 10; // space between boxes
const totalSpacing = boxSpacing * (OTP_LENGTH - 1);
const otpBoxWidth = (screenWidth - 28 * 2 - totalSpacing) / OTP_LENGTH; // paddingHorizontal = 24 * 2


export default function VerifyEmailScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (index < OTP_LENGTH - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleBackspace = (index: number) => {
    if (otp[index] === '') {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
      }
    } else {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleSubmit = () => {
    const code = otp.join('');
    if (code.length === OTP_LENGTH) {
      console.log('Submitted OTP:', code);
      // router.replace('/(auth)/success'); // or handle verification
      router.push(Routes.onboarding.step1)
    } else {
      alert('Please enter the full 6-digit code');
    }
  };

  return (
  <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.select({ ios: 'padding', android: undefined })}
  >
    <View style={styles.content}>
      <ThemedText fontFamily='raleway' style={styles.header}>
        Verify Your Email
      </ThemedText>
      <ThemedText style={styles.subHeader}>
        Enter the 6-digit code we sent to your email address
      </ThemedText>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(index);
              }
            }}
            ref={(ref) => {
              inputRefs.current[index] = ref;
            }}
            autoFocus={index === 0}
          />
        ))}
      </View>
    </View>

    {/* Absolute Positioned Button */}
    <View style={styles.buttonWrapper}>
      <CustomButton text="Verify" onPress={handleSubmit} />
    </View>
  </KeyboardAvoidingView>
);
}
const styles = StyleSheet.create({
  container: {
    height: screenHeight ,
    backgroundColor: Colors.light.background,
  },
  content: {
   
    paddingHorizontal: 24,
    paddingTop: 120,
  },
  buttonWrapper: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.light['black-01'],
    marginBottom: 32,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  otpInput: {
    width: otpBoxWidth,
    height: 55,
    borderWidth: 0.5,
    borderColor: Colors.light.borderorange,
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: Colors.light.text,
    padding:7
  },
});

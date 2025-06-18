// components/ui/UploadBox.tsx
import React from 'react';
import { TouchableOpacity,  StyleSheet, View, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';

const screenWidth = Dimensions.get('window').width;
const boxWidth = (screenWidth - 60) / 2.5; // adjust spacing as needed

interface UploadBoxProps {
  label: string;
  onPress: () => void;
  image?: string;
}

export const UploadBox: React.FC<UploadBoxProps> = ({ label, onPress, image }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <LinearGradient
        colors={['#F93A01', '#000000']}
        style={styles.gradientBorder}
      >
        <View style={[styles.innerBox, { width: boxWidth }]}>
          {image ? (
            <Image source={{ uri: image }} style={styles.uploadedImage} />
          ) : (
            <View style={styles.placeholder}>
              <Feather name="plus" size={20} color="#FFF" />
            </View>
          )}
        </View>
      </LinearGradient>
      <ThemedText style={styles.label}>{label}</ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  gradientBorder: {
    padding: 1,
    borderRadius: 9,
  },
  innerBox: {
    height: 100,
    backgroundColor: Colors.light.background,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Colors.light.text,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 9,
  },
  label: {
    fontSize: 12,
    color: Colors.light['black-01'],
    marginTop: 6,
  },
});

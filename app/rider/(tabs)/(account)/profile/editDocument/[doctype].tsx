import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '@/components/ui/CustomButton';
import { Colors } from '@/constants/Colors';

const docTitles: Record<string, string> = {
  'driving-license': 'Driving License',
  'bike-ownership': 'Bike Proof of Ownership',
  'bike-front': 'Bike Front View',
  'bike-right': 'Bike Right View',
  'bike-left': 'Bike Left View',
};

const DocumentDetailPage = () => {
  const { docType, title } = useLocalSearchParams<{ docType: string; title: string }>();
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!res.canceled && res.assets.length > 0) {
      setImage(res.assets[0].uri);
      // TODO: Upload logic here
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>{title || "Document"}</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Image
          source={
            image
              ? { uri: image }
              : require('@/assets/images/logo.png') // Placeholder
          }
          style={styles.image}
        />
        <CustomButton
          text="Upload New Document"
          style={{ width: '100%', marginTop: 40 }}
          onPress={pickImage}
        />
      </View>
    </View>
  );
};

export default DocumentDetailPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    borderRadius: 10,
    backgroundColor: '#EEE',
  },
});

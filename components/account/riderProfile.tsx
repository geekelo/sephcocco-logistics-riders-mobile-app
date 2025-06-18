import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import ProfileHeader from './profileHeader';
import ProfileStats from './profileStat';
import InfoSection from './infoSection';
import DocumentGrid from './documentGrid';

const RiderProfile = () => {
  const personalInfo = {
    Username: 'John1235',
    'Phone number': '+234 12345678',
    'Last login': '20/03/2025',
    'Registration date': '12/03/2024',
    "Rider's ID": 'IY-12345',
    Address: 'No. 8 akintoye street,Lokogoma, Abuja.',
    Ratings: '4.9 (531 reviews)',
    Gender: 'Male',
  };

  const bikeInfo = {
    'Bike model': 'Toyota Camry 2021',
    'Vehicle Color': 'Blue',
    'Plate Number': 'ABC-123-XY',
    'Bike Type': 'Hybrid',
    'Bike Age': '5 years old (2021 Model)',
    'Bike Reg Number': 'REG-CA-2024-4567',
    'License Number': 'ABC123456789',
    'License Expiry Date': 'May 20, 2026',
  };

  const documents = [
    { name: "Driver's License", uri: require('@/assets/images/logo.png'), date: '2 March 2025, 1:00pm' },
    { name: 'Profile Picture', uri: require('@/assets/images/logo.png'), date: '2 March 2025, 1:00pm' },
    { name: 'Bike Front View', uri: require('@/assets/images/logo.png'), date: '2 March 2025, 1:00pm' },
    { name: 'Bike Back View', uri: require('@/assets/images/logo.png'), date: '2 March 2025, 1:00pm' },
    { name: 'Bike Left View', uri: require('@/assets/images/logo.png'), date: '2 March 2025, 1:00pm' },
    { name: 'Bike Right View', uri: require('@/assets/images/logo.png'), date: '2 March 2025, 1:00pm' },
  ];

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <View style={{marginHorizontal:60}}>
      <ProfileStats />
      <InfoSection title="Personal Information" info={personalInfo} onEdit={() => router.push('/rider/(tabs)/(account)/profile/editPersonal')} />
      <InfoSection title="Bike Information" info={bikeInfo} onEdit={() => router.push('/rider/(tabs)/(account)/profile/editBike')} />
      <DocumentGrid documents={documents} onEdit={() => router.push('/rider/(tabs)/(account)/profile/editDocument/index')} />
   </View>
    </ScrollView>
  );
};

export default RiderProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
});

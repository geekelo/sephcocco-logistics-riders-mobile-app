import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProfileStats = () => {
  const stats = [
    { label: 'Total Rides', value: '600' },
    { label: 'This Month', value: '600' },
    { label: 'Today', value: '15' },
  ];

  return (
    <View style={styles.container}>
      {stats.map(({ label, value }, index) => (
        <View key={label} style={styles.statWrapper}>
          <View style={styles.stat}>
            <ThemedText style={styles.value}>{value}</ThemedText>
            <ThemedText style={styles.label}>{label}</ThemedText>
          </View>

          {/* Show slant divider except after the last item */}
          {index < stats.length - 1 && <View style={styles.slant} />}
        </View>
      ))}
    </View>
  );
};

export default ProfileStats;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth:1,
    borderColor:'rgba(0, 0, 0, 0.16)',
    padding:20,
    marginVertical:30
  },
  statWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    alignItems: 'center',
    gap: 3,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Raleway',
  },
  label: {
    color: 'rgba(0, 0, 0, 0.85)',
    fontSize: 14,
  },
  slant: {
    height: 50,
    width: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginHorizontal: 70,
    transform: [{ rotate: '20deg' }],
  },
});

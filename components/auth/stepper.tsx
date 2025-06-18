import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/ThemedText';

const SCREEN_WIDTH = Dimensions.get('window').width - 150;
const STEP_COUNT = 3;
const CIRCLE_SIZE = 30;
const TOTAL_GAP = 16 * (STEP_COUNT - 1);
const lineWidth = (SCREEN_WIDTH - (STEP_COUNT * CIRCLE_SIZE) - TOTAL_GAP) / (STEP_COUNT - 1);

export const Stepper = ({ step }: { step: number }) => {
  return (
    <View style={styles.stepContainer}>
      {[1, 2, 3].map((s) => (
        <View key={s} style={styles.stepWrapper}>
          {/* Gradient Circle */}
          <LinearGradient
            colors={step >= s ? ['#F93A01', '#000000'] : ['#ccc', '#ccc']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.circle}
          >
            <ThemedText style={styles.stepText}>{s}</ThemedText>
          </LinearGradient>

          {/* Connecting Line */}
          {s < STEP_COUNT && <View style={[styles.line, { width: lineWidth }]} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop:20
  },
  stepWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    color: '#fff',
   fontSize:18
  },
  line: {
    height: 2,
    backgroundColor: '#E1E1E1',
    marginHorizontal: 8,
  },
});

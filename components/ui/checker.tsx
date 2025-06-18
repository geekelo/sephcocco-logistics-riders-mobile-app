import React from 'react';
import { Pressable, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { ThemedText } from '../ThemedText';

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  size?: number; // Optional prop to allow size scaling
  color?: string; // Optional color for checked state
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onToggle,
  style,
  disabled = false,
  size = 24,
  color = '#ff6b35',
}) => {
  return (
    <Pressable
      onPress={onToggle}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      style={[
        styles.checkboxBase,
        {
          width: size,
          height: size,
          borderRadius: size / 4,
          borderColor: checked ? color : '#ccc',
          backgroundColor: checked ? color : '#fff',
        },
        style,
      ]}
    >
      {checked && <ThemedText style={[styles.checkmark, { fontSize: size * 0.75 }]}>✓</ThemedText>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
  },
  checkmark: {
    color: '#fff',
    fontWeight: '700',
  },
});

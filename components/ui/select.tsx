import { Colors } from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View,  StyleSheet, Pressable, useColorScheme } from 'react-native';
import { ThemedText } from '../ThemedText';

interface Props {
  label: string;
  value: string;
  options: string[];
  onSelect: (value: string) => void;
   helperText?: string;
}

export const SelectDropdown = ({ label, value, options, onSelect, helperText }: Props) => {
     const colorScheme = useColorScheme();
      const theme = Colors[colorScheme ?? 'light'];
  return (
    <View style={{ marginBottom: 20 }}>
      <ThemedText style={styles.label}>{label}<ThemedText style={{ color: 'red' }}>*</ThemedText></ThemedText>
      <Pressable style={styles.dropdown} onPress={() => console.log('Open picker')}>
        <ThemedText style={{color:Colors.light.placeholder}}>{value || `Select ${label}`}</ThemedText>
        <ThemedText><Feather name='chevron-down' size={20} color={Colors.light.lightgray} /></ThemedText>
      </Pressable>
       {helperText && (
              <ThemedText style={[styles.helperText, { color: theme.gray }]}>{helperText}</ThemedText>
            )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: { marginBottom: 6, fontWeight: '600',
    fontSize: 12,
    fontFamily: 'PTSerif-Regular',
    color:Colors.light.text },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.4,
    borderColor: Colors.light.gray,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.light.background,
   
  },
  helperText: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: 'PTSerif-Regular',
  },
});

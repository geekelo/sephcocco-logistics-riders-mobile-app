import React from 'react';
import {
  StyleSheet,
 
  TouchableOpacity,
  useColorScheme,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '../ThemedText';

interface Props {
  text: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean; // ✅ New disabled prop
}

const CustomButton: React.FC<Props> = ({ text, onPress, style, textStyle, disabled }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? theme.placeholder : theme.orange },
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <ThemedText style={[styles.buttonText, disabled && styles.disabledText, textStyle]}>
        {text}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 6.4,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'PTSerif-Regular',
    color: '#fff',
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#eee',
  },
});

export default CustomButton;

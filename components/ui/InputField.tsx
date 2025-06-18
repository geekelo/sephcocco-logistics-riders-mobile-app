import React, { useState } from 'react';
import {
  StyleSheet,
 
  TextInput,
  View,
  TextInputProps,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '../ThemedText';

interface Props extends TextInputProps {
  label?: string;
  required?: boolean;
  icon?: React.ReactNode;
  helperText?: string;
  leftAddon?: string; // ✅ new prop
}

const InputField: React.FC<Props> = ({
  label,
  required = false,
  icon,
  secureTextEntry,
  helperText,
  leftAddon,
  ...props
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const [hidePassword, setHidePassword] = useState(secureTextEntry);

  return (
    <View style={styles.wrapper}>
      {label && (
        <ThemedText type="default" style={[styles.label, { color: theme.text }]}>
          {label} {required && <ThemedText style={{ color: 'red' }}>*</ThemedText>}
        </ThemedText>
      )}

      <View style={[styles.inputContainer, { borderColor: theme.inputBorder }]}>
        {icon && <View style={styles.icon}>{icon}</View>}

        {leftAddon && (
          <View style={styles.leftAddonContainer}>
            <ThemedText style={[styles.leftAddonText, { color: theme.text }]}>{leftAddon}</ThemedText>
            <View style={[styles.separator, { backgroundColor: theme.inputBorder }]} />
          </View>
        )}

        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholderTextColor={theme.placeholder}
          secureTextEntry={secureTextEntry ? hidePassword : false}
          {...props}
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} style={styles.eyeIcon}>
            <Feather
              name={hidePassword ? 'eye' : 'eye-off'}
              size={16}
              color='#98A1B3'
            />
          </TouchableOpacity>
        )}
      </View>

      {helperText && (
        <ThemedText style={[styles.helperText, { color: theme.gray }]}>{helperText}</ThemedText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 4,
    fontWeight: '600',
    fontSize: 12,
    fontFamily: 'PTSerif-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.33,
    borderRadius: 5,
    paddingHorizontal: 12,
    backgroundColor: 'transparent',
    borderColor:'#E6E7EE'
  },
  icon: {
    marginRight: 8,
  },
  leftAddonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  leftAddonText: {
    fontSize: 14,
    fontWeight: '500',
    paddingRight: 10,
    fontFamily: 'PTSerif-Regular',
  },
  separator: {
    width: 1,
    height: 50,
    marginRight: 8,
      backgroundColor:'#E6E7EE',
        borderColor:'#E6E7EE'
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 14,
  },
  eyeIcon: {
    paddingLeft: 8,
  },
  helperText: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: 'PTSerif-Regular',
  },
});

export default InputField;

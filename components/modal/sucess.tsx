import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  useColorScheme,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '../ThemedText';
import CustomButton from '../ui/CustomButton';

interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
  onButtonPress: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ visible, onClose, onButtonPress }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header Row */}
          <View style={styles.modalHeaderRow}>
            <Image source={require('@/assets/images/SEPHCOCO LOUNGE 3.png')} style={styles.logo} />
            <TouchableOpacity onPress={onClose} style={styles.iconCircle}>
              <Ionicons name="close" size={20} color={theme.text} />
            </TouchableOpacity>
          </View>

          {/* Title */}
          <ThemedText fontFamily='Raleway-Bold' style={styles.successTitle}>
           Payment Successful
          </ThemedText>

          {/* Message */}
          <ThemedText fontFamily='Raleway-Regular' style={[styles.successText, { color: theme.gray }]}>
           Your payment has been completed. You can check the "Pending Orders" Page to view the current status of your order.
          </ThemedText>

          {/* Full-width Button */}
          <CustomButton
            text="Go to Pending Orders"
            onPress={onButtonPress}
            style={{ width: '100%', marginTop: 24 }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 8,
    padding: 34,
    alignItems: 'center',
    elevation: 4,
    marginHorizontal:'auto'
  },
  modalHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderColor: Colors.light.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.4,
  },
  successTitle: {
    fontSize: 14,
    fontWeight: 600,
    textAlign: 'center',
    marginVertical: 12,
    color: '#000',
    textDecorationLine:"underline",
    paddingTop:36
  },
  successText: {
    fontSize: 9,
    textAlign: 'center',
    lineHeight: 22,
    fontWeight:500
  },
});


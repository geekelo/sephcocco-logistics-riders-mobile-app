import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
 
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CustomButton from '../ui/CustomButton';
import { Colors } from '../../constants/Colors';
import { ThemedText } from '../ThemedText';

interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
  image?: any;
  title: string;
  message: string;
  buttonText: string;
}

const screenWidth = Dimensions.get('window').width;

export const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  onClose,
  image,
  title,
  message,
  buttonText,
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          {image && (
            <Image source={image} style={styles.image} resizeMode="contain" />
          )}
          <ThemedText style={styles.title}>{title}</ThemedText>
          <ThemedText style={styles.message}>{message}</ThemedText>
          <CustomButton style={{width:'100%', marginVertical:12}} text={buttonText}  onPress={onClose} />
         
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    width: screenWidth * 0.8,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 10,
  },
  message: {
    fontSize: 13,
    color: Colors.light['gray-500'],
    textAlign: 'center',
    marginBottom: 20,
    fontWeight:500
  },
 
});

import React, { useState } from "react";
import {
  Modal,
  View,
  
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/ui/CustomButton";
import { ThemedText } from "@/components/ThemedText";

interface OrderNumberModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (orderNumber: string) => void;
}

const OrderNumberModal: React.FC<OrderNumberModalProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const [orderNumber, setOrderNumber] = useState("");

  const handlePress = () => {
    onSubmit(orderNumber);
    setOrderNumber("");
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <Pressable style={styles.backdrop} onPress={onClose} />
      <View style={styles.modalContainer}>
        <ThemedText style={styles.title}>Input Order Number</ThemedText>
        <ThemedText style={styles.description}>
          Please request the customer to provide their order number to help ensure the delivery is made to the correct recipient.
        </ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Enter order number here"
          value={orderNumber}
          onChangeText={setOrderNumber}
        />
        <CustomButton text='Submit' onPress={handlePress} />
       
      </View>
    </Modal>
  );
};

export default OrderNumberModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    position: "absolute",
    bottom: '40%',
    left: 0,
    right: 0,
    backgroundColor: Colors.light.background,
    padding: 24,
    marginHorizontal:24
   
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    fontFamily:'Raleway'
   
  },
  description: {
    fontSize: 10,
    

     fontFamily:'Raleway',
     lineHeight:18
    
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    marginVertical: 36,
  },
 
});

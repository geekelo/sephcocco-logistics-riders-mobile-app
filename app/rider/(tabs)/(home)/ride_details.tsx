import HomeScreen from "@/components/home/home";
import { RideDetails } from "@/components/home/rideDetails";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Ride_details() {
  return (
    <View  style={styles.container}>
       
     <RideDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
 
});

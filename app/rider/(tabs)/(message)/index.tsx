import HomeScreen from "@/components/home/home";
import { RideDetails } from "@/components/home/rideDetails";
import MessageScreen from "@/components/message/messageScreen";
import RideHistoryScreen from "@/components/ride_history/riderHistoryScreen";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Message() {
  return (
    <View  style={styles.container}>
       
     <MessageScreen  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
    justifyContent: "center",
    backgroundColor: Colors.light.background,
    paddingTop:80
  },
 
});

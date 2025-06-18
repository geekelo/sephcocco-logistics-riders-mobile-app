import HomeScreen from "@/components/home/home";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function NotificationIcon() {
  return (
    <View style={styles.notificationWrapper}>
      <Ionicons name="notifications" size={27} color="#FFC923" />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>3</Text> {/* Change count dynamically */}
      </View>
    </View>
  );
}
export default function HomesScreen() {
  return (
    <View  style={styles.container}>
        <View style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
            <ThemedText fontFamily="raleway" style={{paddingVertical:30, fontWeight:600, fontSize:24}}>Home</ThemedText>
            <NotificationIcon />
        </View>
     <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
   notificationWrapper: {
    marginRight: 15,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -6,
    backgroundColor: "red",
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 3,
    zIndex: 10,
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
 
});

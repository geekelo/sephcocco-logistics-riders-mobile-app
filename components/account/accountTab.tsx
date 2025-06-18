// app/rider/(tabs)/account/index.tsx
import React from "react";
import {
  View,
 
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
const menu = [
  { label: "Profile", icon: "person-outline" as const, route: "profile" },
  { label: "Notifications", icon: "notifications-outline" as const, route: "notification" },
  { label: "Settings", icon: "settings-outline" as const, route: "settings" },
  { label: "Privacy Policy", icon: "document-text-outline" as const, route: "privacy-policy" },
  { label: "Delete Account", icon: "trash-outline" as const, route: "delete-account" },
];


export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={require('@/assets/images/Ellipse 258.png')}
          style={styles.avatar}
        />
        <ThemedText style={styles.name}>John Doe</ThemedText>
        <ThemedText style={styles.status}>Offline</ThemedText>
      </View>

      <View style={styles.divider} />

      {menu.map((item) => (
        <TouchableOpacity
          key={item.label}
          style={styles.menuItem}
          onPress={() => router.push(`/rider/(tabs)/(account)/${item.route}`)}
        >
          <View style={styles.menuLeft}>
            <Ionicons name={item.icon} size={22} color="rgba(0, 0, 0, 0.8)" />
            <ThemedText style={styles.menuLabel}>{item.label}</ThemedText>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#000" />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  status: {
    color: "#666",
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.24)",
    marginVertical: 20,
    marginHorizontal:30
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
   
    padding:30
    
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  menuLabel: {
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.85)",
    fontWeight:500,
    fontFamily:'Raleway'

  },
});

import React, { useState } from "react";
import { View, StyleSheet, ScrollView,  TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { RideTabSelector } from "./rideTabSelector";
import { rideData } from "./rideData";
import RideList from "./rideList";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";

type TabType = "Upcoming" | "Completed" | "Rejected";

const RideHistoryScreen = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Upcoming");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={40} color="#000" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Ride History</ThemedText>
        <View style={{ width: 26 }} /> {/* To balance chevron-left spacing */}
      </View>

      {/* Tabs */}
      <RideTabSelector activeTab={activeTab} onChange={setActiveTab} />

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <RideList data={rideData[activeTab]} type={activeTab} />
      </ScrollView>
    </View>
  );
};

export default RideHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    
    paddingHorizontal: 20,
    paddingBottom: 30,
   
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  scrollContent: {
    paddingVertical: 20,
    paddingBottom: 50,
  },
});

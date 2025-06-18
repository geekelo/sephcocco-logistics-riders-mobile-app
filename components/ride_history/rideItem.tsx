import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { View,  StyleSheet } from "react-native";

interface Props {
  orderNumber: string;
  status: string;
  description?: string;
  date?: string;
  type: "Upcoming" | "Completed" | "Rejected";
}

const RideItem: React.FC<Props> = ({ orderNumber, status, description, type, date }) => (
  <View style={styles.item}>
    <View style={styles.row}>
      <ThemedText style={styles.order}>Order #{orderNumber}</ThemedText>
      
      <ThemedText style={styles.status}>{status}</ThemedText>
    </View>
     <ThemedText style={styles.description}>{description}</ThemedText>
    <View style={styles.divider} />
  </View>
);

export default RideItem;

const styles = StyleSheet.create({
  item: {
    padding: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  order: {
    fontWeight: "600",
  },
  status: {
    color: "#54B175",
    fontWeight: "500",
  },
  description: {
    color: "#555",
    marginTop: 4,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginTop: 10,
  },
});

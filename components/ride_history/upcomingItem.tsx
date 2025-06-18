import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  orderNumber: string;
  date: string;
}

const UpcomingItem: React.FC<Props> = ({ orderNumber, date }) => (
  <View style={styles.item}>
    <View style={styles.row}>
      <ThemedText style={styles.order}>{orderNumber}</ThemedText>
      <ThemedText style={styles.date}>{date}</ThemedText>
    </View>
    <ThemedText style={styles.status}>Completed the Delivery</ThemedText>
  </View>
);

export default UpcomingItem;

const styles = StyleSheet.create({
  item: { borderBottomWidth: 0.7, borderColor: "rgba(0, 0, 0, 0.25)", paddingVertical: 16 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 6 },
  order: { fontWeight: "500", fontSize:14 },
  date: { color: "#000", paddingTop:2, fontSize:14 },
  status: { fontSize: 18, color: "#000", fontWeight:500, fontFamily:'raleway' },
});

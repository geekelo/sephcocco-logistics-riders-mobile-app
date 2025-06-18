import React from "react";
import { View,  StyleSheet } from "react-native";
import RideItem from "./rideItem";
import UpcomingItem from "./upcomingItem";
import { ThemedText } from "@/components/ThemedText";

interface RideData {
  orderNumber: string;
  date: string;
  status: string;
  description?: string;
}

interface Props {
  data: RideData[];
  type: "Upcoming" | "Completed" | "Rejected";
}

const RideList: React.FC<Props> = ({ data, type }) => {
  const grouped = type === "Completed" || type === "Rejected";

  if (grouped) {
    const groupedByDate = data.reduce((acc, item) => {
      if (!acc[item.date]) {
        acc[item.date] = [];
      }
      acc[item.date].push(item);
      return acc;
    }, {} as Record<string, RideData[]>);

    return (
      <View style={{paddingHorizontal:30}}>
        {Object.entries(groupedByDate).map(([date, rides]) => (
          <View key={date}>
            <ThemedText style={styles.dateHeader}>{date}</ThemedText>
            {rides.map((item) => (
              <RideItem key={item.orderNumber} {...item} type={type} />
            ))}
          </View>
        ))}
      </View>
    );
  }

  // For "upcoming"
  return (
    <View  style={{paddingHorizontal:30}}>
      {data.map((item) => (
        <View  key={item.orderNumber} style={{paddingVertical:8}}>
        <UpcomingItem key={item.orderNumber} {...item}  />
        </View>
      ))}
    </View>
  );
};

export default RideList;

const styles = StyleSheet.create({
  dateHeader: {
    paddingVertical: 20,
    fontWeight: "bold",
    fontSize: 18,
  
    color: "#333",
  },
});

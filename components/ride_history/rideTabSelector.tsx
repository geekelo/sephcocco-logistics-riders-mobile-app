import React from "react";
import { View,  TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "@/components/ThemedText";

interface Props {
  activeTab: "Upcoming" | "Completed" | "Rejected";
  onChange: (tab: "Upcoming" | "Completed" | "Rejected") => void;
}

export const RideTabSelector: React.FC<Props> = ({ activeTab, onChange }) => {
  const tabs = ["Upcoming", "Completed", "Rejected"] as const;

  return (
    <View style={styles.wrapper}>
       
            
      <View style={styles.tabs}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          const ButtonContent = (
            <TouchableOpacity
              key={tab}
              onPress={() => onChange(tab)}
              style={[styles.tab, isActive && styles.activeTab]}
            >
              <ThemedText style={[styles.text, isActive && styles.activeText]}>
                {tab}
              </ThemedText>
            </TouchableOpacity>
          );

          return isActive ? (
            <LinearGradient
              key={tab}
              colors={["#F93A01", "#000000"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradientBorder}
            >
              {ButtonContent}
            </LinearGradient>
          ) : (
            <View key={tab} style={styles.tabWrapper}>
              {ButtonContent}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "95%",
    alignSelf: "center",
    marginVertical: 10,
    borderWidth:0.9,
    borderColor:'#D9D9D9',
    borderRadius:12
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor:'rgba(249, 58, 1, 0.01)'
  },
  tabWrapper: {
    borderRadius: 8,
  },
    gradientBorder: {
    padding: 1,
    borderRadius: 10,
  },
  tab: {
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 8,
   
  },
  activeTab: {
    backgroundColor: "transparent", // Will show the gradient bg
  },
  text: {
    color: "#5A5A5A",
    fontWeight: "500",
    fontSize:14
  },
  activeText: {
    color: "#F7F7F7",
    fontWeight:500,
    fontSize:14
  },
   gradientWrapper: {
    borderRadius: 10,
    padding: 1.5, // space for gradient border
    width: "85%",
    alignSelf: "center",
    marginVertical: 12,
  },
});

import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { View,  TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  activeTab: "Read" | "Unread";
  onChange: (tab: "Read" | "Unread") => void;
}

export const MessageTabSelector: React.FC<Props> = ({ activeTab, onChange }) => {
  const tabs = ["Unread", "Read"] as const;

  return (
    <View style={styles.wrapper}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => onChange(tab)}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
        >
          <ThemedText style={[styles.text, activeTab === tab && styles.activeText]}>
            {tab}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
  },
  activeTab: {
    backgroundColor: "#F93A01",
  },
  text: {
    color: "#666",
  },
  activeText: {
    color: "#fff",
    fontWeight: "600",
  },
});

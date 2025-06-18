// app/rider/(account)/[profile|notifications|settings|privacy-policy|delete-account].tsx
import React from "react";
import { View,  StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";

interface PageProps {
  title: string;
 
}

const PageTemplate = ({ title,  }: PageProps) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <View style={{ width: 24 }} />
      </View>
      
    </View>
  );
};

export default PageTemplate;

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: Colors.light.background,
    padding: 20,
    
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.light.text,
  },
  body: {
    flex: 1,
  },
  content: {
    fontSize: 16,
    color: "#555",
  },
});

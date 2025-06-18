import { Tabs } from "expo-router";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";


export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // ❌ Hides header bar
        tabBarActiveTintColor: "#F93A01",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: { height: 80, paddingBottom: 6 },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Feather name="home" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(rides)"
        options={{
          title: "Ride  History",
          tabBarIcon: ({ color }) => <MaterialIcons name="delivery-dining" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(message)"
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => <Ionicons name="wallet-outline" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(account)"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <Feather name="user" size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}


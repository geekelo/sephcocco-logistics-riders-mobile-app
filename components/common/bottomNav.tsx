import { Tabs } from "expo-router";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function BottomNav() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#fff" },
        headerTitleStyle: { fontWeight: "bold", fontSize: 18 },
        headerTitle: "ActiveTop",
        headerRight: () => (
          <Feather
            name="bell"
            size={22}
            color="#333"
            style={{ marginRight: 15 }}
          />
        ),
        tabBarActiveTintColor: "#54B175",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: { height: 60, paddingBottom: 6 },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Feather name="home" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => <MaterialIcons name="delivery-dining" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="earnings"
        options={{
          title: "Earnings",
          tabBarIcon: ({ color }) => <Ionicons name="wallet-outline" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Feather name="user" size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}

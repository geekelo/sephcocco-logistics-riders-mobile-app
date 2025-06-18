import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/ui/CustomButton";
import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { RideRequestDrawer } from "./rideRequiest";
import { router } from "expo-router";

const { width } = Dimensions.get("window");
const circleSize = width * 0.6;

export default function HomeScreen() {
  const [online, setOnline] = useState(true);

  const handleToggleOnline = () => {
    setOnline((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={
              online
                ? require("@/assets/images/food-delivery-dri.png") // 🔁 Replace with actual online image
                : require("@/assets/images/offline_svgrepo.com (1).png")
            }
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <ThemedText fontFamily="raleway" style={styles.headerText}>
          {online ? "You are Currently Online" : "You are Currently Offline"}
        </ThemedText>
        <TouchableOpacity style={styles.button}>
          <ThemedText fontFamily="raleway" style={styles.buttonText}>
            {online
              ? "Go online to receive new orders"
              : "Go online to receive new orders"}
          </ThemedText>
        </TouchableOpacity>
        <CustomButton
          text={online ? "Go Offline" : "Go Online"}
          onPress={handleToggleOnline}
          style={{ marginTop: 60, width: "100%" }}
        />
      </View>
      {online && (
  <RideRequestDrawer
    onAccept={() => router.push('/rider/(tabs)/(home)/ride_details')}
    onDecline={() => console.log("Declined")}
    activeStep={1}
  />
)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  imageContainer: {
    width: circleSize,
    height: circleSize,
    borderWidth: 1,
    borderColor: Colors.light.borderorange,
    borderRadius: circleSize / 2,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  image: {
    width: 150,
    height: 150,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 4,
  },
  button: {
    paddingVertical: 6,
  },
  buttonText: {
    color: Colors.light.text,
    fontWeight: "600",
    fontSize: 18,
  },
});

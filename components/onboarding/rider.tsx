import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  useColorScheme,
  Dimensions,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/ui/CustomButton";
import { CustomOutlineButton } from "@/components/ui/CustomOutlineButton";
import { onboardingData } from "./data";
import { router } from "expo-router";

const { width } = Dimensions.get("window");
const circleSize = width * 0.85;
const Onboarding = () => {
  const [step, setStep] = useState(0);
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  const navigation = useNavigation();

  // ⏱ Auto-step timer
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % onboardingData.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  const { image, title, subtitle } = onboardingData[step];

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ alignItems: "center" }}>
        {/* Step Indicator */}
        <View style={styles.stepIndicator}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    step === index ? theme.borderorange : theme.lightgray,
                },
              ]}
            />
          ))}
        </View>

        {/* Image */}
        <View style={styles.imageBox}>
          <Image source={image} style={styles.image} resizeMode="contain" />
        </View>

        {/* Text */}
        <View style={styles.textBox}>
          <ThemedText
            type="title"
            fontFamily="raleway"
            style={{ fontWeight: "600", paddingVertical: 6 }}
          >
            {title}
          </ThemedText>
          <Text
            style={{
              lineHeight: 25,
              fontSize: 14,
              fontWeight: "500",
              fontFamily: "raleway",
              paddingTop: 12,
              textAlign: "center",
              color: theme.text,
            }}
          >
            {subtitle}
          </Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <CustomButton
          text="Sign Up"
          style={{ width: "100%" }}
          onPress={() => router.push('/auth/signup')}
        />
        <CustomOutlineButton
          title="Log In"
          style={{ width: "100%" }}
          onPress={() => router.push('/auth/signin')}
        />
      </View>
    </ThemedView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  stepIndicator: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  dot: {
    width: width / 4,
    height: 6,
    borderRadius: 3,
  },
  imageBox: {
   width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: "rgba(249, 58, 1, 0.05)",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 60,
  },
  image: {
    width: 300,
    height: 300,
  },
  textBox: {
    paddingHorizontal: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonGroup: {
    width: "100%",
    gap: 16,
    marginBottom: 40,
  },
});


export default Onboarding;
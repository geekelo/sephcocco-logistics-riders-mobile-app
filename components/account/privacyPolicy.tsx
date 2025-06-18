import React from "react";
import { StyleSheet, View,  } from "react-native";
import { Colors } from "@/constants/Colors";
import PageTemplate from "./pageTemplate";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

const PrivacyPolicy = () => {
  const router = useRouter();

 

  return (
    <View style={styles.container}>
      <PageTemplate title="Privacy Policy" />
      <View style={styles.form}>
        <ThemedText style={styles.para}>
          Lorem ipsum dolor sit amet consectetur. Elementum sapien etiam sapien
          scelerisque pretium nulla nec quis. Sed sem nunc quis suscipit et
          tincidunt iaculis nulla nec. Sed nunc cras hac varius faucibus orci.
          Id feugiat consequat justo diam quisque egestas facilisis ultricies
          integer. Quisque luctus pharetra dui fringilla elementum luctus enim
          in lobortis. Semper fringilla mollis turpis accumsan sed in lacus
          aliquam lobortis. Amet volutpat elementum porttitor lobortis ut in
          enim.
        </ThemedText>
      </View>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,

    paddingTop: 30,
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  para: {
    fontWeight: 500,
    fontSize: 14,
    fontFamily: "Raleway",
    lineHeight: 30,
  },
});

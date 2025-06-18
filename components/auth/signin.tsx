import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Dimensions,
} from "react-native";
import CustomButton from "@/components/ui/CustomButton";
import InputField from "@/components/ui/InputField";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import { Routes } from "@/routes";

const screenHeight = Dimensions.get('window').height;
const SigninScreen = () => {
  const [form, setForm] = useState({
    name: "",
   
    password: "",
    
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
      <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.select({ ios: 'padding', android: undefined })}
          >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          {/* 🔶 Background Image */}
          <ImageBackground
            source={require("@/assets/images/Rectangle 30143.png")}
            style={styles.topImage}
            resizeMode="cover"
          >
            <View style={styles.topContent}>
              <Image
                source={require("@/assets/images/logo.png")}
                style={styles.logo}
                resizeMode="contain"
              />
              <ThemedText fontFamily="raleway" style={styles.imageText}>
                Sign In
              </ThemedText>
            </View>
          </ImageBackground>

          {/* 🔷 Form Scrollable Content */}
          <View
            style={styles.formContainer}
           
          >
            <View style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
                  <ThemedText style={styles.title}>Welcome Back!!</ThemedText>
                  <ThemedText style={styles.subtitle}>Login and continue from where you stoped</ThemedText>
                  
            </View>
            <InputField
              label="Name"
              placeholder="Enter Your Name"
              value={form.name}
              onChangeText={(v) => handleChange("name", v)}
             
            />
          
            <InputField
              label="Password"
              placeholder="Enter Your Password"
              secureTextEntry
              value={form.password}
              onChangeText={(v) => handleChange("password", v)}
             
            />
            

            <View style={{ marginTop: 20 }}>
              <CustomButton
                text="Login"
                onPress={() => router.push('/rider/(tabs)/(home)')}
              />
            </View>

            <View style={styles.loginWrapper}>
              <ThemedText fontFamily="raleway" style={styles.loginText}>
               Don't have an account?{" "}
                <TouchableOpacity onPress={() => router.push(Routes.auth.register)}>
                  <ThemedText fontFamily="raleway" style={styles.loginLink}>
                   Signup
                  </ThemedText>
                </TouchableOpacity>
              </ThemedText>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {

        backgroundColor: Colors.light.background,
        display:'flex',
        justifyContent:'space-between', 
        width:'100%', paddingVertical:60,
            height: screenHeight ,
      },
       title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  topImage: {
    width: "100%",
    height:screenHeight * 0.25,
  },
  topContent: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    position: "relative",
  },
  logo: {
    width: 36,
    height: 36,
    marginBottom: 8,
  },
  imageText: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: [{ translateX: -50 }],
    color: Colors.light.background,
    fontSize: 24,
    fontWeight: "bold",
  },
  formContainer: {
    paddingHorizontal: 30,
   gap:7,
    flexGrow:1,
    paddingVertical:60
  },
  loginWrapper: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    textAlign: "center",
    color: Colors.light["black-01"],
    fontSize: 14,
  },
  loginLink: {
    color: Colors.light.maingreen,
    fontWeight: "600",
    fontSize: 14,
    paddingTop:8
  },
});

export default SigninScreen;

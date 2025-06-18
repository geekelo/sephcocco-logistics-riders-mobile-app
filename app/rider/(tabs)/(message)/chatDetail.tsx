import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface Message {
  id: string;
  text: string;
  sender: "me" | "them";
}

const ChatDetailScreen = () => {
  const { sender } = useLocalSearchParams();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hello, how can I help?", sender: "them" },
    { id: "2", text: "I need info about my order", sender: "me" },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text: input.trim(), sender: "me" },
    ]);
    setInput("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={90}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
              <Ionicons name="chevron-back" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.headerText}>{sender}</Text>
            <View style={{ width: 24 }} /> {/* for alignment */}
          </View>

          {/* Chat Messages */}
         <FlatList
  data={messages}
  keyExtractor={(item) => item.id}
  contentContainerStyle={styles.chatContainer}
  renderItem={({ item }) => (
    <View
      style={[
        styles.message,
        item.sender === "me" ? styles.myMsg : styles.theirMsg,
      ]}
    >
      <Text
        style={[
          styles.msgText,
          item.sender === "me" ? styles.myText : styles.theirText,
        ]}
      >
        {item.text}
      </Text>
    </View>
  )}
/>


          {/* Input Row */}
          <View style={styles.inputRow}>
            <View style={styles.inputWrapper}>
              <TextInput
                value={input}
                onChangeText={setInput}
                placeholder="Type your message..."
                placeholderTextColor="#999"
                style={styles.input}
              />
              <TouchableOpacity onPress={handleSend} style={styles.sendIcon}>
                <Ionicons name="send" size={20} color={Colors.light.success} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ChatDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    justifyContent: "space-between",
  },
  backIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  chatContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  message: {
    padding: 26,
    borderRadius: 16,
    marginBottom: 12,
    maxWidth: "85%",
    shadowColor: "#3A564E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 4,
  },
  myText: {
  color: "#fff", // sender text color
},

theirText: {
  color: "#333", // receiver text color
},

  myMsg: {
    backgroundColor: Colors.light.orange,
    alignSelf: "flex-end",
  },
  theirMsg: {
    backgroundColor: "#EDEDED",
    alignSelf: "flex-start",
  },
  msgText: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.light.background,
    fontFamily: "raleway",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    backgroundColor: Colors.light.background,
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
  },
  inputWrapper: {
    flex: 1,
    position: "relative",
  },
  input: {
    backgroundColor: Colors.light["gray-200"],
    borderRadius: 32,
    paddingLeft: 16,
    paddingRight: 48,
    paddingVertical: 24,
    fontSize: 15,
  },
  sendIcon: {
    position: "absolute",
    right: 14,
    top: "30%",
  },
});

import React from "react";
import {
  View,
 
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ChatItem } from "./chatData";
import { router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

interface Props {
  data: ChatItem[];
}

const ChatList: React.FC<Props> = ({ data }) => {
  const handlePress = (item: ChatItem) => {
    // You can pass full object via query or just id if data is global
    router.push({
      pathname: "/rider/(tabs)/(message)/chatDetail",
      params: {
        sender: item.sender,
        message: item.message,
        id: item.id,
      },
    });
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
          <View style={styles.chatBox}>
            <View>
              <ThemedText style={styles.sender}>{item.sender}</ThemedText>
              <ThemedText style={styles.message} numberOfLines={1}>
                {item.message}
              </ThemedText>
            </View>
            <ThemedText style={styles.time}>{item.time}</ThemedText>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default ChatList;


const styles = StyleSheet.create({
  chatBox: {
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  sender: {
    fontWeight: "bold",
    fontSize: 15,
  },
  message: {
    color: "#666",
    marginTop: 4,
    fontSize: 13,
  },
  time: {
    color: "#999",
    fontSize: 12,
    alignSelf: "flex-start",
  },
});

import React from "react";
import {
  View,
  
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";

const DocumentGrid = ({
  documents,
  onEdit,
}: {
  documents: any[];
  onEdit: () => void;
}) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <ThemedText style={styles.title}>Documents / Attachments</ThemedText>
      <TouchableOpacity onPress={onEdit} style={styles.editBox}>
        <Ionicons name="create-outline" size={18} color="#f93" />{" "}
        <ThemedText style={styles.edittext}>Edit</ThemedText>
      </TouchableOpacity>
    </View>
    <View style={styles.grid}>
      {documents.map((doc, i) => (
        <View style={styles.item} key={i}>
          <Image source={doc.uri} style={styles.image} />
          <View style={styles.viewbox}>
            <ThemedText style={styles.docName}>{doc.name}.png</ThemedText>
            <ThemedText style={styles.docDate}>Created {doc.date}</ThemedText>
          </View>
        </View>
      ))}
    </View>
  </View>
);

export default DocumentGrid;

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#fff",

    ...Platform.select({
      ios: {
        shadowColor: "rgba(249, 58, 1, 0.15)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.16)",
    paddingBottom: 12,
  },
  title: {
    fontWeight: "500",
    fontSize: 15,
    fontFamily: "Raleway",
    color: Colors.light.text,
  },

  grid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  item: { width: "47%", borderRadius: 8, padding: 10 },
  image: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  docName: {
    fontSize: 10,
    fontWeight: "600",
    marginTop: 6,
    fontFamily: "Raleway",
  },
  docDate: {
    fontSize: 6,
    color: "#4F4F4F",
    paddingVertical: 3,
    letterSpacing: 0.09,
    fontFamily: "Raleway",
  },
  editBox: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    flexDirection: "row",
  },
  edittext: {
    fontSize: 12,
    color: Colors.light.orange,
    lineHeight: 16,
    fontFamily: "Raleway",
  },
  viewbox: {
    borderWidth: 0.5,
    borderColor: "#B7B7B7",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 6,
  },
});

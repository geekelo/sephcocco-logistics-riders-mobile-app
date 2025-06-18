import React from "react";
import { View,  StyleSheet, TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";

const InfoSection = ({
  title,
  info,
  onEdit,
}: {
  title: string;
  info: Record<string, string>;
  onEdit: () => void;
}) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <ThemedText style={styles.title}>{title}</ThemedText>
      <TouchableOpacity onPress={onEdit} style={styles.editBox}>
        <Ionicons name="create-outline" size={18} color="#f93" /> <ThemedText style={styles.edittext}>Edit</ThemedText>
      </TouchableOpacity>
    </View>
    {Object.entries(info).map(([key, val]) => (
      <View style={styles.item} key={key}>
        <ThemedText style={styles.label}>{key}:</ThemedText>
        <ThemedText style={styles.value}>  {val}</ThemedText>
       
      </View>
    ))}
  </View>
);

export default InfoSection;

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
    borderBottomWidth:1,
    borderColor:'rgba(0, 0, 0, 0.16)',
    paddingBottom:12
  },
  title: {
    fontWeight: "500",
    fontSize: 15,
    fontFamily: "Raleway",
    color:Colors.light.text
  },
  item: {
  display:'flex',
  flexDirection:'row', alignItems:'center', gap:4,
  paddingVertical:10
 

  },
  label: {
    fontWeight: "500",
    fontSize:13,
    color:Colors.light.text

  },
  editBox:{
    display:"flex",
    alignItems:"center", gap:2,
    flexDirection:'row'
  },
  edittext:{
    fontSize:12, 
    color:Colors.light.orange,
    lineHeight:16,
    fontFamily:'Raleway'
  },
   value: {
    fontWeight: "400",
    fontSize:13,
    color:'#4F4F4F',
     fontFamily: "Raleway",

  },
});

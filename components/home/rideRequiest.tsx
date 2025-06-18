import React from "react";
import { View,  StyleSheet, TouchableOpacity, Linking, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/ui/CustomButton";
import { CustomOutlineButton } from "@/components/ui/CustomOutlineButton";

interface RideRequestProps {
  onAccept: () => void;
  onDecline: () => void;
  activeStep?: 1 | 2; // 1 = Pickup, 2 = Deliver
}

const { height } = Dimensions.get("window")
export const RideRequestDrawer: React.FC<RideRequestProps> = ({
  onAccept,
  onDecline,
  activeStep
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <ThemedText style={styles.title}>Ride request</ThemedText>
        <ThemedText style={styles.order}>Order #12345</ThemedText>
      </View>
<View style={styles.box}>
    <View style={styles.tripconatin}>
    <View style={styles.tripbox}>
        <ThemedText style={styles.trip}>20 mins trip</ThemedText>
    </View>
    </View>
      <View style={styles.locationRow}>
  <View style={styles.iconColumn}>
    <Ionicons
      name="radio-button-on"
      size={30}
      color={activeStep === 1 ? Colors.light.orange : "#999"}
    />
    <View style={styles.verticalLine} />
    <Feather
      name="square"
      size={30}
      color={activeStep === 2 ? Colors.light.orange : "#999"}
    />
  </View>

  <View style={{ flex: 1 }}>
    <View style={styles.section}>
      <ThemedText style={styles.label}>Pickup From</ThemedText>
      <ThemedText style={styles.value}>Utako Market Bus Stop</ThemedText>
    </View>

    <View style={styles.section}>
      <ThemedText style={styles.label}>Deliver To</ThemedText>
      <ThemedText style={styles.value}>Utako Market Bus Stop</ThemedText>
    </View>
  </View>
</View>


      <View style={styles.sectionbox}>
        <View>
        <ThemedText style={styles.label}>Special Instructions</ThemedText>
        <ThemedText style={styles.value}>Call before coming</ThemedText>
        </View>
        <TouchableOpacity
          style={styles.phoneBox}
          onPress={() => Linking.openURL("tel:+2348487099")}
        >
          <Ionicons name="call" size={10} color={Colors.light.orange} />
          <ThemedText style={styles.phoneText}>+2348487099</ThemedText>
        </TouchableOpacity>
      </View>
<View style={{display:'flex', alignItems:'center', gap:1, flexDirection:'row'}}>
      <ThemedText fontFamily="raleway" style={[styles.trackText, {fontWeight:600}]}>Track </ThemedText>
       <ThemedText  fontFamily="raleway" style={styles.trackText}> #12345</ThemedText>
      </View>
      </View>

      <View style={styles.buttonRow}>
          <CustomOutlineButton style={{width:'35%'}} title="Decline" onPress={onDecline} />
        
        <CustomButton text='Accept' style={{width:'35%'}} onPress={onAccept} />
       </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.light.background,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: height / 2, // 👈 Takes half of screen height
    zIndex: 999,
    shadowColor:Colors.light.text,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -4 },
    shadowRadius: 8,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
   
    paddingTop:12,
 
  },
  box:{
     borderBottomWidth:0.94,
      borderTopWidth:0.94,
    paddingVertical:2,
    borderColor:'#DFDFDF'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
     fontFamily:'raleway'
  },
  order: {
    fontSize: 14,
    color: "#999",
     fontFamily:'raleway'
  },
  section: {
    marginBottom: 12,
  },
  sectionbox: {
   display:'flex',
   flexDirection:"row",
   justifyContent:'space-between',
   marginBottom:12
   
  },
  label: {
    fontWeight: "bold",
    color: "#333",
    fontFamily:'raleway'
  },
  value: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
     fontFamily:'raleway',
     paddingTop:3
  },
  phoneBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.7,
    borderColor: Colors.light.orange,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  phoneText: {
    marginLeft: 3,
    color: Colors.light.orange,
    fontWeight: "500",
    fontFamily:'raleway',
    fontSize:10
  },
  trackText: {
    fontSize: 14,
    marginBottom: 4,
    fontFamily:'raleway',
    fontWeight:500
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    paddingTop:32
  },
  trip:{
fontSize:8,
fontFamily:'raleway',
color:Colors.light.orange,
textAlign:'center'
  },
  tripbox:{
    display:'flex',
    justifyContent:'center',
    borderRadius:5,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },      // 👈 x=0, y=4
    shadowOpacity: 0.1,                         // 👈 1A in hex = 10% opacity
    shadowRadius: 4,                            // 👈 blur radius
    elevation: 4,   
    backgroundColor:'#F0F0F0',
    width:80 
  },
  tripconatin:{
     display:'flex',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingVertical:8
  },
  locationRow: {
  flexDirection: "row",
  marginBottom: 12,
},

iconColumn: {
  alignItems: "center",
  marginRight: 12,
},

verticalLine: {
  width: 1,
  height: 30,
  backgroundColor: "#ccc",
  marginVertical: 2,
},

  
});

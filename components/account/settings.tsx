import React from 'react'
import PageTemplate from './pageTemplate'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';


const menu = [
 
  { label: "Change Password", route: "change-password" },
  { label: "Delete Account",  route: "delete-account" },
];
function Settings() {
  
  return (
    <View style={styles.container}>
        <PageTemplate title='Settings' />
        <View>
             {menu.map((item) => (
                    <TouchableOpacity
                      key={item.label}
                      style={styles.menuItem}
                      onPress={() => router.push(`/rider/(tabs)/(account)/settings/${item.route}`)}
                    >
                      <View style={styles.menuLeft}>
                        
                        <ThemedText style={styles.menuLabel}>{item.label}</ThemedText>
                      </View>
                      <Ionicons name="chevron-forward" size={14} color="#414141" />
                    </TouchableOpacity>
                  ))}
        </View>
        </View>
   
  )
}

export default Settings


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
 
 menuItem: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 20,
  borderWidth: 0.5,
  borderColor: 'rgba(249, 58, 1, 0.52)',
  backgroundColor: "#fff",

  // iOS shadow
  shadowColor: "rgba(0, 0, 0, 0.24)",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 1,
  shadowRadius: 8,

  // Android shadow
  elevation: 2,
  borderRadius:8,
  marginVertical:14
},

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  menuLabel: {
    fontSize: 14,
    color: "#414141",
    fontWeight:500,
    fontFamily:'Raleway'

  },
});

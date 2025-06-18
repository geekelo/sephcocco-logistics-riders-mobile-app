import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { View,  StyleSheet } from 'react-native';

interface NotificationItemProps {
  initials: string;
  message: string;
  time: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ initials, message, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <ThemedText style={styles.initials}>{initials}</ThemedText>
      </View>
      <View>
        <ThemedText style={styles.message}>{message}</ThemedText>
        <ThemedText style={styles.time}>{time}</ThemedText>
      </View>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor:Colors.light['darkblue-50'],
    padding: 16,
  
    marginBottom: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.light['darkblue-950'],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  initials: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:12
  },
  message: {
    fontSize: 12,
    color: Colors.light['darkblue-950'],
    fontWeight:600,
    lineHeight:21,
    
  },
  time: {
    fontSize: 12,
    color: Colors.light['darkblue-600'],
    marginTop: 4,
    fontFamily:'Raleway'
  },
});

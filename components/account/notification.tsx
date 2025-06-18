import React, { useState } from 'react';
import { View,  StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NotificationItem from './notificationItem';
import PageTemplate from './pageTemplate';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';

const dummyNotifications = {
  recent: [
    { id: '1', initials: 'BR', message: 'New booking request', time: '3 hours ago' },
    { id: '2', initials: 'BR', message: 'New booking request', time: '3 hours ago' },
    { id: '3', initials: 'BR', message: 'New booking request', time: '3 hours ago' },
  ],
  unread: [
    { id: '4', initials: 'BR', message: 'Unread booking request', time: '1 hour ago' },
  ],
};

const Notifications = () => {
  const [activeTab, setActiveTab] = useState<'recent' | 'unread'>('recent');

  const notifications = dummyNotifications[activeTab];

  return (
    <View style={styles.container}>
      {/* Header */}
      <PageTemplate title="Notifications" />

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'recent' && styles.activeTab]}
          onPress={() => setActiveTab('recent')}
        >
          <ThemedText style={[styles.tabText, activeTab === 'recent' && styles.activeTabText]}>
            Recent activity
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'unread' && styles.activeTab]}
          onPress={() => setActiveTab('unread')}
        >
          <ThemedText style={[styles.tabText, activeTab === 'unread' && styles.activeTabText]}>
            Unread
          </ThemedText>
        </TouchableOpacity>
      </View>

      <ThemedText style={styles.sectionTitle}>Today</ThemedText>

      {/* Notification list */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem {...item} />
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: Colors.light['darkblue-50'],
    borderRadius: 6,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    paddingTop:15
  },
  activeTab: {
    borderBottomColor: Colors.light.orange,
  },
  tabText: {
    fontSize: 12,
    color: '#4F4F4F',
    fontWeight:500
  },
  activeTabText: {
    color:  Colors.light.orange,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    color:Colors.light.text,
    marginBottom: 19,
    paddingVertical:4,
    paddingHorizontal:36
  },
});

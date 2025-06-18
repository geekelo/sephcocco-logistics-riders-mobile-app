
import DeleteAccount from '@/components/account/deleteAccount'
import Notifications from '@/components/account/notification'
import React from 'react'
import { View } from 'react-native'

function NotificationPage() {
  return (
      <View style={{ flex: 1, justifyContent: "center" }}>
      <Notifications />
    </View>
  )
}

export default NotificationPage
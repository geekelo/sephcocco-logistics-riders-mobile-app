
import Notifications from '@/components/account/notification'
import RiderProfile from '@/components/account/riderProfile'
import React from 'react'
import { View } from 'react-native'

function RidersPage() {
  return (
      <View style={{ flex: 1, justifyContent: "center" }}>
      <RiderProfile/>
    </View>
  )
}

export default RidersPage
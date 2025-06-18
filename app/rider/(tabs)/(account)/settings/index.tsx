import Settings from '@/components/account/settings'
import React from 'react'
import { View } from 'react-native'

function SettingPage() {
  return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Settings />
    </View>
  )
}

export default SettingPage
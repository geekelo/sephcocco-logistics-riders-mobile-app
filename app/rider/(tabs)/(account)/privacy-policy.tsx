import PrivacyPolicy from '@/components/account/privacyPolicy'
import Settings from '@/components/account/settings'
import React from 'react'
import { View } from 'react-native'

function PrivacyPolicyPage() {
  return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <PrivacyPolicy />
    </View>
  )
}

export default PrivacyPolicyPage
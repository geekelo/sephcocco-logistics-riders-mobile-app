import DeleteAccount from '@/components/account/deleteAccount'
import Settings from '@/components/account/settings'
import React from 'react'
import { View } from 'react-native'

function DeleteAccountPage() {
  return (
      <View style={{ flex: 1, justifyContent: "center" }}>
      <DeleteAccount />
    </View>
  )
}

export default DeleteAccountPage
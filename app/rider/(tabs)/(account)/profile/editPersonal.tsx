
import EditDocuments from '@/components/account/editDocuments'
import EditPersonalInfo from '@/components/account/editPersonalInfo'
import Notifications from '@/components/account/notification'
import RiderProfile from '@/components/account/riderProfile'
import React from 'react'
import { View } from 'react-native'

function EditPersonalPage() {
  return (
      <View style={{ flex: 1, justifyContent: "center" }}>
      <EditPersonalInfo/>
    </View>
  )
}

export default EditPersonalPage
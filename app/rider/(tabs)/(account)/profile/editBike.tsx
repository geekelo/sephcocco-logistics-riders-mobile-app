
import EditBikeInfo from '@/components/account/editBikeInfo'
import EditDocuments from '@/components/account/editDocuments'
import Notifications from '@/components/account/notification'
import RiderProfile from '@/components/account/riderProfile'
import React from 'react'
import { View } from 'react-native'

function EditBikePage() {
  return (
      <View style={{ flex: 1, justifyContent: "center" }}>
      <EditBikeInfo/>
    </View>
  )
}

export default EditBikePage
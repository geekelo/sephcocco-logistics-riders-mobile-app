export const Routes = {
  auth: {
    login: '/auth/signin' as const,
    register: '/auth/signup',
    forgotverify: '/auth/verify',
    
  },
  onboarding:{
 step1:'/onboarding/step1',
   step2:'/onboarding/step2',
    step3:'/onboarding/step3',
  },
  home:{
    main:'/rider/(tabs)/home/',
    ridedetails:'/rider/(tabs)/(home)/ride_details'
  },
  account:{
    profile:{
editDocument:'/rider/(tabs)/(account)/profile/editDocument',
editBike:'/rider/(tabs)/(account)/profile/editBike',
editPersonal:'/rider/(tabs)/(account)/profile/editPersonal',
profile:'/rider/(tabs)/(account)/profile'
    },
    settings:{
changePassword:'/rider/(tabs)/(account)/profile/settings/change-password',
deleteAccount:'/rider/(tabs)/(account)/profile/settings/delete-account',
main:'/rider/(tabs)/(account)/profile/settings'
    },
    delete:'/rider/(tabs)/(account)/delete-account',
    account:'/rider/(tabs)/(account)/profile',
    notification:'/rider/(tabs)/(account)/notification',
    privacyPolicy:'/rider/(tabs)/(account)/privacy-policy'
  },
  message:{
    main:'/rider/(tabs)/(message)',
    chat_detail:'/rider/(tabs)/(message)/chatDetail'
  },
  rides:{
    main:'/rider/(tabs)/(rides)'
  }
 

}
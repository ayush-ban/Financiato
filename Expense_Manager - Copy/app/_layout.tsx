import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
export default function HomeLayout() {
  return (
    <Stack
    screenOptions={{
        headerShown:false
    }}
    >
      <Stack.Screen name='(tabs)' 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name='add-new-category'
      options={{
        presentation:'modal',
        headerShown:true,
        headerTitle:'Add New Transaction'
      }}
      />
    </Stack>
  )
    
}

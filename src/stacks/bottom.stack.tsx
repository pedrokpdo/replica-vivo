import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { HomeStack } from './home.stack'
import { ProfileStack } from './ProfileStack'

const Bottom = createBottomTabNavigator()

export const BottomStack = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen name='HomeStack' component={HomeStack} options={{ headerShown: false }} />
            <Bottom.Screen name='ProfileStack' component={ProfileStack} options={{ headerShown: false }} />
        </Bottom.Navigator>
    )
}
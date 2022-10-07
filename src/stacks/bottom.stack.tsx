import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { HomeScreen } from '../screens/HomeScreen'

const Bottom = createBottomTabNavigator()

export const BottomStack = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }}/>
        </Bottom.Navigator>
    )
}
import { EvilIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { HomeStack } from './home.stack'
import { ProfileStack } from './ProfileStack'

const Bottom = createBottomTabNavigator()

export const BottomStack = () => {
    return (
        <Bottom.Navigator
            screenOptions={{ headerShown: false, tabBarLabelStyle: { fontSize: 16 }, tabBarInactiveTintColor: 'gray', tabBarActiveTintColor: 'purple' }}
        >
            <Bottom.Screen
                name='HomeStack'
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='home' size={24} color={color} />),
                    tabBarLabel: 'Home'
                }}
            />
            <Bottom.Screen
                name='ProfileStack'
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='face-man-profile' size={24} color={color} />),
                    tabBarLabel: 'Perfil'
                }}
            />
        </Bottom.Navigator>
    )
}
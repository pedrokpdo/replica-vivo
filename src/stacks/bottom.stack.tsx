import { AntDesign, Entypo, EvilIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { DiscoveryStack } from './DiscoveryStack'
import { HomeStack } from './home.stack'
import { MyPlansStack } from './ProfileStack'
import { SuportStack } from './SuportStack'

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
                name='MyPlansStack'
                component={MyPlansStack}
                options={{
                    tabBarIcon: ({ color }) => (<AntDesign name='pause' size={24} color={color} />),
                    tabBarLabel: 'Meus planos'
                }}
            />
            <Bottom.Screen
                name='DiscoveryStack'
                component={DiscoveryStack}
                options={{
                    tabBarIcon: ({ color }) => (<AntDesign name='eye' size={24} color={color} />),
                    tabBarLabel: 'Descubra'
                }}
            />
            <Bottom.Screen
                name='SuportStack'
                component={SuportStack}
                options={{
                    tabBarIcon: ({ color }) => (<Entypo name='network' size={24} color={color} />),
                    tabBarLabel: 'Suporte'
                }}
            />
        </Bottom.Navigator>
    )
}
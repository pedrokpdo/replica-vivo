import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NotificationsScreen } from "../../components/NotificationsScreen";
import { ProfileScreen } from "../../screens/ProfileScreen";
import { SecurityScreen } from "../../screens/SecurityScreen";

const { Screen, Navigator } = createNativeStackNavigator()

export const ProfileStack = () => {
    return (
        <Navigator>
            <Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
            <Screen name="SecurityScreen" component={SecurityScreen} options={{ headerShown: false }} />
            <Screen name="NotificationsScreen" component={NotificationsScreen} options={{ headerShown: false }} />
        </Navigator>
    )
}
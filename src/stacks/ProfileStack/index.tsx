import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ProfileScreen } from "../../screens/ProfileScreen";


const { Navigator, Screen } = createNativeStackNavigator()

export const ProfileStack = () => {
    return (
        <Navigator>
            <Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        </Navigator>
    )
}
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ProfileScreen } from "../../screens/ProfileScreen";

const { Screen, Navigator } = createNativeStackNavigator()

export const ProfileStack = () => {
    return (
        <Navigator>
            <Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        </Navigator>
    )
}
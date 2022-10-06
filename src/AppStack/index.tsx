import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { FirstLoginScreen } from "../screens/FirstLoginScreen";

const Stack = createNativeStackNavigator()
export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FirstLoginScreen"
                component={FirstLoginScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
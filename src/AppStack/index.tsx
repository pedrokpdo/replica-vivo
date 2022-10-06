import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native";
import { FirstLoginScreen } from "../screens/FirstLoginScreen";

const Stack = createNativeStackNavigator()
export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FirstLoginScreen"
                component={FirstLoginScreen}
                options={{
                    headerStyle: {backgroundColor: 'purple'},
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={24} color={'white'}/>
                    ),
                }}
            />
        </Stack.Navigator>
    )
}
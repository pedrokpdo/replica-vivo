import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ConfirmCodeScreen } from "../screens/ConfirmCodeScreen";
import { FirstLoginScreen } from "../screens/FirstLoginScreen";

const Stack = createNativeStackNavigator()
export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FirstLoginScreen"
                component={FirstLoginScreen}
                options={{
                    title: 'Identifique-se',
                    headerTitleStyle: { color: 'white' },
                    headerStyle: { backgroundColor: 'purple' },
                    headerLeft: () => (
                        <Ionicons style={{ marginRight: 16 }} name="arrow-back" size={24} color={'white'} />
                    ),
                }}
            />
            <Stack.Screen
                name="ConfirmCodeScreen"
                component={ConfirmCodeScreen}
                options={{
                    title: 'Verificação',
                    headerTitleStyle: { color: 'white' },
                    headerStyle: { backgroundColor: 'purple' },
                    headerLeft: () => (
                        <Ionicons style={{ marginRight: 16 }} name="arrow-back" size={24} color={'white'} />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DiscoveryScreen } from "../../screens/DiscoveryScreen";
import { SuportScreen } from "../../screens/SuportScreen";


const { Navigator, Screen } = createNativeStackNavigator()

export const SuportStack = () => {
    return (
        <Navigator>
            <Screen name="SuportScreen" component={SuportScreen} options={{ headerShown: false }} />
        </Navigator>
    )
}
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DiscoveryScreen } from "../../screens/DiscoveryScreen";


const { Navigator, Screen } = createNativeStackNavigator()

export const DiscoveryStack = () => {
    return (
        <Navigator>
            <Screen name="DiscoveryScreen" component={DiscoveryScreen} options={{ headerShown: false }} />
        </Navigator>
    )
}
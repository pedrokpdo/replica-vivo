import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DiscoveryScreen } from "../../screens/DiscoveryScreen";
import { ShoppingScreen } from "../../screens/ShoppingScreen";


const { Navigator, Screen } = createNativeStackNavigator()

export const DiscoveryStack = () => {
    return (
        <Navigator>
            <Screen name="DiscoveryScreen" component={DiscoveryScreen} options={{ headerShown: false }} />
            <Screen name="ShoppingScreen" component={ShoppingScreen} options={{ headerShown: false }} />
        </Navigator>
    )
}
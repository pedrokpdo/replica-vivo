import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DiscoveryScreen } from "../../screens/DiscoveryScreen";
import { FinancesScreen } from "../../screens/FinancesScreen";
import { LivePlansScreen } from "../../screens/LivePlansScreen";
import { MoreScreen } from "../../screens/MoreScreen";
import { RechargeScreen } from "../../screens/RechargeScreen";
import { ShoppingScreen } from "../../screens/ShoppingScreen";


const { Navigator, Screen } = createNativeStackNavigator()

export const DiscoveryStack = () => {
    return (
        <Navigator>
            <Screen name="DiscoveryScreen" component={DiscoveryScreen} options={{ headerShown: false }} />
            <Screen name="ShoppingScreen" component={ShoppingScreen} options={{ headerShown: false }} />
            <Screen name="RechargeScreen" component={RechargeScreen} options={{ headerShown: false }} />
            <Screen name="FinancesScreen" component={FinancesScreen} options={{ headerShown: false }} />
            <Screen name="LivePlansScreen" component={LivePlansScreen} options={{ headerShown: false }} />
            <Screen name="MoreScreen" component={MoreScreen} options={{ headerShown: false }} />
        </Navigator>
    )
}
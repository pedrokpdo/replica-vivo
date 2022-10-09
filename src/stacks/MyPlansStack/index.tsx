import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { MyPlansScreen } from "../../screens/MyPlansScreen";


const { Navigator, Screen } = createNativeStackNavigator()

export const MyPlansStack = () => {
    return (
        <Navigator>
            <Screen name="ProfileScreen" component={MyPlansScreen} options={{ headerShown: false }} />
        </Navigator>
    )
}
import React from "react";
import { View } from "react-native";

export const Space = ({children}) => {
    return (
        <View style={{ marginHorizontal: 16 }}>
            {children}
        </View>
    )
}
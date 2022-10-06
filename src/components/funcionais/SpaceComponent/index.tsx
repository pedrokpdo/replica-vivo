import React from "react";
import { View } from "react-native";

export const Space = ({children, top=0}) => {
    return (
        <View style={{ marginHorizontal: 16, marginTop: 8 * top }}>
            {children}
        </View>
    )
}
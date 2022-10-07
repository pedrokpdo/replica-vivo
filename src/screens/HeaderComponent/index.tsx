import React from "react";
import { View } from "react-native";


export const HeaderComponent = ({ children }) => {
    return (
        <View style={{ backgroundColor: 'purple', paddingVertical: 60 }}>
            {children}
        </View>
    )
}
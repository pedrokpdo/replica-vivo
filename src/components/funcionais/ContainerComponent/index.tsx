import React from "react";
import { View } from 'react-native'

export const ContainerComponent = ({ children }) => {
    return (
        <View style={{ paddingTop: 30, flex: 1, backgroundColor: '#e4e4e4' }}>
            {children}
        </View>
    )
}
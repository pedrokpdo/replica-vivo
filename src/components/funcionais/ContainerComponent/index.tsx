import React from "react";
import { SafeAreaView, View } from 'react-native'

export const ContainerComponent = ({children}) => {
    return (
        <View style={{paddingTop: 30, flex: 1, backgroundColor: 'white'}}>
            {children}
        </View>
    )
}
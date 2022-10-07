import React from "react";
import { View } from "react-native";
import { Text } from "../../components/funcionais/TextComponent";
import { Title } from "../../components/funcionais/TitleComponent";

export const GraphicComponent = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', width: 180, height: 180, borderRightColor: 'yellow', borderLeftColor: 'gray', borderBottomColor: 'gray', borderTopColor: 'gray', borderWidth: 2, borderRadius: 90 }}>
            <Text style={{ color: 'white' }}>Voce usou</Text>
            <Title top={.5} bottom={.5} style={{ color: 'white', fontSize: 30 }}>4.5GB</Title>
            <Text style={{ color: 'white' }}>Lorem ipsum</Text>
        </View>
    )
}
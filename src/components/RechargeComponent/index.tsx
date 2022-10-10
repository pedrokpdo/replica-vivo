import React from "react";
import { View } from "react-native";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const RechargeComponent = ({ value }) => {
    return (
        <View style={{ backgroundColor: 'white', borderRadius: 8 }}>
            <View style={{ backgroundColor: 'purple', padding: 16, borderRadius: 8, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, paddingVertical: 32 }}>
                <Title style={{ color: 'white', fontSize: 32 }}>Recarga de</Title>
                <Title bold style={{ color: 'white', fontSize: 34 }}>R$ {value}</Title>
            </View>
            <View style={{ padding: 16 }}>
                <Title>R$ {value}</Title>
                <Text>+4gb de internet</Text>
                <Title bold top={1} bottom={1}>Recarregue</Title>
                <Text>Validade de 30 dias</Text>
            </View>
        </View>
    )
}
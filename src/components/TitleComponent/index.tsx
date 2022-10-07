import React from "react";
import { View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";

export const TitleComponent = ({ name, color, }) => {
    return (
        <Row style={{ alignItems: 'center' }}>
            <View style={{ borderLeftColor: color, borderLeftWidth: 3, width: 3, height: 20 }} />
            <Text style={{ marginLeft: 8 }}>{name}</Text>
        </Row>
    )
}
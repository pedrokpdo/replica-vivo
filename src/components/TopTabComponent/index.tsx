import React from "react";
import { Text, View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Title } from "../funcionais/TitleComponent";

export const TopTabComponent = () => {
    return (
        <Row>
            <View style={{flex: 1, borderBottomWidth: 1, borderColor: 'gray', height: 50, alignItems: 'center', justifyContent: 'center'}}>
                <Title bold>Ola</Title>
            </View>
            <View style={{flex: 1, borderBottomWidth: 1, borderColor: 'gray', height: 50, alignItems: 'center', justifyContent: 'center'}}>
                <Title>Ola2</Title>
            </View>
        </Row>
    )
}
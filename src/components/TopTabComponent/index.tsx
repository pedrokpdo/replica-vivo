import React from "react";
import { Text, View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Title } from "../funcionais/TitleComponent";

export const TopTabComponent = ({press}) => {
    console.log(press)
    return (
        <Row>
            <View style={{flex: 1, borderBottomWidth: .5, borderColor: '#c4c4c4', height: 50, alignItems: 'center', justifyContent: 'center'}}>
                <Title>Número Vivo</Title>
            </View>
            <View style={{flex: 1, borderBottomWidth: .5, borderColor: '#c4c4c4', height: 50, alignItems: 'center', justifyContent: 'center'}}>
                <Title>CPF ou E-mail</Title>
            </View>
        </Row>
    )
}
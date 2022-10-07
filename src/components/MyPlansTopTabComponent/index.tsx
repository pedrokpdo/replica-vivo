import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Title } from "../funcionais/TitleComponent";

export const MyPlansTopTabComponent = ({ setPress, press }) => {
    return (
        <Row>
            <TouchableOpacity onPress={() => setPress('consume')} style={{ flex: 1, borderBottomWidth: .5, borderColor: press === 'consume' ? 'black' : '#c4c4c4', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Title>Consumo</Title>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPress('sald')} style={{ flex: 1, borderBottomWidth: .5, borderColor: press === 'sald' ? 'black' : '#c4c4c4', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Title>Saldo</Title>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPress('services')} style={{ flex: 1, borderBottomWidth: .5, borderColor: press === 'services' ? 'black' : '#c4c4c4', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Title>Serviços</Title>
            </TouchableOpacity>
        </Row>
    )
}
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Title } from "../funcionais/TitleComponent";

export const TopTabComponent = ({ setPress, press }) => {
    return (
        <Row>
            <TouchableOpacity onPress={() => setPress('number')} style={{ flex: 1, borderBottomWidth: .5, borderColor: press === 'number' ? 'black' : '#c4c4c4', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Title>Número Vivo</Title>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPress('cpf')} style={{ flex: 1, borderBottomWidth: .5,  borderColor: press === 'cpf' ? 'black' : '#c4c4c4', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Title>CPF ou E-mail</Title>
            </TouchableOpacity>
        </Row>
    )
}
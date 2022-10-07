import React from "react";
import { TouchableOpacity } from "react-native";
import { Title } from "../funcionais/TitleComponent";

export const ButtonLine = ({ name }) => {
    return (
        <TouchableOpacity style={{ height: 50, borderWidth: 1, borderColor: 'purple', alignItems: 'center', justifyContent: 'center' }}>
            <Title style={{ color: 'purple' }}>{name}</Title>
        </TouchableOpacity>
    )
}
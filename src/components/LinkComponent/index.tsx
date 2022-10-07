import React from "react";
import { TouchableOpacity } from "react-native";
import { Title } from "../funcionais/TitleComponent";

interface Props {
    name?: string;
    onPress?: () => void;
}

export const LinkComponent = ({ name, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Title style={{ color: 'purple' }}>{name}</Title>
        </TouchableOpacity>
    )
}
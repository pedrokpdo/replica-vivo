import React from "react";
import { TouchableOpacity } from "react-native";
import { Title } from "../funcionais/TitleComponent";

interface Props {
    onPress?: any;
    iconName?: string;
    Icon?: any;
    name?: string;
}

export const LinkIcon = ({ name, iconName, Icon, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: 'white', width: 180, height: 120, padding: 16, borderRadius: 8 }}>
            <Icon name={iconName} color={'purple'} size={24} />
            <Title top={2}>{name}</Title>
        </TouchableOpacity>
    )
}

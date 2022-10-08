import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Title } from "../funcionais/TitleComponent";

export const LinkIcon = ({ name, iconName, Icon }) => {
    return (
        <View style={{ backgroundColor: 'white', width: 180, height: 120, padding: 16, borderRadius: 8 }}>
            <Icon name={iconName} color={'purple'} size={24} />
            <Title top={2}>{name}</Title>
        </View>
    )
}
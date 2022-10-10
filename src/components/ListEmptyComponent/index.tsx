import React from "react";
import { Image, View } from "react-native";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const ListEmptyComponent = ({image}) => {
    return (
        <View>
            <Image source={image} />
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Title>Lorem ipsum dolor sit.</Title>
        </View>
    )
}
import React from "react";
import { Image, View } from "react-native";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const OffertComponent = ({ image }) => {
    return (
        <View style={{ width: '100%', borderColor: '#494949', borderWidth: .4, backgroundColor: 'white', borderRadius: 8 }}>
            <Image source={image} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, width: '100%', height: 300, resizeMode: 'center' }} />
            <View style={{ padding: 16 }}>
                <Text>Lorem ipsum dolor, sit </Text>
                <Title top={.5} bottom={.5}>amet consectetur adipisicing elit.</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, libero.</Text>
            </View>
        </View>
    )
}
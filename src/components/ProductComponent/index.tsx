import React from "react";
import { Dimensions, Image, View } from "react-native";
import { FullCard } from "../funcionais/FullCard";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

const { width } = Dimensions.get('screen')

export const ProductComponent = ({ image }) => {
    return (
        <FullCard style={{ borderWidth: .5, borderColor: '#c5c5c5', borderRadius: 8 }}>
            <Image source={image} style={{ width: 180, height: 220, alignSelf: 'center' }} />
            <View style={{ marginTop: 16 }}>
                <Text>Motog 4 luminus</Text>
                <Title bottom={.5} top={.5}>Até 4x sem juros</Title>
                <Text>Frete gratis em todo brasil</Text>
                <Title>R$ 2.371,13</Title>
            </View>
        </FullCard>
    )
}
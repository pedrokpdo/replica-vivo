import React from "react";
import { Image, View } from "react-native";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";
//@ts-ignore
import promocao from '../../assets/promocao.jpg'


export const PromoComponent = () => {
    return (
        <View>
            <Image source={promocao} style={{ width: '100%', height: 300, borderTopLeftRadius: 16, borderTopRightRadius: 16 }} />
            <Text top={2}>Vem pro vivo turbo</Text>
            <Title top={1} bottom={1}>-- 7gb por R$ 32,46/mês --</Title>
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas rerum numquam perferendis.</Text>
        </View>
    )
}
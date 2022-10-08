import React from "react";
import { Image, View } from "react-native";
import { CardComponent } from "../../components/CardComponent";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { LinkComponent } from "../../components/LinkComponent";
import { HeaderComponent } from "../HeaderComponent";
//@ts-ignore
import cartoon from '../../assets/cartoon.png'
import { LinkIconRow } from "../../components/LinkIconRow";

export const SuportScreen = () => {
    return (
        <ContainerComponent>
            <HeaderComponent>
                <Space>
                    <Title top={-4} style={{ color: 'white', fontSize: 30 }}>Suporte</Title>
                    <Text top={1} bottom={4} style={{ color: 'white', fontSize: 26 }}>Como podemos ajudar?</Text>
                    <CardComponent style={{ backgroundColor: 'white', padding: 16, flexDirection: 'row', justifyContent: 'space-between', marginBottom: -150, borderColor: 'white' }}>
                        <View style={{ width: 250 }}>
                            <Title bold>Suporte tecnico</Title>
                            <Text bottom={4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                            <LinkComponent name="Preciso de ajuda" />
                        </View>
                        <Image source={cartoon} style={{ width: 70, height: 150, marginBottom: -16 }} />
                    </CardComponent>
                </Space>
            </HeaderComponent>
            <Space top={18}>
                <LinkIconRow name={'Testar velocidade'} />
                <LinkIconRow name={'Mapa de cobertura'} />
                <LinkIconRow name={'Perguntas frequentes'} />
                <LinkIconRow name={'Testar velocidade'} />
            </Space>
        </ContainerComponent>
    )
}
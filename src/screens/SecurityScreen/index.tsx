import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { FullCard } from "../../components/funcionais/FullCard";
import { Row } from "../../components/funcionais/RowComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { LinkIconRow } from "../../components/LinkIconRow";
import { LinkProfileComponent } from "../../components/LinkProfileComponent";

export const SecurityScreen = () => {
    return (
        <ContainerComponent>
            <FullCard style={{ backgroundColor: 'purple' }}>
                <Row style={{ alignItems: 'center' }}>
                    <AntDesign name='arrowleft' color='white' size={24} />
                    <Title style={{ fontSize: 24, color: 'white', marginLeft: 16 }}>Segurança e Privacidade</Title>
                </Row>
            </FullCard>
            <View style={{ marginTop: 16 }}>
                <LinkProfileComponent name={'12312'} Icon={Feather} iconName='carret-down' link />
            </View>
            <View style={{ marginTop: 16 }}>
                <LinkProfileComponent name={'12312'} Icon={Feather} iconName='carret-down' link />
            </View>
            <View style={{ marginTop: 16 }}>
                <LinkProfileComponent name={'12312'} Icon={Feather} iconName='carret-down' link />
            </View>
        </ContainerComponent>
    )
}
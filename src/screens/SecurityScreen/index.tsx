import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { FullCard } from "../../components/funcionais/FullCard";
import { Row } from "../../components/funcionais/RowComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { LinkProfileComponent } from "../../components/LinkProfileComponent";

export const SecurityScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <ContainerComponent>
            <FullCard style={{ backgroundColor: 'purple' }}>
                <Row style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <AntDesign name='arrowleft' color='white' size={24} />
                    </TouchableOpacity>
                    <Title style={{ fontSize: 24, color: 'white', marginLeft: 16 }}>Segurança e Privacidade</Title>
                </Row>
            </FullCard>
            <View style={{ marginTop: 16 }}>
                <LinkProfileComponent name={'Lorem'} Icon={Feather} iconName='Lorem' link />
            </View>
            <View style={{ marginTop: 16 }}>
                <LinkProfileComponent name={'Ipsum'} Icon={Feather} iconName='carret-down' link />
            </View>
            <View style={{ marginTop: 16 }}>
                <LinkProfileComponent name={'Dolor sit'} Icon={Feather} iconName='carret-down' link />
            </View>
        </ContainerComponent>
    )
}
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { LinkIcon } from "../../components/LinkIcon";
import { PromoComponent } from "../../components/PromoComponent";
import { HeaderComponent } from "../HeaderComponent";

export const DiscoveryScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <ContainerComponent>
            <HeaderComponent>
                <Space>
                    <Title top={-2} bottom={2} style={{ color: 'white', fontSize: 30 }}>Descubra</Title>
                    <Row>
                        <View style={{ marginRight: 16 }}>
                            <LinkIcon onPress={() => { navigation.navigate('ShoppingScreen') }} iconName='shopping-bag' name='Shopping' Icon={Feather} />
                        </View>
                        <View style={{ marginRight: 16 }}>
                            <LinkIcon iconName='shopping-bag' name='Shopping' Icon={Feather} />
                        </View>
                        <View style={{ marginRight: 16 }}>
                            <LinkIcon iconName='shopping-bag' name='Shopping' Icon={Feather} />
                        </View>
                    </Row>
                </Space>
            </HeaderComponent>
            <Space>
                <Title top={2} bottom={1} style={{ color: 'gray' }}>Pro seu pré</Title>
                <PromoComponent />
            </Space>
        </ContainerComponent>
    )
}
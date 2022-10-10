import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { FullCard } from "../../components/funcionais/FullCard";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { OffertComponent } from "../../components/OffertComponent";
//@ts-ignore
import promocao from '../../assets/promocao.jpg'
import { View } from "react-native";

export const FinancesScreen = () => {
    return (
        <ContainerComponent>
            <FullCard style={{ backgroundColor: 'purple' }}>
                <Row style={{ alignItems: 'center' }}>
                    <AntDesign name='arrowleft' size={24} color={'white'} />
                    <Title style={{ fontSize: 24, color: 'white', marginLeft: 16 }}>Finanças</Title>
                </Row>
            </FullCard>
            <Space top={2} bottom={1}>
                <Title>Produtos financiáveis</Title>
                <View>
                    <OffertComponent image={promocao} />
                </View>
                <View style={{ marginTop: 16 }}>
                    <OffertComponent image={promocao} />
                </View>
            </Space>
        </ContainerComponent>
    )
}
import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { FullCard } from "../../components/funcionais/FullCard";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { OffertComponent } from "../../components/OffertComponent";

//@ts-ignore
import recharge from '../../assets/recharge.png'
import { RechargeComponent } from "../../components/RechargeComponent";
import { View } from "react-native";
import { Row } from "../../components/funcionais/RowComponent";

export const RechargeScreen = () => {
    return (
        <ContainerComponent>
            <FullCard style={{ backgroundColor: 'purple' }}>
                <AntDesign name='arrowleft' color='white' size={24} />
                <Title top={2} style={{ color: 'white', fontSize: 24 }}>Recarga</Title>
            </FullCard>
            <Space top={1}>
                <Title style={{ color: '#535353' }} bottom={1}>Recarga digital</Title>
                <OffertComponent image={recharge} />
            </Space>
            <Space>
                <Title top={2} bottom={1}>Opções de recarga</Title>
                <Row>
                    <View style={{ width: 240, marginRight: 16 }}>
                        <RechargeComponent value='12,00' />
                    </View>
                    <View style={{ width: 240, marginRight: 16 }}>
                        <RechargeComponent value='15,00' />
                    </View>
                    <View style={{ width: 240 }}>
                        <RechargeComponent value='20,00' />
                    </View>
                </Row>
            </Space>
        </ContainerComponent>
    )
}
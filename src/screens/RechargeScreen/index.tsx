import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { FullCard } from "../../components/funcionais/FullCard";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { OffertComponent } from "../../components/OffertComponent";

//@ts-ignore
import recharge from '../../assets/recharge.png'

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
                <Title>Opções de recarga</Title>
            </Space>
        </ContainerComponent>
    )
}
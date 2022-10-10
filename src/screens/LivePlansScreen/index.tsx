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
//@ts-ignore
import vivofibra from '../../assets/vivofibra.jpg'


export const LivePlansScreen = () => {
    return (
        <ContainerComponent>
            <FullCard style={{ backgroundColor: 'purple' }}>
                <Row style={{ alignItems: 'center' }}>
                    <AntDesign name='arrowleft' size={24} color='white' />
                    <Title style={{ color: 'white', fontSize: 24, marginLeft: 16 }}>Meus planos</Title>
                </Row>
            </FullCard>
            <Space>
                <Title top={2} bottom={1} style={{ color: '#646464' }}>PLANOS PARA SEU PRÉ</Title>
                <OffertComponent image={promocao} />
            </Space>
            <Space>
                <Title top={2} bottom={1} style={{ color: '#646464' }}>PLANOS PARA SUA CASA</Title>
                <OffertComponent image={vivofibra} />
            </Space>
        </ContainerComponent>
    )
}
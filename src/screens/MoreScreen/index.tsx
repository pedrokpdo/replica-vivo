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
import recicle from '../../assets/recicle.jpg'


export const MoreScreen = () => {
    return (
        <ContainerComponent>
            <FullCard style={{ backgroundColor: 'purple' }}>
                <Row style={{ alignItems: 'center' }}>
                    <AntDesign name='arrowleft' size={24} color='white' />
                    <Title style={{ color: 'white', marginLeft: 16, fontSize: 24 }}>Mais</Title>
                </Row>
            </FullCard>
            <Space top={2}>
                <Title bottom={1} style={{ color: '#525252' }}>Fique por dentro</Title>
                <OffertComponent image={recicle} />
            </Space>
            <Space top={2}>
                <Title bottom={1} style={{ color: '#525252' }}>VARIEDADES</Title>
                <OffertComponent image={promocao} />
            </Space>
        </ContainerComponent>
    )
}
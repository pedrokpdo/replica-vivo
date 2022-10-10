import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { FullCard } from "../../components/funcionais/FullCard";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { OffertComponent } from "../../components/OffertComponent";
import { HeaderComponent } from "../HeaderComponent";
//@ts-ignore
import promo from '../../assets/promo.jpg'

export const ShoppingScreen = () => {
    return (
        <ContainerComponent>
            <FullCard style={{ backgroundColor: 'purple' }}>
                <View>
                    <AntDesign name='arrowleft' size={24} color='white' />
                    <Title top={2} style={{ color: 'white', fontSize: 24 }}>Shopping</Title>
                </View>
            </FullCard>
            <Space top={2}>
                <Title style={{color: '#5c5c5c'}}>Ofertas em destaque</Title>
                <Row>
                    <OffertComponent image={promo}/>
                </Row>
            </Space>
        </ContainerComponent>
    )
}
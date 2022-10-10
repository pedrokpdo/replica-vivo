import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { FullCard } from "../../components/funcionais/FullCard";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { OffertComponent } from "../../components/OffertComponent";
//@ts-ignore
import promo from '../../assets/promo.jpg'
import { Dimensions } from "react-native";
import { Row } from "../../components/funcionais/RowComponent";
import { BallComponent } from "../../components/BallComponent";
const width = Dimensions.get('screen').width

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
                <Title style={{ color: '#5c5c5c' }}>Ofertas em destaque</Title>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Row>
                        <View style={{ marginRight: 16, width: width - 100 }}>
                            <OffertComponent image={promo} />
                        </View>
                        <View style={{ marginRight: 0, width: width - 100 }}>
                            <OffertComponent image={promo} />
                        </View>
                    </Row>
                </ScrollView>
                <View style={{ alignSelf: 'center', marginTop: 30 }}>
                    <BallComponent />
                </View>
            </Space>
        </ContainerComponent>
    )
}
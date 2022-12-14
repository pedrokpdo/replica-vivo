import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { FullCard } from "../../components/funcionais/FullCard";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { OffertComponent } from "../../components/OffertComponent";
//@ts-ignore
import promo from '../../assets/promo.jpg'
//@ts-ignore
import phone from '../../assets/phone.png'
//@ts-ignore
import clock from '../../assets/relogio.png'
import { Dimensions } from "react-native";
import { Row } from "../../components/funcionais/RowComponent";
import { BallComponent } from "../../components/BallComponent";
import { ProductComponent } from "../../components/ProductComponent";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get('screen')

export const ShoppingScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <ContainerComponent>
            <FullCard style={{ backgroundColor: 'purple' }}>
                <View>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <AntDesign name='arrowleft' color='white' size={24} />
                    </TouchableOpacity>
                    <Title top={2} style={{ color: 'white', fontSize: 24 }}>Shopping</Title>
                </View>
            </FullCard>
            <Space top={2}>
                <Title bottom={1} style={{ color: '#5c5c5c' }}>Ofertas em destaque</Title>
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
            <Space>
                <Title bottom={1} top={4} style={{ color: '#5c5c5c' }}>SMARTPHONES</Title>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <ProductComponent image={phone} />
                    <ProductComponent image={phone} />
                    <ProductComponent image={phone} />
                </ScrollView>
            </Space>
            <Space top={3} bottom={2} style={{ alignSelf: 'center' }}>
                <BallComponent />
            </Space>
            <Space>
                <Title bottom={1} top={4} style={{ color: '#5c5c5c' }}>ACESSORIOS</Title>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <ProductComponent image={clock} />
                    <ProductComponent image={phone} />
                    <ProductComponent image={phone} />
                </ScrollView>
            </Space>
            <Space top={3} bottom={2} style={{ alignSelf: 'center' }}>
                <BallComponent />
            </Space>
        </ContainerComponent>
    )
}
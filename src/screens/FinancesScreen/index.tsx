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
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const FinancesScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <ContainerComponent>
            <FullCard style={{ backgroundColor: 'purple' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <AntDesign name='arrowleft' color='white' size={24} />
                </TouchableOpacity>
                <Title top={1} style={{ fontSize: 24, color: 'white' }}>Finanças</Title>
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
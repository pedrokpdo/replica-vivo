import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { GraphicComponent } from "../GraphicComponent";

export const HeaderComponent = () => {
    return (
        <View style={{ backgroundColor: 'purple', height: 450 }}>
            <Space>
                <Title top={2} style={{ color: 'white', fontSize: 30 }}>Olá Pedro</Title>
                <Row top={4} style={{ justifyContent: 'space-between' }}>
                    <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#c1c1c1', alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="phone" size={24} color='white' />
                        </View>
                        <Title style={{ color: 'white', marginLeft: 16 }}>Plano vivo turbo</Title>
                    </Row>
                    <Title style={{ color: 'white' }}>{'v'}</Title>
                </Row>
            </Space>
            <Space top={4} style={{ justifyContent: 'center', alignItems: 'center'}}>
                <GraphicComponent />
            </Space>
            <Space top={4} style={{}}>
                <View style={{ width: '70%', alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam!</Text>
                </View>
            </Space>
        </View>
    )
}
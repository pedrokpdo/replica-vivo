import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { FullCard } from "../../components/funcionais/FullCard";
import { Row } from "../../components/funcionais/RowComponent";
import { Title } from "../../components/funcionais/TitleComponent";

export const ProfileScreen = () => {
    return (
        <ContainerComponent>
            <FullCard color='purple'>
                <Row bottom={4} style={{ justifyContent: 'space-between' }}>
                    <Row style={{ alignItems: 'center' }}>
                        <Ionicons name='arrow-back' size={24} color='white' />
                        <Title style={{ marginLeft: 16, color: 'white', fontSize: 28 }}>Perfil</Title>
                    </Row>
                    <Ionicons name='notifications-outline' size={32} color='white' />
                </Row>
                <Row bottom={2} style={{ alignItems: 'center' }}>
                    <View style={{ width: 80, height: 80, backgroundColor: '#a3a3a37f', borderRadius: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <Feather name="camera" size={32} color={'white'} />
                    </View>
                    <View style={{ marginLeft: 24 }}>
                        <Row style={{ alignItems: 'center' }}>
                            <Title style={{ color: 'white', fontSize: 26 }}>PEDRO HENRIQUE</Title>
                            <Ionicons name='caret-down' size={20} color='white' />
                        </Row>
                        <Title style={{ color: 'white' }}>{'(24) 9 9969-2339'}</Title>
                    </View>
                </Row>
            </FullCard>
        </ContainerComponent>
    )
}
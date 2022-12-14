import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { FullCard } from "../../components/funcionais/FullCard";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { LinkProfileComponent } from "../../components/LinkProfileComponent";

export const ProfileScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <ContainerComponent>
            <FullCard color='purple'>
                <Row bottom={4} style={{ justifyContent: 'space-between' }}>
                    <Row style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <Ionicons name='arrow-back' size={24} color='white' />
                        </TouchableOpacity>
                        <Title style={{ marginLeft: 16, color: 'white', fontSize: 28 }}>Perfil</Title>
                    </Row>
                    <TouchableOpacity onPress={() => {navigation.navigate('NotificationsScreen')}}>
                        <Ionicons name='notifications-outline' size={32} color='white' />
                    </TouchableOpacity>
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
            <Space top={2}>
                <Title>Ajuda</Title>
            </Space>
            <TouchableOpacity onPress={() => { navigation.navigate('SecurityScreen') }} style={{ marginTop: 16 }}>
                <LinkProfileComponent name={'Seguran??a e privacidade'} Icon={AntDesign} iconName='unlock' link={true} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 16 }}>
                <LinkProfileComponent name={'Meus dados'} Icon={Ionicons} iconName='ios-person-outline' link={true} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 16 }}>
                <LinkProfileComponent name={'Logout'} Icon={Feather} iconName='log-out' />
            </TouchableOpacity>
            <Space top={2}>
                <Text>Lorem, ipsum dolor.</Text>
            </Space>
        </ContainerComponent>
    )
}
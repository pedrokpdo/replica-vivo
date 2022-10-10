import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { ContainerComponent } from "../funcionais/ContainerComponent";
import { FullCard } from "../funcionais/FullCard";
import { Title } from "../funcionais/TitleComponent";
import { ListEmptyComponent } from "../ListEmptyComponent";
//@ts-ignore
import notifications from '../../assets/notifications.png'
export const NotificationsScreen = () => {
    return (
        <ContainerComponent>
            <FullCard style={{ backgroundColor: 'purple' }}>
                <AntDesign name='arrowleft' size={24} color='white' />
                <Title top={1} style={{ color: 'white', fontSize: 24 }}>Notificações</Title>
            </FullCard>
            <View style={{ alignSelf: 'center' }}>
                <ListEmptyComponent image={notifications} />
            </View>
        </ContainerComponent>
    )
}
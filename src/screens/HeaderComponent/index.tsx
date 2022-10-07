import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Row } from "../../components/funcionais/RowComponent";


export const HeaderComponent = ({ children }) => {
    return (
        <View style={{ backgroundColor: 'purple' }}>
            <Row top={2} style={{ alignItems: 'center', justifyContent: 'space-around', width: 80, alignSelf: 'flex-end', marginRight: 8 }}>
                <MaterialIcons name="refresh" size={24} color='white' />
                <MaterialIcons name="person-add" size={24} color='white' />
            </Row>
            <View style={{ paddingVertical: 60 }}>
                {children}
            </View>
        </View>
    )
}
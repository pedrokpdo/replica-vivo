import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Row } from "../../components/funcionais/RowComponent";

interface Props {
    children?: any;
    icons?: boolean;
}

export const HeaderComponent = ({ children, icons = true }: Props) => {
    return (
        <View style={{ backgroundColor: 'purple' }}>
            {icons === true ? (
                <Row top={2} style={{ alignItems: 'center', justifyContent: 'space-around', width: 80, alignSelf: 'flex-end', marginRight: 8 }}>
                    <MaterialIcons name="refresh" size={24} color='white' />
                    <MaterialIcons name="person-add" size={24} color='white' />
                </Row>
            ) : null
            }
            <View style={{ paddingVertical: 60 }}>
                {children}
            </View>
        </View>
    )
}
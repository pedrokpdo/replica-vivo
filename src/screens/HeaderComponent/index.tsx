import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Row } from "../../components/funcionais/RowComponent";

interface Props {
    children?: any;
    icons?: boolean;
}

export const HeaderComponent = ({ children, icons = true }: Props) => {
    const { navigate } = useNavigation<any>()
    return (
        <View style={{ backgroundColor: 'purple' }}>
            {icons === true ? (
                <Row top={2} style={{ alignItems: 'center', justifyContent: 'space-around', width: 80, alignSelf: 'flex-end', marginRight: 8 }}>
                    <TouchableOpacity>
                        <MaterialIcons name="refresh" size={24} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigate('ProfileStack') }}>
                        <MaterialIcons name="person-add" size={24} color='white' />
                    </TouchableOpacity>
                </Row>
            ) : null
            }
            <View style={{ paddingVertical: 60 }}>
                {children}
            </View>
        </View>
    )
}
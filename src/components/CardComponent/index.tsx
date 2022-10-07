import React from "react";
import { TouchableOpacity } from "react-native";

interface Props {
    children?: any;
    onPress?: () => void;
    style?: any
}

export const CardComponent = ({ children, onPress, style = {} }: Props) => {
    return (
        <TouchableOpacity style={{ borderRadius: 8, borderColor: 'black', borderWidth: .5, ...style }} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}
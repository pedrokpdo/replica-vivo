import React from "react";
import { Text } from "react-native";

interface Props {
    bold?: boolean;
    children?: any;
    style?: any;
}

export const Title = ({ bold, children, style = {} }: Props) => {
    return (
        <Text style={{ fontWeight: bold ? bold : '400', fontSize: 18, ...style }}>{children}</Text>
    )
}
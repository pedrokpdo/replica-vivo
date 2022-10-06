import React from "react";
import { Text as NativeText } from "react-native";

interface Props {
    children?: any;
    style?: any;
}

export const Text = ({ children, style = {} }: Props) => {
    return (
        <NativeText style={{ fontSize: 16, ...style }}>{children}</NativeText>
    )
}
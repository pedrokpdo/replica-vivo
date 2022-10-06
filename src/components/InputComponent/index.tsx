import React from "react";
import { TextInput } from "react-native";

interface Props {
    placeholder?: string;
}

export const InputComponent = ({placeholder}: Props) => {
    return (
        <TextInput style={{ borderBottomWidth: 0.5, borderBottomColor: 'gray', padding: 8 }} placeholder={placeholder} placeholderTextColor={'black'}></TextInput>
        )
}
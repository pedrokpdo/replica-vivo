import React from "react";
import { Button as ButtonNative } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";
import { Title } from "../funcionais/TitleComponent";

interface Props {
    text?: string;
    onPress?: () => void;
    style?: any;
    top?: number;
    bottom?: number;
    variant?: string;
}

export const Button = ({ text, onPress, style = {}, top=0, bottom=0, variant }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ justifyContent: 'center', alignItems: 'center', height: 45, backgroundColor: variant === 'other' ? 'white' : 'purple', marginTop: 8 * top, marginBottom: 8 * bottom, borderRadius: 4, ...style}}>
            <Title style={{color: variant === 'other' ? 'purple' : 'white'}}>{text}</Title>
        </TouchableOpacity>
    )
}


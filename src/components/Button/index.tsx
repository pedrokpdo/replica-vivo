import React from "react";
import { Button as ButtonNative } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";
import { Title } from "../funcionais/TitleComponent";

export const Button = ({ text, onPress, styles = {}, top=0, bottom=0 }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ justifyContent: 'center', alignItems: 'center', height: 50, backgroundColor: 'purple', marginTop: 8 * top, marginBottom: 8 * bottom, ...styles}}>
            <Title style={{color: 'white'}}>{text}</Title>
        </TouchableOpacity>
    )
}


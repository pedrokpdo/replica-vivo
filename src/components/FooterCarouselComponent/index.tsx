import React from "react";
import { View } from "react-native";
import { Row } from "../funcionais/RowComponent";

export const FooterCarouselComponent = () => {
    return (
        <Row style={{ width: 60, justifyContent: 'space-around' }}>
            <View style={{ backgroundColor: 'white', width: 18, height: 6 }} />
            <View style={{ backgroundColor: 'gray', width: 6, height: 6, borderRadius: 3 }} />
            <View style={{ backgroundColor: 'gray', width: 6, height: 6, borderRadius: 3 }} />
        </Row>
    )
}
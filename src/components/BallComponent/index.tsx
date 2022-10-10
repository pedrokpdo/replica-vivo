import React from "react";
import { View } from "react-native";
import { Row } from "../funcionais/RowComponent";

export const BallComponent = () => {
    return (
        <Row style={{ width: 46, justifyContent: 'space-around' }}>
            <View style={{ width: 8, height: 8, backgroundColor: 'purple', borderRadius: 4 }} />
            <View style={{ width: 8, height: 8, backgroundColor: '#c5c5c5', borderRadius: 4 }} />
            <View style={{ width: 8, height: 8, backgroundColor: '#c5c5c5', borderRadius: 4 }} />
        </Row>
    )
}
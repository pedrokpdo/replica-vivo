import React from 'react'
import { View, Text } from 'react-native'
import { Space } from '../../components/funcionais/SpaceComponent'
import { TopTabComponent } from '../../components/TopTabComponent'

export const FirstLoginScreen = () => {
    return (
        <View>
            <Space>
                <TopTabComponent />
            </Space>
        </View>
    )
}
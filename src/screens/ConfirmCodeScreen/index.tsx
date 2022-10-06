import React from 'react'
import { View } from 'react-native'
import { Button } from '../../components/Button'
import { Row } from '../../components/funcionais/RowComponent'
import { Space } from '../../components/funcionais/SpaceComponent'
import { Title } from '../../components/funcionais/TitleComponent'

export const ConfirmCodeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Space>

                <Title bottom={4}>Digite o código recebido</Title>
                <Row style={{ justifyContent: 'space-around', width: '100%' }}>
                    <View style={{ backgroundColor: '#cecece', width: 50, height: 50 }}>

                    </View>
                    <View style={{ backgroundColor: '#cecece', width: 50, height: 50 }}>

                    </View>
                    <View style={{ backgroundColor: '#cecece', width: 50, height: 50 }}>

                    </View>
                    <View style={{ backgroundColor: '#cecece', width: 50, height: 50 }}>

                    </View>
                    <View style={{ backgroundColor: '#cecece', width: 50, height: 50 }}>

                    </View>
                    <View style={{ backgroundColor: '#cecece', width: 50, height: 50 }}>

                    </View>
                </Row>
                <Button text={'Prosseguir'} onPress={() => { }} top={4} />
            </Space>
        </View>
    )
}
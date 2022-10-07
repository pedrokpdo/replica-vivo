import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { Button } from '../../components/Button'
import { Row } from '../../components/funcionais/RowComponent'
import { Space } from '../../components/funcionais/SpaceComponent'
import { Title } from '../../components/funcionais/TitleComponent'

export const ConfirmCodeScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 400, alignSelf: 'center' }}>
                <Title top={20} style={{ textAlign: 'center', fontSize: 24 }} bottom={4}>Enviamos um código para seu número vivo, por favor digite-o no campo abaixo</Title>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Space top={10}>
                    <Row style={{ justifyContent: 'space-around', width: '100%' }}>
                        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, width: 40, height: 50 }} />
                        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, width: 40, height: 50 }} />
                        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, width: 40, height: 50 }} />
                        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, width: 40, height: 50 }} />
                        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, width: 40, height: 50 }} />
                        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, width: 40, height: 50 }} />
                    </Row>
                    <Button text={'Prosseguir'} onPress={() => { navigation.navigate('BottomStack') }} top={4} />
                </Space>
            </View>
        </>
    )
}
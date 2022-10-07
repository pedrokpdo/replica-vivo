import React from 'react'
import { View } from 'react-native'
import { Button } from '../../components/Button'
import { CardComponent } from '../../components/CardComponent'
import { FooterCarouselComponent } from '../../components/FooterCarouselComponent'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { Row } from '../../components/funcionais/RowComponent'
import { Space } from '../../components/funcionais/SpaceComponent'
import { Text } from '../../components/funcionais/TextComponent'
import { Title } from '../../components/funcionais/TitleComponent'
import { LinkComponent } from '../../components/LinkComponent'
import { TitleComponent } from '../../components/TitleComponent'
import { HeaderComponent } from '../HeaderComponent'

export const HomeScreen = () => {
    return (
        <ContainerComponent>
            <HeaderComponent>
                <Space>
                    <Title bold style={{ color: 'white', fontSize: 28 }}>Boa tarde PEDRO</Title>
                    <Text top={1} style={{ fontSize: 25, color: 'white' }}>Sabia que o app Vivo é o lugar mais seguro pra confirmar todas as informações da sua fatura?</Text>
                    <Button top={6} onPress={() => { }} text='Saiba mais' style={{ width: 200 }} variant='other' />
                    <Space bottom={-2} top={4} style={{ alignSelf: 'center' }}>
                        <FooterCarouselComponent />
                    </Space>
                </Space>
            </HeaderComponent>
            <Space>
                <CardComponent>
                    <Title>ola mundo</Title>
                </CardComponent>
            </Space>
            <Space top={2}>
                <Title>Ultima Conta</Title>
                <Text top={1}>Lorem ipsum dolor sit - amet.</Text>
            </Space>
            <Space top={2}>
                <TitleComponent name={'Alerta'} color={'red'} />
                <Row style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                    <Title style={{ flex: 1, fontSize: 30 }}>R$ 329,99</Title>
                    <Button style={{ flex: 1.5 }} text={'Codigo de barras'} onPress={() => { }} />
                </Row>
            </Space>
            <Space top={4}>
                <LinkComponent onPress={() => { }} name='Lorem ipsum dolores any' />
                <Text top={5}>Lorem ipsum dolor sit amet.</Text>
            </Space>
        </ContainerComponent>
    )
}
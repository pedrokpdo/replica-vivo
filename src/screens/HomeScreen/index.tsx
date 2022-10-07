import React from 'react'
import { Button } from '../../components/Button'
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
            <HeaderComponent />
            <Space top={2}>
                <Title>Ultima Conta</Title>
                <Text top={1}>Lorem ipsum dolor sit - amet.</Text>
            </Space>
            <Space top={2}>
                <TitleComponent name={'Alerta'} color={'red'} />
                <Row style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                    <Title style={{ flex: 1, fontSize: 30 }}>R$ 329,99</Title>
                    <Button styles={{ flex: 1.5 }} text={'Codigo de barras'} onPress={() => { }} />
                </Row>
            </Space>
            <Space top={4}>
                <LinkComponent onPress={() => { }} name='Lorem ipsum dolores any' />
                <Text top={5}>Lorem ipsum dolor sit amet.</Text>
            </Space>
        </ContainerComponent>
    )
}
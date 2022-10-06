import React from 'react'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { Space } from '../../components/funcionais/SpaceComponent'
import { Text } from '../../components/funcionais/TextComponent'
import { Title } from '../../components/funcionais/TitleComponent'
import { InputComponent } from '../../components/InputComponent'
import { TopTabComponent } from '../../components/TopTabComponent'

export const FirstLoginScreen = () => {
    return (
        <ContainerComponent>
            <TopTabComponent />
            <Space top={2}>
                <Title>Identifique-se com seu numero</Title>
                <InputComponent/>
            </Space>
        </ContainerComponent>
    )
}
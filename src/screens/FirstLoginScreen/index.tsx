import React, { useState } from 'react'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { Space } from '../../components/funcionais/SpaceComponent'
import { Text } from '../../components/funcionais/TextComponent'
import { Title } from '../../components/funcionais/TitleComponent'
import { InputComponent } from '../../components/InputComponent'
import { TopTabComponent } from '../../components/TopTabComponent'

export const FirstLoginScreen = () => {
    const [press, setPress] = useState('number')
    console.log(press)
    return (
        <ContainerComponent>
            <TopTabComponent setPress={setPress} />
            {press === 'number' ? (
                <Space top={2}>
                    <Title top={2}>Identifique-se com seu numero</Title>
                    <Text bottom={1} top={2}>Coloque seu numero</Text>
                    <InputComponent />
                </Space>
            ) : (
                <Space top={2}>
                    <Title>Identifique-se com seu CPF ou E-mail</Title>
                    <InputComponent />
                </Space>
            )}
        </ContainerComponent>
    )
}
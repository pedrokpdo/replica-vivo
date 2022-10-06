import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { Divider } from '../../components/funcionais/Divider'
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
                    <InputComponent placeholder='(24) 9 99869-2339' />
                    <Button top={2} text={'Prosseguir'} onPress={() => { }} />
                </Space>
            ) : (
                <Space top={2}>
                    <Title top={2}>Identifique-se com seu CPF ou E-mail</Title>
                    <Text bottom={1} top={2}>Por CPF:</Text>
                    <InputComponent placeholder='161.513.177-93' />
                    <Button top={2} text={'Prosseguir'} onPress={() => { }} />
                    <Divider top={1} bottom={1}/>
                    <Text bottom={1} top={2}>Por E-mail:</Text>
                    <InputComponent placeholder='pedromotoehm@gmail.com' />
                    <Button top={2} text={'Prosseguir'} onPress={() => { }} />
                </Space>
            )}
        </ContainerComponent>
    )
}
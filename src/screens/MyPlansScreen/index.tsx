import React, { useState } from "react";
import { View } from "react-native";
import { ButtonLine } from "../../components/ButtonLine";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { MyPlansTopTabComponent } from "../../components/MyPlansTopTabComponent";
import { HeaderComponent } from "../HeaderComponent";

export const MyPlansScreen = () => {
    const [press, setPress] = useState('consume')
    return (
        <>
            <ContainerComponent>
                <HeaderComponent>
                    <Space>
                        <Title style={{ fontSize: 30, color: 'white' }} bottom={-8}>Meu Plano</Title>
                    </Space>
                </HeaderComponent>
                <MyPlansTopTabComponent press={press} setPress={setPress} />
                {press === 'consume' ? (
                    <Space>
                        <Title top={20} style={{ alignSelf: 'center', textAlign: 'center' }} bold>Não foi possível mostrar a pagina</Title>
                        <Text top={1} style={{ alignSelf: 'center', textAlign: 'center' }}>Neste momento, não é possivel acessar este conteúdo. Por favor, tente novamente em alguns minutos</Text>
                        <Space top={4} style={{ alignSelf: 'center', width: 200 }}>
                            <ButtonLine name='Tentar novamente' />
                        </Space>
                    </Space>
                ) : null}
            </ContainerComponent>
        </>
    )
}
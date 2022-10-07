import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { HeaderComponent } from "../HeaderComponent";

export const MyPlansScreen = () => {
    return (
        <ContainerComponent>
            <HeaderComponent>
                <Space>
                    <Title style={{ fontSize: 30, color: 'white' }} bottom={-8}>Meu Plano</Title>
                </Space>
            </HeaderComponent>
        </ContainerComponent>
    )
}
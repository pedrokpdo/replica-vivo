import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { LinkIcon } from "../../components/LinkIcon";
import { HeaderComponent } from "../HeaderComponent";

export const DiscoveryScreen = () => {
    return (
        <ContainerComponent>
            <HeaderComponent>
                <Space>
                    <Title style={{ color: 'white', fontSize: 30 }}>Descubra</Title>
                    <Row>
                        <LinkIcon iconName='shopping-bag' name='Shopping' Icon={Feather} />
                    </Row>
                </Space>
            </HeaderComponent>
        </ContainerComponent>
    )
}
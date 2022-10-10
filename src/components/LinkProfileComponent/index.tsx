import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { FullCard } from "../funcionais/FullCard";
import { Row } from "../funcionais/RowComponent";
import { Title } from "../funcionais/TitleComponent";

export const LinkProfileComponent = ({ Icon, iconName, name, link = false }) => {
    return (
        <FullCard>
            <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Row style={{ alignItems: 'center' }}>
                    <Icon name={iconName} color={'black'} size={24} />
                    <Title style={{ fontSize: 22, marginLeft: 16 }}>{name}</Title>
                </Row>
                {link ? (
                    <AntDesign name='right' size={20} color='black' />
                ) : null}
            </Row>
        </FullCard>
    )
}
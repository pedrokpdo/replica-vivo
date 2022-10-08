import React from "react";
import { Divider } from "../funcionais/Divider";
import { Row } from "../funcionais/RowComponent";
import { Title } from "../funcionais/TitleComponent";

export const LinkIconRow = ({ name }) => {
    return (
        <>
            <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Title>{name}</Title>
                <Title>{'>'}</Title>
            </Row>
            <Divider top={4} bottom={4} />
        </>
    )
}
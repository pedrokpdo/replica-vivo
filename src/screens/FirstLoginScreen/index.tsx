import React from 'react'
import { View, Text } from 'react-native'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { Space } from '../../components/funcionais/SpaceComponent'
import { TopTabComponent } from '../../components/TopTabComponent'

export const FirstLoginScreen = () => {
    return (
        <ContainerComponent>
            <TopTabComponent />
        </ContainerComponent>
    )
}
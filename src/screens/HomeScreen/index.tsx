import React from 'react'
import { Title } from '../../components/funcionais/TitleComponent'
import { View } from 'react-native'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { HeaderComponent } from '../HeaderComponent'

export const HomeScreen = () => {
    return (
        <ContainerComponent>
            <HeaderComponent />
        </ContainerComponent>
    )
}
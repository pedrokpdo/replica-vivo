import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Button } from '../../components/Button'
import { CardComponent } from '../../components/CardComponent'
import { FooterCarouselComponent } from '../../components/FooterCarouselComponent'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { Row } from '../../components/funcionais/RowComponent'
import { Space } from '../../components/funcionais/SpaceComponent'
import { Text } from '../../components/funcionais/TextComponent'
import { Title } from '../../components/funcionais/TitleComponent'
import { LinkComponent } from '../../components/LinkComponent'
import { TitleComponent } from '../../components/TitleComponent'
import { HeaderComponent } from '../HeaderComponent'
//@ts-ignore
import vivocontrole from '../../assets/vivocontrole.jpg'

export const HomeScreen = () => {
    return (
        <ContainerComponent>
            <HeaderComponent>
                <Space>
                    <Title top={-2} bold style={{ color: 'white', fontSize: 28 }}>Boa tarde PEDRO</Title>
                    <Text top={1} style={{ fontSize: 25, color: 'white' }}>Sabia que o app Vivo é o lugar mais seguro pra confirmar todas as informações da sua fatura?</Text>
                    <Button top={4} onPress={() => { }} text='Saiba mais' style={{ width: 200 }} variant='other' />
                    <Space bottom={-6} top={4} style={{ alignSelf: 'center' }}>
                        <FooterCarouselComponent />
                    </Space>
                </Space>
            </HeaderComponent>
            <ScrollView>
                <Space top={2}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CardComponent style={{ marginRight: 24 }}>
                            <Row style={{ justifyContent: 'space-between' }}>
                                <View style={{ padding: 8, backgroundColor: 'white', paddingRight: 24  }}>
                                    <Title bottom={1} top={1}>Plano ativo</Title>
                                    <Text>Vivo controle - 5gb - R$ 10,00</Text>
                                </View>
                                <Image source={vivocontrole} style={{ width: 100, height: 100, borderBottomRightRadius: 8, borderTopRightRadius: 8 }} />
                            </Row>
                        </CardComponent>
                        <CardComponent style={{}}>
                            <Row style={{ justifyContent: 'space-between' }}>
                                <View style={{ padding: 8, backgroundColor: 'white'  }}>
                                    <Title bottom={1} top={1}>Plano ativo</Title>
                                    <Text>Vivo controle - 5gb - R$ 10,00</Text>
                                </View>
                                <Image source={vivocontrole} style={{ width: 100, height: 100, borderBottomRightRadius: 8, borderTopRightRadius: 8 }} />
                            </Row>
                        </CardComponent>
                    </ScrollView>
                </Space>
                <Space>
                    <Title top={2} bottom={1} style={{ color: 'gray' }}>Meus Planos</Title>
                    <CardComponent style={{ padding: 8, backgroundColor: 'white' }}>
                        <View style={{ marginLeft: 8 }}>
                            <Title bottom={2}>SmartVivo Pré</Title>
                            <LinkComponent name='Ver meus produtos' />
                        </View>
                    </CardComponent>
                </Space>
                <Space top={2}>
                    <Title>Ultima Conta</Title>
                    <Text top={1}>Lorem ipsum dolor sit - amet.</Text>
                </Space>
                <Space top={2}>
                    <TitleComponent name={'Alerta'} color={'red'} />
                    <Row style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                        <Title style={{ flex: 1, fontSize: 30 }}>R$ 329,99</Title>
                        <Button style={{ flex: 1.5 }} text={'Codigo de barras'} onPress={() => { }} />
                    </Row>
                </Space>
                <Space top={4}>
                    <LinkComponent onPress={() => { }} name='Lorem ipsum dolores any' />
                    <Text top={5}>Lorem ipsum dolor sit amet.</Text>
                </Space>
            </ScrollView>
        </ContainerComponent >
    )
}
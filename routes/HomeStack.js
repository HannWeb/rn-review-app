import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
//components
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import Header from '../shared/Header'

const { Navigator, Screen } = createStackNavigator()

const HomeNavigator = () => (
    <Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#eee",
                height: 80,
            },
            headerTintColor: "#444",
        }}
    >
        <Screen name="Home" component={Home} options={({ navigation }) => {
            return {
                headerTitleAlign: "center",
                headerTitle: () => <Header navigation={navigation} title="GameZone" />
            }
        }} />
        <Screen name="Details" component={ReviewDetails} />
    </Navigator >
)

export default HomeNavigator
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import Header from '../shared/Header'

import About from '../screens/About'

const { Navigator, Screen } = createStackNavigator()

function AboutStack() {
    return (
        <Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#eee",
                    height: 80,
                },
                headerTintColor: "#444",
            }}
        >
            <Screen name="About Game Zone" component={About} options={({ navigation }) => {
                return {
                    headerTitleAlign: "center",
                    headerTitle: () => <Header navigation={navigation} title="About GameZone" />
                }
            }} />
        </Navigator >
    )
}

export default AboutStack;

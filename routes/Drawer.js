import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './HomeStack'
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator()

function RootDrawerNavigator() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="HomeStack" component={HomeStack} />
            <Drawer.Screen name="AboutStack" component={AboutStack} />
        </Drawer.Navigator>
    )
}

export default appNavigator = () => (
    <NavigationContainer>
        <RootDrawerNavigator />
    </NavigationContainer>)
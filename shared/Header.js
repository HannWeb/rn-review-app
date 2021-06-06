import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <ImageBackground style={styles.header} source={require("../assets/game_bg.png")}>
            <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openMenu} />
            <View style={styles.headerTitle}>
                <Image source={require("../assets/heart_logo.png")} style={styles.logo} />
                <Text style={styles.headerText}> {title} </Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('window').width,
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1
    },
    icon: {
        position: "absolute",
        left: 5
    },
    headerTitle: {
        flexDirection: "row"
    },
    logo: {
        width: 20,
        height: 20,
        marginHorizontal: 10
    }
})

export default Header

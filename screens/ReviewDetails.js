import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

//components
import Card from '../shared/Card'
import { globalStyles } from '../styles/global'

function ReviewDetails({ route }) {
    const item = route.params

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating: </Text>
                    <Image source={images.raitings[item.rating]} />
                </View>
            </Card>
        </View>
    )
}

const images = {
    raitings: {
        "1": require("../assets/rating-1.png"),
        "2": require("../assets/rating-2.png"),
        "3": require("../assets/rating-3.png"),
        "4": require("../assets/rating-4.png"),
        "5": require("../assets/rating-5.png"),
    }
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee"

    }
})

export default ReviewDetails

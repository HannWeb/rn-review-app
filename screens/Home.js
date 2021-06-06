import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

//components

import Card from '../shared/Card'

//styles
import { globalStyles } from '../styles/global'


function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(true)
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen}
                animationType="slide"
            >
                <View style={styles.modalIcon}>
                    <AntDesign
                        name="closecircleo"
                        size={24} color="black"
                        onPress={toggleModal} />
                </View>
                <View style={styles.modalForm}>
                    <Text>Hello</Text>
                </View>
            </Modal>
            <Button
                title="open Modal"
                onPress={toggleModal}
            />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { navigation.navigate('Details', item) }}>
                        <Card>
                            <Text style={globalStyles.textTitle}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalIcon: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 15,
        marginRight: 15
    },
    modalForm: {
        flex: 1,
        padding: 10
    },

})

export default Home

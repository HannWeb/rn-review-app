import React from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import { Formik } from "formik"
import * as yup from "yup"

//styles
import { globalStyles } from '../styles/global'

//components
import FlatButton from '../shared/Button'

const reviweSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        }),

})

function ReviewForm({ onSubmit }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: "", body: "", rating: "" }}
                validationSchema={reviweSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm()
                    onSubmit(values)
                }}>
                {formikProps => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder={"Review Title"}
                            onChangeText={formikProps.handleChange("title")}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur("title")}
                        />
                        <Text style={styles.inputError}>{formikProps.touched.title && formikProps.errors.title}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={"Review Body"}
                            onChangeText={formikProps.handleChange("body")}
                            value={formikProps.values.body}
                            onBlur={formikProps.handleBlur("body")}
                        />
                        <Text style={styles.inputError}>{formikProps.touched.body && formikProps.errors.body}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={"Rating 1-5"}
                            onChangeText={formikProps.handleChange("rating")}
                            value={formikProps.values.rating}
                            onBlur={formikProps.handleBlur("body")}
                            keyboardType="number-pad"
                        />
                        <Text style={styles.inputError}>{formikProps.touched.rating && formikProps.errors.rating}</Text>
                        <FlatButton
                            title="Submit"
                            onPress={formikProps.handleSubmit}
                        />
                    </View>
                )}

            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: "#333",
        borderBottomWidth: 1,
        padding: 5,
        fontSize: 14
    },
    inputError: {
        fontSize: 10,
        fontWeight: "bold",
        color: "crimson",
        marginVertical: 5,

    }
})

export default ReviewForm

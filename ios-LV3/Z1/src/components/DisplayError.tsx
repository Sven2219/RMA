import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

interface Props {
    error: string;
    clearError: () => void;
}

const DisplayError = (props: Props) => {
    return (
        <Modal isVisible={true} style={styles.modalContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.informationContainer}>
                    <Text style={styles.titleText}>
                        Error
                    </Text>
                    <Text>
                        {props.error}
                    </Text>
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={props.clearError}>
                    <Text style={styles.submitText}>Ok</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    mainContainer: {
        height: 150,
        width: 250,
        justifyContent: 'space-between',

        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: "#fff"
    },
    informationContainer: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    submitButton: {
        borderTopWidth: 1,
        alignItems: 'center',
        width: "100%",
    },
    submitText: {
        fontSize: 16,
        margin: 10
    }
})

export default DisplayError;
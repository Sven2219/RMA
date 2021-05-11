import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../Constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    deleteAction: () => void;
}

const DeleteAction = (props: Props) => {
    return (<View style={styles.rightActionContainer}>
        <TouchableOpacity onPress={props.deleteAction}>
            <Text style={styles.deleteText}>
                Delete me
            </Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    rightActionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.fireBrick,
        width: 100,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.white
    },
    deleteText: {
        fontSize: 17,
        color: 'white'
    }
})

export default DeleteAction
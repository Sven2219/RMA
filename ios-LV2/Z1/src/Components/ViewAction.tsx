import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../Constants/colors';


interface Props {
    viewAction: () => void;
}

const ViewAction = (props: Props) => {
    return (<View style={styles.rightActionContainer}>
        <TouchableOpacity onPress={props.viewAction}>
            <Text style={styles.deleteText}>
                See details
            </Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    rightActionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.green,
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

export default ViewAction;
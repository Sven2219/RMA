import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Destination from '../types/Destination';

interface Props {
    item: Destination;
}

const OneDestination = (props: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.destinationContainer}>
                <Text style={styles.titleStyle}>
                    {props.item.name}
                </Text>
                <Text style={styles.descriptionStyle}>
                    {props.item.description}
                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10
    },
    destinationContainer: {
        borderBottomWidth: 1,
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    descriptionStyle: {
        fontSize: 16
    }
})

export default OneDestination;
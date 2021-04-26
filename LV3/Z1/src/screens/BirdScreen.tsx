import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Birds from '../components/Brids';
import { Bird } from '../containers/BirdContainer';

interface Props {
    birds: Bird;
    totalValue: number;
    currentColor: string;
    resetTotalValue: () => void;
    incrementTotalValue: (index: number) => void;
}

const BirdScreen = (props: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.textContainer, { backgroundColor: props.currentColor }]}>
                <Text style={styles.textStyle}>
                    Total value {props.totalValue}
                </Text>
            </View>
            <View style={styles.positionCenter}>
                <Birds birds={props.birds} incrementTotalValue={props.incrementTotalValue} />
            </View>
            <TouchableOpacity onPress={props.resetTotalValue} style={styles.textContainer}>
                <Text style={styles.textStyle}>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20
    },
    textStyle: {
        fontSize: 20,
    },
    mainContainer: {
        flex: 1,
    },
    positionCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export default BirdScreen;
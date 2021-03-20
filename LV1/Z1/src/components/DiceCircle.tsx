import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../consts/colors';

interface Props {
    item: number;
}


const DiceCircle = (props: Props) => {

    return (
        <View style={styles.circlePadding}>
            <View style={[styles.circle, { backgroundColor: props.item === 1 ? colors.dark :'transparent' }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    circlePadding: {
        paddingHorizontal: 6
    },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 12.5
    },
})


export default DiceCircle;
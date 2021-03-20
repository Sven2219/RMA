import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../consts/colors';
import { dimensions } from '../consts/dimensions';

interface Props {
    card: string;
}

const Card = (props: Props) => {
    return (
        <View style={[styles.cardContainer, styles.shadow]}>
            <Text style={styles.cardValue}>{props.card}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.white,
        height: dimensions.cardHeight,
        width: dimensions.cardWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:1,
        borderColor:colors.dimGray
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 14,
    },
    cardValue: {
        fontSize: 30,
    }
})

export default Card;
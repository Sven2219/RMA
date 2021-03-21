import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card as ICard } from '../consts/cards';
import { colors } from '../consts/colors';
import { dimensions } from '../consts/dimensions';
import { images } from '../consts/images';

interface Props {
    card: ICard;
}
const cardSymbol = [images.clubs, images.diamonds, images.hearts, images.spades]
const Card = (props: Props) => {
    return (
        <View style={[styles.cardContainer, styles.shadow]}>
            <View style={styles.imagePosition}>
                <Image source={cardSymbol[props.card.symbol]} style={styles.imageDimension} />
            </View>
            <Text style={styles.cardValue}>{props.card.card}</Text>
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
        borderWidth: 1,
        borderColor: colors.dimGray
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
    },
    imagePosition: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    imageDimension: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    }
})

export default Card;
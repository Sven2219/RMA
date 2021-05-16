import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../consts/colors';
import dimensions from '../consts/dimensions';
import I18n from '../consts/translation';
import Feather from 'react-native-vector-icons/Feather';

interface Props {
    item: string;
    index: number;
    deleteQuote:()=>void;
}

const Quote = (props: Props) => {
    return (
        <View style={[styles.quoteContainer, styles.shadow]}>
            <View style={styles.headerContainer}>
                <Text style={styles.quoteIndex}>{I18n.t("quote") + (props.index + 1)}</Text>
                <Feather name="x" size={20} onPress={props.deleteQuote}/>
            </View>
            <Text style={styles.quoteText}>{props.item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    quoteContainer: {
        borderRadius: 8,
        backgroundColor: colors.white,
        marginBottom: 10,
        minHeight: dimensions.quoteHeight,
        width: dimensions.quoteWidth,
        marginRight: 20,
        padding: 10
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    quoteIndex: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2
    },
    quoteText: {
        fontSize: 16,
        color: colors.dark,
    },
})

export default Quote;
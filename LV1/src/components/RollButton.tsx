import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../consts/colors';
import { fonts } from '../consts/fonts';

interface Props {
    handlePress: () => void;
}

const RollButton = (props: Props) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                style={styles.innerContainer}
                onPress={props.handlePress}
            >
                <Text style={styles.textStyle}>Roll</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        paddingTop: 48
    },
    innerContainer: {
        width: 100,
        alignItems: 'center',
        borderWidth: 0.8,
        borderRadius: 4,
        backgroundColor: colors.white
    },
    textStyle: {
        fontSize: 24,
        fontFamily: fonts.dxrigrafSemiBold
    }
})


export default RollButton;
import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../consts/colors';
import { fonts } from '../consts/fonts';
import { checkCombinationStatus } from '../consts/keys';
import I18n from '../consts/translation';

interface Props {
    nextPlayer: boolean;
    checkCombination: number;
    handlePress: () => void;
}

const RollButton = (props: Props) => {

    const getTitle = useMemo(() => {
        if (props.checkCombination === checkCombinationStatus.SHOW_TEXT) {
            return I18n.t("check");
        }
        else if (!props.nextPlayer && props.checkCombination !== checkCombinationStatus.CHECK_COMBINATION) {
            return I18n.t("roll")
        }
        return I18n.t("next");
    }, [props.nextPlayer, props.checkCombination])

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                style={styles.innerContainer}
                onPress={props.handlePress}
            >
                <Text style={styles.textStyle}>{getTitle}</Text>
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
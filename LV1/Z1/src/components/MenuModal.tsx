import React, { useCallback } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../consts/colors';
import { dimensions } from '../consts/dimensions';
import { fonts } from '../consts/fonts';
import { images } from '../consts/images';
import { numberOfPlayers } from '../consts/keys';
import I18n from '../consts/translation';

interface Props {
    numberOfPlayers: number;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setNumberOfPlayers: React.Dispatch<React.SetStateAction<number>>;
}

const MenuModal = (props: Props) => {

    const getBackgroundColor = useCallback((value: number) => {
        return value === props.numberOfPlayers ? colors.cadetBlue : colors.white;
    }, [props.numberOfPlayers])

    const getTextColor = useCallback((value: number) => {
        return value === props.numberOfPlayers ? colors.white : colors.dark;
    }, [props.numberOfPlayers])

    return (
        <Modal visible={props.isModalOpen} transparent>
            <View style={styles.modalContainer}>
                <View style={[styles.innerContainer, styles.shadow]}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.modalTitle}>{I18n.t("chooseNumberOfPlayers")}</Text>
                        <Image source={images.diceLogo} style={styles.imageContainer} />
                    </View>

                    <View style={styles.playerContainer}>
                        <TouchableOpacity
                            style={[styles.buttonContainer, { backgroundColor: getBackgroundColor(numberOfPlayers.TWO_PLAYERS) }]}
                            activeOpacity={0.4}
                            onPress={() => props.setNumberOfPlayers(numberOfPlayers.TWO_PLAYERS)}
                        >
                            <Text style={[styles.numberText, { color: getTextColor(numberOfPlayers.TWO_PLAYERS) }]}>{numberOfPlayers.TWO_PLAYERS}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttonContainer, { backgroundColor: getBackgroundColor(numberOfPlayers.FOUR_PLAYERS) }]}
                            activeOpacity={0.4}
                            onPress={() => props.setNumberOfPlayers(numberOfPlayers.FOUR_PLAYERS)}
                        >
                            <Text style={[styles.numberText, { color: getTextColor(numberOfPlayers.FOUR_PLAYERS) }]}>{numberOfPlayers.FOUR_PLAYERS}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => props.setIsModalOpen(false)} >
                        <Text style={styles.modalTitle}>{I18n.t("start")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: dimensions.width,
        height: dimensions.height,
        position: 'absolute',
        top: 0,
        backgroundColor: colors.modalBackground
    },
    innerContainer: {
        width: dimensions.modalWidth,
        height: dimensions.modalHeight,
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 8,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    modalTitle: {
        fontSize: 19,
        fontFamily: fonts.metroSansSemiBold
    },
    playerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
    },
    numberText: {
        fontSize: 19,
        fontFamily: fonts.dxrigrafSemiBoldExpanded
    },
    buttonContainer: {
        borderWidth: 1,
        width: 100,
        alignItems: 'center',
        borderRadius: 4,
        height: 40,
        justifyContent: 'center'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        width: 75,
        height: 50,
        resizeMode: 'stretch'
    }
})

export default MenuModal;
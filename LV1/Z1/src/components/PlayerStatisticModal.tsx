import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import ExitIcon from '../../assets/images/ExitIcon';
import { colors } from '../consts/colors';
import { dimensions } from '../consts/dimensions';
import { fonts } from '../consts/fonts';
import { Player } from '../consts/interfaces';
import I18n from '../consts/translation';

interface Props {
    isPlayerStatisticOpen: boolean;
    playerInfo: Player;
    setIsPlayerStatisticOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const PlayerStatisticModal = (props: Props) => {
    if (props.playerInfo) {
        return (
            <Modal isVisible={props.isPlayerStatisticOpen} animationIn={"flipInY"} animationOut={"flipOutY"}>
                <View style={styles.mainContainer}>
                    <View style={styles.innerContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>
                                {I18n.t("statistic")}
                            </Text>
                            <TouchableOpacity onPress={() => props.setIsPlayerStatisticOpen(false)}>
                                <ExitIcon />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.statusContainer}>
                            <Text style={styles.name}>
                                Player {`${props.playerInfo.id}`}
                            </Text>
                            <Text style={styles.combinationText}>
                                Big scale: {props.playerInfo.bigScaleStatus}
                            </Text>
                            <Text style={styles.combinationText}>
                                Min scale: {props.playerInfo.minScaleStatus}
                            </Text>
                            <Text style={styles.combinationText}>
                                Poker: {props.playerInfo.pokerStatus}
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
    return null;
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        backgroundColor: colors.white,
        width: dimensions.statisticModalWidth,
        height: dimensions.statisticModalHeight,
        paddingVertical: 20,
        borderRadius: 8,
        paddingHorizontal: 20
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    headerText: {
        fontSize: 30,
        fontFamily: fonts.dxrigrafSemiBold,
        textDecorationLine: 'underline',
    },
    name: {
        fontSize: 26,
        fontFamily: fonts.mertoSansBook,
        paddingVertical: 20,

    },
    statusContainer: {
        alignItems:'center',
        paddingVertical: 30,
    },
    combinationText: {
        fontSize: 24,
        fontFamily: fonts.mertoSansBook,
        paddingBottom:10,
    }
})

export default PlayerStatisticModal;
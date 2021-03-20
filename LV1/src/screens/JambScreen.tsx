import React, { useCallback, useMemo } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Dice from '../components/Dice';
import MenuModal from '../components/MenuModal';
import PlayerStatisticModal from '../components/PlayerStatisticModal';
import RollButton from '../components/RollButton';
import { dices, PlayerDices } from '../consts/diceData';
import { fonts } from '../consts/fonts';
import { Player } from '../consts/interfaces';
import { checkCombinationStatus } from '../consts/keys';
import I18n from '../consts/translation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    numberOfPlayers: number;
    isModalOpen: boolean;
    throwNumber: number;
    allPlayers: Player[];
    currentPlayer: number;
    isPlayerStatisticOpen: boolean;
    currentDices: PlayerDices;
    nextPlayer: boolean;
    checkCombination: number;
    setCheckCombination: React.Dispatch<React.SetStateAction<number>>;
    setNextPlayer: React.Dispatch<React.SetStateAction<boolean>>;
    generateDices: () => void;
    setCurrentDices: React.Dispatch<React.SetStateAction<PlayerDices>>;
    setIsPlayerStatisticOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setThrowNumber: React.Dispatch<React.SetStateAction<number>>;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setNumberOfPlayers: React.Dispatch<React.SetStateAction<number>>;
}

const JambScreen = (props: Props) => {

    const firstRow = useMemo(() => {
        const currentDicesFirst = Object.values(props.currentDices).slice(0, 3);
        return currentDicesFirst.map((el) => {
            return {
                value: dices[el.value],
                disabled: el.disabled
            }
        });
    }, [props.currentDices]);

    const secondRow = useMemo(() => {
        const currentDicesSecond = Object.values(props.currentDices).slice(3, 6);
        return currentDicesSecond.map((el) => {
            return {
                value: dices[el.value],
                disabled: el.disabled
            }
        });
    }, [props.currentDices]);

    const handlePress = useCallback(() => {
        if (props.checkCombination === checkCombinationStatus.SHOW_TEXT) {
            return props.setCheckCombination(checkCombinationStatus.CHECK_COMBINATION);
        }
        return !props.nextPlayer ? props.generateDices() : props.setNextPlayer(false)
    }, [props.nextPlayer, props.generateDices, props.setNextPlayer, props.checkCombination, props.setCheckCombination])


    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{I18n.t("jamb")}</Text>
            </View>
            <TouchableOpacity style={styles.playerStatusContainer} onPress={() => props.setIsPlayerStatisticOpen(true)}>
                <MaterialCommunityIcons name="table-of-contents" size={40} />
            </TouchableOpacity>
            <View style={styles.dicePosition}>
                <View style={styles.rollContainer}>
                    <Text style={styles.playerText}>{`Player ${props.currentPlayer}`}</Text>
                    <Text style={[styles.playerText,styles.throwNumberPosition]}>{`Roll ${props.throwNumber}`}</Text>
                </View>

                <View style={styles.row}>
                    {firstRow.map((el, index) => {
                        return <View style={styles.diceContainer} key={`${index}--first`}>
                            <Dice
                                diceData={el}
                                index={index}
                                key={`${index}-first`}
                                throwNumber={props.throwNumber}
                                setCurrentDices={props.setCurrentDices}
                            />
                        </View>
                    })}
                </View>
                <View style={styles.row}>
                    {secondRow.map((el, index) => {
                        return <View style={styles.diceContainer} key={`${index}--second`}>
                            <Dice
                                diceData={el}
                                index={index + 3}
                                key={`${index}-second`}
                                throwNumber={props.throwNumber}
                                setCurrentDices={props.setCurrentDices}
                            />
                        </View>
                    })}
                </View>
                <RollButton
                    nextPlayer={props.nextPlayer}
                    checkCombination={props.checkCombination}
                    handlePress={handlePress}
                />
            </View>
            <MenuModal
                isModalOpen={props.isModalOpen}
                numberOfPlayers={props.numberOfPlayers}
                setIsModalOpen={props.setIsModalOpen}
                setNumberOfPlayers={props.setNumberOfPlayers}
            />
            <PlayerStatisticModal
                playerInfo={props.allPlayers[props.currentPlayer - 1]}
                isPlayerStatisticOpen={props.isPlayerStatisticOpen}
                setIsPlayerStatisticOpen={props.setIsPlayerStatisticOpen}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 6
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12
    },
    headerText: {
        fontSize: 30,
        fontFamily: fonts.dxrigrafSemiBold
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 6,
    },
    diceContainer: {
        paddingVertical: 6,

    },
    dicePosition: {
        paddingTop: 100
    },
    playerText: {
        fontSize: 20,
        paddingLeft: 6,
        paddingBottom: 14,
        fontFamily: fonts.dxrigrafSemiBold
    },
    playerStatusContainer: {
        position: 'absolute',
        top: 14,
        right: 24
    },
    rollContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    throwNumberPosition:{
        right:10
    }
})

export default JambScreen;
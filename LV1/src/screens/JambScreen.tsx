import React, { useMemo } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Dice from '../components/Dice';
import MenuModal from '../components/MenuModal';
import PlayerStatisticModal from '../components/PlayerStatisticModal';
import RollButton from '../components/RollButton';
import { dices, PlayerDices } from '../consts/diceData';
import { fonts } from '../consts/fonts';
import { Player } from '../consts/interfaces';
import I18n from '../consts/translation';

interface Props {
    numberOfPlayers: number;
    isModalOpen: boolean;
    throwNumber: number;
    allPlayers: Player[];
    currentPlayer: number;
    isPlayerStatisticOpen: boolean;
    currentDices: PlayerDices;
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



    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{I18n.t("jamb")}</Text>
            </View>
            <TouchableOpacity style={styles.playerStatusContainer} onPress={() => props.setIsPlayerStatisticOpen(true)}>
                <Text>Status</Text>
            </TouchableOpacity>
            <View style={styles.dicePosition}>
                <View>
                    <Text style={styles.playerText}>{`Player ${props.currentPlayer}`}</Text>
                </View>

                <View style={styles.row}>
                    {firstRow.map((el, index) => {
                        return <View style={styles.diceContainer} key={index + 'first'}>
                            <Dice
                                diceData={el}
                                index={index}
                                key={index + 'first'}
                                setCurrentDices={props.setCurrentDices}
                            />
                        </View>
                    })}
                </View>
                <View style={styles.row}>
                    {secondRow.map((el, index) => {
                        return <View style={styles.diceContainer} key={index + 'second'}>
                            <Dice
                                diceData={el}
                                index={index + 3}
                                key={index + 'second'}
                                setCurrentDices={props.setCurrentDices}
                            />
                        </View>
                    })}
                </View>
                <RollButton handlePress={props.generateDices} />
            </View>
            <MenuModal
                isModalOpen={props.isModalOpen}
                numberOfPlayers={props.numberOfPlayers}
                setIsModalOpen={props.setIsModalOpen}
                setNumberOfPlayers={props.setNumberOfPlayers}
            />
            <PlayerStatisticModal
                playerInfo={props.allPlayers[props.currentPlayer]}
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
        top: 24,
        right: 24
    }
})

export default JambScreen;
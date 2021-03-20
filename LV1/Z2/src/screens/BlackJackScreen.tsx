import React, { useCallback, useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { colors } from '../consts/colors';
import I18n from '../consts/translation';
import { BlackJack } from '../containers/BlackJackContainer';


interface Props {
    userCards: BlackJack
    computerCards: BlackJack
    isEnough: boolean;
    isHuman: boolean;
    isGameOver: boolean;
    incrementDeal: React.Dispatch<React.SetStateAction<number>>;
    setIsEnough: React.Dispatch<React.SetStateAction<boolean>>;
}

const fields = {
    TEXT: "text",
    COLOR: "color",
}

const BlackJackScreen = (props: Props) => {

    const getResult = useCallback((field: string) => {
        if (props.isGameOver) {
            return field === fields.TEXT ? I18n.t("youLost") : colors.fireBrick;
        } else if (props.computerCards.totalValue < 22) {
            if (props.computerCards.totalValue < props.userCards.totalValue) {
                return field === fields.TEXT ? I18n.t("youWin") : colors.green;
            }
            return field === fields.TEXT ? I18n.t("youLost") : colors.fireBrick;
        }
        return field === fields.TEXT ? I18n.t("youWin") : colors.green;
    }, [props.isGameOver, props.computerCards, props.userCards])



    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{I18n.t("blackJack")}</Text>
            </View>
            <View style={styles.playerContainer}>
                <Text style={styles.player}>{props.isHuman ? I18n.t("player") : I18n.t("computer")}</Text>
                <Text style={styles.player}>Score: {props.isHuman ? props.userCards.totalValue : props.computerCards.totalValue}</Text>
            </View>
            <FlatList
                data={props.isHuman ? props.userCards.cards : props.computerCards.cards}
                numColumns={3}
                keyExtractor={(item, index) => `${index.toString()} --`}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.cardContainer}>
                            <Card card={item} />
                        </View>
                    )
                }}
            />
            { props.computerCards.totalValue!==0 || props.isGameOver?
                <View style={styles.resultContainer}>
                    <Text style={[styles.resultText, { color: getResult(fields.COLOR) }]}>
                        {getResult(fields.TEXT)}
                    </Text>
                </View> : null
            }

            {
                props.isHuman ? <View style={styles.buttonContainer}>
                    <CustomButton title={I18n.t("deal")} handleClick={() => props.incrementDeal((state) => state + 1)} />
                    <CustomButton title={I18n.t("stand")} handleClick={() => props.setIsEnough(true)} />
                </View> : null
            }

        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    playerContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 30
    },
    player: {
        fontSize: 20,
    },
    mainContainer: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 40
    },
    resultContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    resultText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    cardContainer: {
        padding: 25
    }
})

export default BlackJackScreen;
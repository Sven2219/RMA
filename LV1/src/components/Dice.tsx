import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../consts/colors';
import { DiceValues, PlayerDices } from '../consts/diceData';
import { dimensions } from '../consts/dimensions';
import DiceCircle from './DiceCircle';

interface Props {
    diceData: any;
    index: number;
    throwNumber: number;
    setCurrentDices: React.Dispatch<React.SetStateAction<PlayerDices>>;
}

const Dice = (props: Props) => {

    return (
        <TouchableOpacity style={[styles.diceContainer, styles.shadow, { backgroundColor: props.diceData.disabled ? colors.darkGray : colors.white }]}
            onPress={() => props.throwNumber !== 0 ? props.setCurrentDices((state) => {
                const dice: DiceValues = Object.values(state)[props.index];
                return { ...state, [props.index]: { value: dice.value, disabled: !dice.disabled } }
            }) : null} >
            <FlatList
                data={props.diceData.value}
                numColumns={3}
                contentContainerStyle={styles.flatListContainer}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return <DiceCircle item={item} />
                }}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    diceContainer: {
        paddingVertical: 6,
        width: dimensions.diceWidth,
        height: dimensions.diceHeight,
        borderRadius: 10,
        borderWidth: 0.3,
        backgroundColor: colors.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 24,
    },

    flatListContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },

})

export default Dice;
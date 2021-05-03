import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BirdsColors } from '../container/BirdContainer';
import OneBird from './Bird';

interface Props {
    birds: BirdsColors;
    incrementTotalValue: (el: BirdsColors) => void;
}

const Birds = (props: Props) => {
    const keys = React.useMemo(() => Object.keys(props.birds), [props.birds]);
    const birds = React.useMemo(() => {
        return Object.values(props.birds).map((el, index) => {
            //@ts-ignore
            return <OneBird bird={el} key={`Bird${index}`} title={keys[index]} onPress={() => props.incrementTotalValue(el)} />
        })
    }, [props.birds, props.incrementTotalValue])

    return (
        <View style={styles.rowPosition}>
            {birds}
        </View>
    )
}

const styles = StyleSheet.create({
    rowPosition: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "100%",
        alignItems: 'center'
    }
})

export default Birds;
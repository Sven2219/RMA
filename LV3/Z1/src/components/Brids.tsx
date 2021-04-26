import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Bird } from '../containers/BirdContainer';
import OneBird from './Bird';

interface Props {
    birds: Bird;
    incrementTotalValue: (index: number) => void;
}

const Birds = (props: Props) => {
    const keys = React.useMemo(() => Object.keys(props.birds), [props.birds]);
    const birds = React.useMemo(() => {
        return Object.values(props.birds).map((el, index) => {
            //@ts-ignore
            return <OneBird bird={el} key={`Bird${index}`} title={keys[index]} onPress={() => props.incrementTotalValue(index)} />
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
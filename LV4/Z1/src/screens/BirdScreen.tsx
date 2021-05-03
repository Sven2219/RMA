
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useObservable } from '../customHooks/useObservable';
import Rx from 'rxjs';
import { Bird, BirdsColors } from '../container/BirdContainer';
import Birds from '../components/Brids';

interface Props {
    count$: Rx.Observable<Bird>;
    action$: Rx.Subject<unknown>;
    birds: BirdsColors
}

const BirdScreen = (props: Props) => {
    const birdObserver: Bird | undefined = useObservable(props.count$);

    const currentBird = React.useMemo(() => {
        return birdObserver ? birdObserver : { color: 'transparent', increment: 0 };
    }, [birdObserver])

    return (
        <View style={styles.mainContainer}>
            <View style={[styles.textContainer, { backgroundColor: currentBird.color }]}>
                <Text style={styles.textStyle}>
                    Total value {currentBird.increment}
                </Text>
            </View>
            <View style={styles.positionCenter}>
                <Birds birds={props.birds} incrementTotalValue={(el: BirdsColors) => props.action$.next({ increment: 1, color: el.color })} />
            </View>
            <TouchableOpacity onPress={() => props.action$.next({ increment: 0, color: 'transparent' })} style={styles.textContainer}>
                <Text style={styles.textStyle}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20
    },
    textStyle: {
        fontSize: 20,
    },
    mainContainer: {
        flex: 1,
    },
    positionCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
})

export default BirdScreen;
import React from 'react';
import { AppState } from 'react-native';
import { getFromAsyncStorage, saveToAsyncStorage } from '../helpers/asyncStorage';
import BirdScreen from '../screens/BirdScreen';

export interface Bird {
    [key: string]: {
        color: string;
    }
}

export const birds = {
    red: {
        color: '#b22222',
    },
    green: {
        color: '#006400',
    },
    gray: {
        color: '#696969',
    },
    gold: {
        color: '#daa520',
    }
}

export const BIRD_KEY = 'BIRD_KEY';

export interface Current {
    color: string;
    totalValue: number;
}

const BirdContainer = () => {
    const [current, setCurrent] = React.useState<Current>({ color: 'transparent', totalValue: 0 });
    const appState = React.useRef(AppState.currentState);
    const value = React.useRef<number>(0);

    React.useEffect(() => {
        getFromAsyncStorage(BIRD_KEY).then((response) => {
            if (response && response > 0) {
                value.current = response;
                setCurrent({ color: 'transparent', totalValue: response });
            }
        })
        AppState.addEventListener("change", handleAppStateChange);

        return () => {
            AppState.removeEventListener("change", handleAppStateChange);
        };
    }, [])

    const handleAppStateChange = (nextAppState: any) => {
        appState.current = nextAppState;
        if (appState.current === 'background') {
            saveToAsyncStorage(BIRD_KEY, value.current);
        }
    };

    const incrementTotalValue = React.useCallback((index: number) => {
        setCurrent((prev: Current) => {
            value.current = prev.totalValue + 1;
            const colors = Object.values(birds);
            return { totalValue: prev.totalValue + 1, color: colors[index].color };
        });
    }, [])

    const resetTotalValue = React.useCallback(() => {
        setCurrent({ totalValue: 0, color: 'transparent' })
    }, [])

    return (<BirdScreen
        birds={birds}
        currentColor={current.color}
        totalValue={current.totalValue}
        resetTotalValue={resetTotalValue}
        incrementTotalValue={incrementTotalValue}
    />)
}


export default BirdContainer;
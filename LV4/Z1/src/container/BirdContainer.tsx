import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { AppState } from 'react-native';
import { of, Subject } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';
import { saveToAsyncStorage } from '../helpers/asyncStorage';
import BirdView from '../screens/BirdScreen';

export interface BirdsColors {
    [key: string]: {
        color: string;
    }
}

export const birds: BirdsColors = {
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

export interface Bird {
    increment: number;
    color: string;
}

export const BIRD_KEY = 'BIRD_KEY';

const BirdContainer = () => {
    const [bird, setBird] = React.useState<Bird>({ increment: 0, color: 'transparent' });
    const appState = React.useRef(AppState.currentState);
    const value = React.useRef<number>(0);
    const action$ = new Subject();

    React.useEffect(() => {
        AppState.addEventListener("change", handleAppStateChange);
        return () => {
            AppState.removeEventListener("change", handleAppStateChange);
        };
    }, [])

    React.useEffect(() => {
        const sub = of(Promise.resolve(AsyncStorage.getItem(BIRD_KEY))).subscribe({
            next: v => v.then((val) => {
                if (val)
                    setBird({ color: 'transparent', increment: parseInt(val) })
            })
        })
        return () => sub.unsubscribe();
    }, [])

    const update$ = action$.pipe(
        map((action: Bird) => action)
    );

    const count$ = update$.pipe(
        startWith(bird),
        scan((count: Bird, update: Bird) => {
            if (update.increment === 0) {
                //reset value
                value.current = 0;
                return { color: update.color, increment: 0 }
            }
            value.current = count.increment + update.increment;
            return { color: update.color, increment: count.increment + update.increment };
        })
    );

    const handleAppStateChange = (nextAppState: any) => {
        appState.current = nextAppState;
        if (appState.current === 'background') {
            saveToAsyncStorage(BIRD_KEY, value.current);
        }
    };

    return <BirdView count$={count$} action$={action$} birds={birds} />
}


export default BirdContainer;
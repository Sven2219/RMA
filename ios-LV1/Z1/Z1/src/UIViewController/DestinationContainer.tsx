import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useContext } from 'react';
import { AppState } from 'react-native';
import { MainDispatch } from '../Context/MainDispatch';
import { MainState } from '../Context/MainState';
import { getFromAsyncStorage, saveToAsyncStorage } from '../Helpers/storageHelper';

import { ActionTypes } from '../Store/MainReducer';
import DestinationsScreen from '../UIScreens/DestinationsScreen';
import Destination from '../types/Destination';
import { Routes } from '../UINavigationController/Routes';

const DESTINATION_KEY = "DESTINATION_KEY";

const DestinationContainer = () => {
    const { state } = useContext(MainState);
    const { dispatch } = useContext(MainDispatch);
    const navigation = useNavigation();

    const appState = React.useRef(AppState.currentState);
    const value = React.useRef<Destination[]>([]);

    React.useEffect(() => {
        value.current = state.destinations;
    }, [state.destinations])

    React.useEffect(() => {
        getFromAsyncStorage(DESTINATION_KEY).then((response) => {
            if (response) {
                value.current = response;
                dispatch({ type: ActionTypes.SET_DESTINATION, payload: response });
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
            saveToAsyncStorage(DESTINATION_KEY, value.current);
        }
    };

    const goToAddNewDestination = useCallback(() => {
        navigation.navigate(Routes.ADD_DESTINATION);
    }, [])

    return (
        <DestinationsScreen
            destinations={state.destinations}
            goToAddNewDestination={goToAddNewDestination}
        />
    )
}


export default DestinationContainer;
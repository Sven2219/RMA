import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useContext } from 'react';
import { AppState } from 'react-native';
import { MainDispatch } from '../Context/MainDispatch';
import { MainState } from '../Context/MainState';
import { getFromAsyncStorage, saveToAsyncStorage } from '../Helpers/storageHelper';
import { Routes } from '../UINavigationController/Routes';
import { ActionTypes } from '../Store/MainReducer';
import DestinationsScreen from '../UIScreens/DestinationsScreen';
import Destination from '../Types/Destination';

const DESTINATION_KEY = "DESTINATION_KEY";

const DestinationContainer = () => {
    const { state } = useContext(MainState);
    const { dispatch } = useContext(MainDispatch);
    const navigation = useNavigation();
    const [activeItem, setActiveItem] = React.useState<number>(-1);
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


    const openDeleteModal = React.useCallback((id: number) => {
        setActiveItem(id);
    }, [])

    const closeDeleteModal = React.useCallback(() => {
        setActiveItem(-1);
    }, [])

    const deleteDestination = React.useCallback(() => {
        const filtered = [...state.destinations].filter((el) => el.id !== activeItem);
        dispatch({ type: ActionTypes.SET_DESTINATION, payload: filtered });
        setActiveItem(-1);
    }, [activeItem])

    const navigateToDetails = React.useCallback((id: number) => {
        navigation.navigate(Routes.DESTINATION_VIEW, { id: id })
    }, [navigation])

    return (
        <DestinationsScreen
            destinations={state.destinations}
            activeItem={activeItem}
            navigateToDetails={navigateToDetails}
            deleteDestination={deleteDestination}
            openDeleteModal={openDeleteModal}
            closeDeleteModal={closeDeleteModal}
            goToAddNewDestination={goToAddNewDestination}
        />
    )
}


export default DestinationContainer;
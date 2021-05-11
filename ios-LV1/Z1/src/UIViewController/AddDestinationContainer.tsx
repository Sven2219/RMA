import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { MainDispatch } from '../context/MainDispatch';
import { MainState } from '../context/MainState';
import { ActionTypes } from '../reducers/MainReducer';

import AddDestinationScreen from '../screens/AddDestinationScreen';
import Destination from '../types/Destination';

export const destinationFields = {
    name: "name",
    description: "description"
}


const AddDestinationContainer = () => {
    const { control, handleSubmit } = useForm();
    const { dispatch } = useContext(MainDispatch);
    const { state } = useContext(MainState);
    const navigation = useNavigation();

    const addDestination = React.useCallback((data: Destination) => {
        const destination: Destination = {
            id: state.destinations.length,
            name: data.name,
            description: data.description
        }
        dispatch({ type: ActionTypes.ADD_DESTINATION, payload: destination });
        navigation.goBack();
    }, [state])

    const navigateBack = React.useCallback(() => {
        navigation.goBack();
    }, [])

    return (
        <AddDestinationScreen
            control={control}
            navigateBack={navigateBack}
            addDestination={handleSubmit(addDestination)}
        />
    )
}


export default AddDestinationContainer;
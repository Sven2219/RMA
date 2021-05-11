import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { MainDispatch } from '../Context/MainDispatch';
import { MainState } from '../Context/MainState';
import { ActionTypes } from '../Store/MainReducer';

import AddDestinationScreen from '../UIScreens/AddDestinationScreen';
import Destination from '../Types/Destination';

export const destinationFields = {
    name: "name",
    description: "description",
    uri: "uri",
    lat: "latitude",
    long: "longitude"
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
            description: data.description,
            uri: data.uri,
            latitude: data.latitude,
            longitude: data.longitude
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
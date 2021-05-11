import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { MainState } from '../Context/MainState';
import ViewDestinationScreen from '../UIScreens/ViewDestinationScreen';


const ViewDestinationContainer = (props: any) => {
    const { state } = useContext(MainState);
    const navigation = useNavigation();
    const destination = React.useMemo(() => {
        return state.destinations.filter((el) => el.id === props.route.params.id)[0];
    }, [props]);

    const navigateBack = React.useCallback(() => {
        navigation.goBack();
    }, [])

    return (
        <ViewDestinationScreen
            details={destination}
            navigateBack={navigateBack}
        />
    )
}


export default ViewDestinationContainer;
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import DestinationContainer from '../UIViewController/DestinationContainer';
import AddDestinationContainer from '../UIViewController/AddDestinationContainer';
import ViewDestinationContainer from '../UIViewController/ViewDestinationContainer';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName={Routes.DESTINATIONS}>
                <Stack.Screen name={Routes.DESTINATIONS} component={DestinationContainer} />
                <Stack.Screen name={Routes.ADD_DESTINATION} component={AddDestinationContainer} />
                <Stack.Screen name={Routes.DESTINATION_VIEW} component={ViewDestinationContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default StackNavigation;
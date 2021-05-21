import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import DestinationContainer from '../UIViewController/DestinationContainer';
import AddDestinationContainer from '../UIViewController/AddDestinationContainer';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName={Routes.DESTINATIONS}>
                <Stack.Screen name={Routes.DESTINATIONS} component={DestinationContainer} />
                <Stack.Screen name={Routes.ADD_DESTINATION} component={AddDestinationContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default StackNavigation;
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import InspiringPersonsContainer from '../containers/InspiringPersonsContainer';
import AddInspiringPersonContainer from '../containers/AddInspiringPersonContainer';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName={Routes.INSPIRING_PERSONS}>
                <Stack.Screen name={Routes.INSPIRING_PERSONS} component={InspiringPersonsContainer} />
                <Stack.Screen name={Routes.ADD_INSPIRING_PERSON} component={AddInspiringPersonContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default StackNavigation;
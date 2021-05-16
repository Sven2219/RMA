import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InspiringPersonsContainer from '../containers/InspiringPersonsContainer';
import AddInspiringPersonContainer from '../containers/AddInspiringPersonContainer';
import { Routes } from './Routes';
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';
import { colors } from '../consts/colors';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                pager={props => <ViewPagerAdapter {...props} />}
                tabBarOptions={{
                    labelStyle: { fontSize: 15 },
                    inactiveTintColor:colors.inactiveColor,
                    activeTintColor:colors.white,
                    style: { backgroundColor: colors.darkCyan },
                    indicatorStyle:{backgroundColor:colors.dark,height:3}
                    
                }}
            >
                <Tab.Screen name={Routes.INSPIRING_PERSONS} component={InspiringPersonsContainer} />
                <Tab.Screen name={Routes.ADD_INSPIRING_PERSON} component={AddInspiringPersonContainer} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default TabNavigation;
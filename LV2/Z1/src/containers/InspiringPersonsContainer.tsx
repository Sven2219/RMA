import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useContext } from 'react';
import { ToastAndroid } from 'react-native';
import { MainState } from '../context/MainState';
import { Routes } from '../navigation/Routes';
import InspiringPersonsScreen from '../screens/InspiringPersonsScreen';

const InspiringPersonsContainer = () => {
    const { state } = useContext(MainState);
    const navigation = useNavigation();

    const goToAddNewPerson = useCallback(() => {
        navigation.navigate(Routes.ADD_INSPIRING_PERSON);
    }, [])

    const randomQuote = useCallback((index: number) => {
        const currentPerson = state.inspiringPersons[index];
        const randomNumber = Math.floor(Math.random() * currentPerson.quote.length);
        ToastAndroid.show(`${currentPerson.firstName} ${currentPerson.lastName}: ${currentPerson.quote[randomNumber]}`, ToastAndroid.LONG);
    }, [state.inspiringPersons])

    return (
        <InspiringPersonsScreen
            inspiringPersons={state.inspiringPersons}
            randomQuote={randomQuote}
            goToAddNewPerson={goToAddNewPerson}
        />
    )
}


export default InspiringPersonsContainer;
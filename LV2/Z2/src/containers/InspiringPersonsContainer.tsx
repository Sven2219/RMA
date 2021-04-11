import React from 'react';
import { ToastAndroid } from 'react-native';
import { MainDispatch } from '../context/MainDispatch';
import { MainState } from '../context/MainState';
import { ActionTypes } from '../reducers/MainReducer';
import InspiringPersonsScreen from '../screens/InspiringPersonsScreen';

export const CLOSED_MODAL = -1;

const InspiringPersonsContainer = () => {
    const { state } = React.useContext(MainState);
    const { dispatch } = React.useContext(MainDispatch);

    const [activeIndex, setActiveIndex] = React.useState<number>(CLOSED_MODAL);


    const randomQuote = React.useCallback((index: number) => {
        const currentPerson = state.inspiringPersons[index];
        const randomNumber = Math.floor(Math.random() * currentPerson.quote.length);
        ToastAndroid.show(`${currentPerson.firstName} ${currentPerson.lastName}: ${currentPerson.quote[randomNumber]}`, ToastAndroid.LONG);
    }, [state.inspiringPersons])

    const deletePerson = React.useCallback((index: number) => {
        const personsCopy = [...state.inspiringPersons];
        personsCopy.splice(index, 1);
        dispatch({ type: ActionTypes.SET_INSPIRING_PERSONS, payload: personsCopy });
    }, [state.inspiringPersons])
    return (
        <InspiringPersonsScreen
            inspiringPersons={state.inspiringPersons}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            randomQuote={randomQuote}
            deletePerson={deletePerson}
        />
    )
}


export default InspiringPersonsContainer;
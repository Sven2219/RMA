import React, { useReducer } from 'react';
import { MainDispatch } from '../context/MainDispatch';
import { MainState } from '../context/MainState';
import { State, Actions, reducer } from '../reducers/MainReducer';
import TabNavigation from './TabNavigation';




const App = () => {
    const [state, dispatch] = useReducer<React.Reducer<State, Actions>>(reducer, { inspiringPersons: [] });

    return (
        <MainDispatch.Provider value={{ dispatch }}>
            <MainState.Provider value={{ state }}>
                <TabNavigation />
            </MainState.Provider>
        </MainDispatch.Provider>
    )
}
export default App;
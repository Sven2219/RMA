import React,{ useReducer } from "react";
import { MainDispatch } from "../context/MainDispatch";
import { MainState } from "../context/MainState";
import { Actions, reducer, State } from "../reducers/MainReducer";
import StackNavigation from "./StackNavigation";

const App = () => {
    const [state, dispatch] = useReducer<React.Reducer<State, Actions>>(reducer, { inspiringPersons: [] });
    return (
        <MainDispatch.Provider value={{ dispatch }}>
            <MainState.Provider value={{ state }}>
                <StackNavigation />
            </MainState.Provider>
        </MainDispatch.Provider>
    )
}

export default App;
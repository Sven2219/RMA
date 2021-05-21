import React, { useReducer } from "react";
import { MainDispatch } from "../Context/MainDispatch";
import { MainState } from "../Context/MainState";

import { Actions, reducer, State } from "../Store/MainReducer";
import StackNavigation from "./StackNavigation";

const App = () => {
    const [state, dispatch] = useReducer<React.Reducer<State, Actions>>(reducer, { destinations: [] });
    return (
        <MainDispatch.Provider value={{ dispatch }}>
            <MainState.Provider value={{ state }}>
                <StackNavigation />
            </MainState.Provider>
        </MainDispatch.Provider>
    )
}

export default App;
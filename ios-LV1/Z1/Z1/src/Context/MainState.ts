import { createContext } from 'react';
import { State } from '../reducers/MainReducer';

interface IContextProps {
    state: State;
}
export const MainState = createContext({} as IContextProps);
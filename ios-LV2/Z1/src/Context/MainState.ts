import { createContext } from 'react';
import { State } from '../Store/MainReducer';

interface IContextProps {
    state: State;
}
export const MainState = createContext({} as IContextProps);
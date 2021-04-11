import { createContext } from 'react';
import { Actions } from '../reducers/MainReducer';

interface ContextProps {
    dispatch: React.Dispatch<Actions>;
}
export const MainDispatch = createContext({} as ContextProps);
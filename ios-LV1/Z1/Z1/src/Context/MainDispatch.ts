import { createContext } from 'react';
import { Actions } from '../Store/MainReducer';

interface ContextProps {
    dispatch: React.Dispatch<Actions>;
}
export const MainDispatch = createContext({} as ContextProps);
import React from 'react';
import ApiServiceImpl from '../../data/api/ApiServiceImpl';
import { setUsers, UserActions } from '../store/action';
import { State, userInitialState, userReducer } from '../store/user';
import Spinner from '../view/Spinner';
import UserView from '../view/UserView';

const MainViewModel = () => {
    const [state, dispatch] = React.useReducer<React.Reducer<State, UserActions>>(userReducer, userInitialState);

    React.useEffect(() => {
        ApiServiceImpl.getUsers().then((response) => {
            dispatch(setUsers(response));
        })
    }, [])

    if (!state.users.length) {
        return (
            <Spinner />
        )
    }
    return <UserView users={state.users} />;
}

export default MainViewModel;
import User from "../../data/model/User";

export const SET_USERS = 'SET_USERS';

type SetUsers = {
    readonly type: typeof SET_USERS;
    readonly users: User[];
};

export const setUsers = (users: User[]): SetUsers => ({
    type: SET_USERS,
    users,
});



export type UserActions = SetUsers;



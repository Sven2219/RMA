import User from "../../data/model/User";
import { SET_USERS, UserActions } from "./action";

export interface State {
    users: User[];
}

export const userInitialState: State = {
    users: []
};

export const userReducer = (state: State, action: UserActions) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users };
        default:
            return state;
    }
};
